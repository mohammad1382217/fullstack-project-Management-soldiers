import React from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../redux/themeSlice";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const HandleTheme = (color) => dispatch(setTheme(color));
  return (
    <div className="flex items-center">
      <div className="border border-solid border-black rounded flex flex-wrap w-full p-4">
        <h2 className="flex items-center justify-center">تغییر تم پنل کاربری :</h2>
        <div
          onClick={() => HandleTheme('green-500')}
          className="rounded-[50%] bg-green-500 py-2 px-4 w-8 h-8 mx-2 my-2 cursor-pointer"
        ></div>
        <div
          onClick={() => HandleTheme('orange-200')}
          className="rounded-[50%] bg-orange-200 py-2 px-4 w-8 h-8 mx-2 my-2 cursor-pointer"
        ></div>
        <div
          onClick={() => HandleTheme('blue-300')}
          className="rounded-[50%] bg-blue-300 py-2 px-4 w-8 h-8 mx-2 my-2 cursor-pointer"
        ></div>
        <div
          onClick={() => HandleTheme('yellow-200')}
          className="rounded-[50%] bg-yellow-200 py-2 px-4 w-8 h-8 mx-2 my-2 cursor-pointer"
        ></div>
        <div
          onClick={() => HandleTheme('red-300')}
          className="rounded-[50%] bg-red-300 py-2 px-4 w-8 h-8 mx-2 my-2 cursor-pointer"
        ></div>
      </div>
    </div>
  );
};
