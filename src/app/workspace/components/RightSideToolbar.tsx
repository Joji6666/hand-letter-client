import React, { type ReactElement } from "react";

interface Props {
  currentWorkType: string;
}

const RightSideToolbar = ({ currentWorkType }: Props): ReactElement => {
  return (
    <div className="flex w-[25%]  h-full flex-col  ">
      <p>{currentWorkType}</p>
    </div>
  );
};

export default RightSideToolbar;
