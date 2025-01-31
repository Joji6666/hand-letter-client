import React, { type ChangeEvent, type ReactElement } from "react";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (value: string) => void; // 사용자 정의 onChange
}

const TextInput = ({ onChange, ...rest }: Props): ReactElement => {
  return (
    <input
      {...rest}
      type="text"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(e.target.value); // 사용자 정의 onChange 호출
        }
      }}
      className={`w-full p-2 border rounded  hover:border-blue-500 ${rest.className || ""}`}
    />
  );
};

export default TextInput;
