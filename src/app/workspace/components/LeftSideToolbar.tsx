import React, { ReactElement } from "react";
import TemplateList from "./TemplateList";
import { WorkData } from "../types";

interface Props {
  setWorkDatas: React.Dispatch<React.SetStateAction<WorkData[]>>;
  setCurrentWorkType: React.Dispatch<React.SetStateAction<string>>;
}

const LeftSideToolbar = ({
  setWorkDatas,
  setCurrentWorkType
}: Props): ReactElement => {
  return (
    <section className="w-[25%] h-full bg-zinc-100 border-r border-zinc-300 ">
      <TemplateList
        setWorkDatas={setWorkDatas}
        setCurrentWorkType={setCurrentWorkType}
      />
    </section>
  );
};

export default LeftSideToolbar;
