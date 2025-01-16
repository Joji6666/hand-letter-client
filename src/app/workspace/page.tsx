"use client";

import WorkCanvas from "./components/WorkCanvas";
import LeftSideToolbar from "./components/LeftSideToolbar";

import { useState } from "react";
import { WorkData } from "./types";
import RightSideToolbar from "./components/RightSideToolbar";

export default function Home() {
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
