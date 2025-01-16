"use client";

import { type ReactElement, useState } from "react";

import LeftSideToolbar from "./components/LeftSideToolbar";
import RightSideToolbar from "./components/RightSideToolbar";
import WorkCanvas from "./components/WorkCanvas";
import { type WorkData } from "./types";

export default function Home(): ReactElement {
  const [workDatas, setWorkDatas] = useState<WorkData[]>([]);
  const [currentWorkType, setCurrentWorkType] = useState("");

  return (
    <main className="w-full h-[94vh] flex">
      <LeftSideToolbar
        setWorkDatas={setWorkDatas}
        setCurrentWorkType={setCurrentWorkType}
      />
      <WorkCanvas
        workDatas={workDatas}
        setCurrentWorkType={setCurrentWorkType}
      />
      <RightSideToolbar currentWorkType={currentWorkType} />
    </main>
  );
}
