import React, { type ReactElement } from "react";

import { Input } from "@/app/shared/components/inputs/Input";
import { Search } from "lucide-react";

import { type WorkData } from "../types";
import TemplateList from "./TemplateList";

interface Props {
  setWorkDatas: React.Dispatch<React.SetStateAction<WorkData[]>>;
  setCurrentWorkType: React.Dispatch<React.SetStateAction<string>>;
}

const LeftSideToolbar = ({
  setWorkDatas,
  setCurrentWorkType
}: Props): ReactElement => {
  return (
    <div className="flex w-[25%]  h-full flex-col  ">
      <div className="border-b border-border p-4">
        <h2 className="mb-3 text-xl font-semibold">템플릿</h2>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="text" placeholder="템플릿 검색..." className="pl-8" />
        </div>
      </div>
      <div className="overflow-y-auto p-2">
        <TemplateList
          setWorkDatas={setWorkDatas}
          setCurrentWorkType={setCurrentWorkType}
        />
      </div>
    </div>
  );
};

export default LeftSideToolbar;
