import React, { type ReactElement, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: Props): ReactElement => {
  return (
    <button
      className=" w-full p-2 bg-blue-500 text-white rounded  hover:bg-blue-400 transition-colors duration-300 "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
