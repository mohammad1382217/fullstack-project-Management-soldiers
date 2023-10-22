import React from "react";
import { BiSolidMessageError } from "react-icons/bi";
import { Parag } from "./Layout";

export const AlertConnectToServer = () => {
  return (
    <div
      className="fixed z-50 bg-red-100 border-t-4 top-0 right-0 left-0 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <BiSolidMessageError className="fill-current h-4 w-4 text-red-500 mr-4"/>
        </div>
        <div>
          <Parag Pclass={"font-bold"} Paragraph={"خطای اتصال به سرور"}/>
          <Parag Pclass={"text-sm"} Paragraph={"اتصال به سرور با مشکل روبه رو شده است. لطفا این صفحه را مجدد بارگذاری کنید."}/>
        </div>
      </div>
    </div>
  );
};
