import React, { type ReactElement } from "react";

const AccountInformation = (): ReactElement => {
  return (
    <div className="w-full h-full p-10 flex flex-col  gap-8 items-center justify-center ">
      <h2>마음 전하기</h2>
      <ul className=" w-[90%]  p-4 flex flex-col rounded border border-rose-300 gap-4 ">
        <li className="flex flex-col">
          <p>성함 : 홍길동</p>
          <p>계좌번호: 3333046923805 카카오뱅크</p>
        </li>
        <li className="flex flex-col">
          <p>성함 : 홍길동</p>
          <p>계좌번호: 3333046923805 카카오뱅크</p>
        </li>
      </ul>
    </div>
  );
};

export default AccountInformation;
