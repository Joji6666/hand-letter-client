"use client";

import { type ReactElement, useState } from "react";

import LeftSideToolbar from "./components/LeftSideToolbar";
import RightSideToolbar from "./components/RightSideToolbar";
import WorkCanvas from "./components/WorkCanvas";
import { useGetProjects } from "./hooks/query/useGetProjects";
import { type WorkData } from "./types";

export default function Home(): ReactElement {
  const [workDatas, setWorkDatas] = useState<WorkData[]>([]);
  const [currentWorkType, setCurrentWorkType] = useState("");

  const { data } = useGetProjects(1);

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  console.log(data, "data @@");

  return (
    <main className="w-full h-[94vh] flex mt-[70px]">
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
