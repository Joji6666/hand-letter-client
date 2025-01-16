"use client";

import { useAtomValue } from "jotai";
import React, { ReactElement } from "react";
import { WORK_DATAS } from "../atoms/workDatas";

const PreviewPage = (): ReactElement => {
  const workDatas = useAtomValue(WORK_DATAS);

  return (
    <section className="w-[100vw] h-[94vh] overflow-y-auto flex flex-col items-center justify-center">
      <div className="w-[480px]  h-full">
        {workDatas.map((workData, index) => (
          <div key={`workData-${index}`}>{workData.element}</div>
        ))}
      </div>
    </section>
  );
};

export default PreviewPage;
