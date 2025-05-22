import React, { type ReactElement } from "react";

import { Button } from "@/app/shared/components/buttons/Button";

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
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {BASE_TEMPLATES.map((template, index) => (
        <li
          key={`template-${index}`}
          className="bg-white rounded-xl overflow-hidden shadow-md card-hover  translate-y-4 transition-all duration-700"
          style={{ transitionDelay: `${0.1 * (index % 3)}s` }}
        >
          <div className="relative ">
            <img
              src={template.imageUrl}
              alt={template.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0  hover:opacity-100 transition-opacity flex items-end justify-center p-6">
              <Button className="mb-6" onClick={() => handleOnClick(template)}>
                템플릿 선택하기
              </Button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">{template.name}</h3>
            <p className="text-sm text-gray-500">{template.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TemplateList;
