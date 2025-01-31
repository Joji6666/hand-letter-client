"use client";

import React, { type ReactElement, useState } from "react";

import Button from "../shared/components/buttons/Button";
import TextInput from "../shared/components/inputs/TextInput";
import ky from "ky";

const AuthPage = (): ReactElement => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (value: string, key: string): void => {
    if (key === "userId") {
      setUserId(value);
    } else {
      setPassword(value);
    }
  };

  const signUp = async (): Promise<void> => {
    const res = await ky.post(`${process.env.NEXT_PUBLIC_API_URL}/auth`, {
      json: { userId, password } // ✅ JSON 데이터 자동 변환
    });

    console.log(res, "res @");
  };
  const login = async (): Promise<void> => {
    const res = await ky.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      json: { userId, password }, // ✅ JSON 데이터 전송
      credentials: "include" // ✅ 쿠키 포함 요청
    });

    console.log(res, "res @");
  };

  return (
    <section className="w-full h-[94vh] flex flex-col items-center justify-center">
      <div className="w-[40%] border rounded p-10 flex flex-col items-center  justify-center">
        <TextInput onChange={(v) => handleOnChange(v, "userId")} />
        <TextInput onChange={(v) => handleOnChange(v, "password")} />
        <Button onClick={signUp}>가입</Button>
        <Button onClick={login}>로그인</Button>
      </div>
    </section>
  );
};

export default AuthPage;
