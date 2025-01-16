"use client";

import React, { type ReactElement, useState } from "react";
import { useRouter } from "next/navigation";

import { WORK_DATAS } from "@/app/atoms/workDatas";
import { Pagination } from "antd";
import { useSetAtom } from "jotai";

import { type WorkData } from "../types";

interface Props {
  workDatas: WorkData[];
  setCurrentWorkType: React.Dispatch<React.SetStateAction<string>>;
}

const WorkCanvas = ({ workDatas, setCurrentWorkType }: Props): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(5);

  const setWorkDatas = useSetAtom(WORK_DATAS);

  const router = useRouter();

  const handlePage = (page: number): void => {
    setCurrentPage(page);

    if (workDatas[page - 1]) {
      setCurrentWorkType(workDatas[page - 1].type);
    } else {
      setCurrentWorkType("empty");
    }
  };

  const handlePreview = (): void => {
    setWorkDatas(workDatas);
    router.push("/preview");
  };

  return (
    <section className="w-[50%] h-full p-8 bg-zinc-100 flex flex-col gap-8">
      <div>
        <button onClick={handlePreview}>미리보기</button>
      </div>
      <div className=" w-full h-full overflow-y-auto border border-zinc-400">
        {workDatas.map(
          (workData, index) =>
            currentPage === workData.page && (
              <div className="h-full w-full" key={`work-data-${index}`}>
                {workData.element}
              </div>
            )
        )}
      </div>
      <div className="w-full items-center justify-center">
        <Pagination
          className="flex items-center justify-center"
          defaultCurrent={1}
          total={totalPage}
          pageSize={1}
          onChange={handlePage}
        />
      </div>
    </section>
  );
};

export default WorkCanvas;
