"use client";

import { useAtomValue } from "jotai";
import React, { ReactElement } from "react";
import { WORK_DATAS } from "../atoms/workDatas";
import ReactDOMServer from "react-dom/server";
import { useRouter } from "next/navigation";

const PreviewPage = (): ReactElement => {
  const iframeContent = ReactDOMServer.renderToString(<Preview />);

  const router = useRouter();

  const handleGoBack = (): void => {
    router.back();
  };

  return (
    <section>
      <button onClick={handleGoBack}>뒤로가기</button>

      <iframe
        srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
  </style>
</head>
<body>
  ${iframeContent}
</body>
</html>`}
        width="600"
        height="400"
        style={{ border: "1px solid black" }}
      ></iframe>
    </section>
  );
};

export default PreviewPage;

const Preview = (): ReactElement => {
  const workDatas = useAtomValue(WORK_DATAS);

  return (
    <>
      {workDatas.map((workData, index) => (
        <div key={`workData-${index}`}>{workData.element}</div>
      ))}
    </>
  );
};
