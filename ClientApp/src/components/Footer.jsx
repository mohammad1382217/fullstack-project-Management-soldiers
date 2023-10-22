import React from "react";
import { H1Title, Parag } from "./Layout";

export const FooterTop = () => {
  return (
    <div className='w-full my-6 grid md:grid-cols-2 gap-8 text-center'>
      <div className='flex flex-col items-center justify-center'>
        <H1Title BoldTitle='سازنده' />
        <Parag Paragraph='محمّد محمّدزاده' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <H1Title BoldTitle='مشاور' />
        <Parag Paragraph='احمد محمّدزاده' />
        <Parag Paragraph='محسن محمّدزاده' />
      </div>
    </div>
  );
};

export const FooterBottom = () => {
  return (
    <div className="flex flex-wrap flex-row-reverse items-center justify-between text-gray-600 px-4 py-2 border-t-2 text-left">
      <Parag Pclass={"m-1"} Paragraph="copyright @2022-2023" />
      <Parag Pclass={"m-1"} Paragraph="Grohan Tank Company all rights reserved" />
    </div>
  );
}

