import React, { ReactElement } from "react";

interface Props {
  currentWorkType: string;
}

const RightSideToolbar = ({ currentWorkType }: Props): ReactElement => {
  return (
    <section className="w-[25%] h-full bg-zinc-100 border-l border-zinc-300 ">
      {currentWorkType}
    </section>
  );
};

export default RightSideToolbar;
