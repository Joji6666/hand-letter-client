import React, { type ReactElement } from "react";

import { BASE_TEMPLATES } from "../constants/base_templates";
import { type Template, type WorkData } from "../types";

interface Props {
  setWorkDatas: React.Dispatch<React.SetStateAction<WorkData[]>>;
  setCurrentWorkType: React.Dispatch<React.SetStateAction<string>>;
}

const TemplateList = ({
  setWorkDatas,
  setCurrentWorkType
}: Props): ReactElement => {
  const handleOnClick = (template: Template): void => {
    setWorkDatas(template.elements);
    setCurrentWorkType(template.elements[0].type);
  };

  return (
    <ul className="flex p-2 gap-4">
      {BASE_TEMPLATES.map((template, index) => (
        <li
          key={`template-${index}`}
          className="p-4 border border-zinc-500 w-32 h-48 "
          onClick={() => handleOnClick(template)}
        >
          {template.name}
        </li>
      ))}
    </ul>
  );
};

export default TemplateList;
