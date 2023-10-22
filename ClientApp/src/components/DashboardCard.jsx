import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const DashboardCard = ({ color, Number, icon, title, link }) => {
  return (
    <div
      className="relative text-white rounded shadow-sm mb-5 flex flex-col flex-wrap xl:text-xl lg:text-lg md:text-sm sm:text-xs max-[640px]:text-xs"
      style={{ backgroundColor: color }}
    >
      <div className="p-2.5 max-[640px]:max-w-[4rem]">
        <h3 className="font-bold p-0 whitespace-nowrap z-40 relative text-white mb-4 ">
          {Number}
        </h3>
        <p className="font-normal text-white mb-4 ">{title}</p>
      </div>
      <div className="text-[rgba(0,0,0,0.15)]">{icon}</div>
      <Link
        to={link}
        className="py-1 block relative bg-[rgba(0,0,0,0.1)] z-10 text-center"
      >
        اطلاعات بیشتر
        <FaArrowCircleLeft className="text-center inline" />
      </Link>
    </div>
  );
};
