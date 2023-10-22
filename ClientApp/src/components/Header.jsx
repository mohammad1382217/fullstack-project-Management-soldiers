import { useDispatch, useSelector } from "react-redux";
import { setIsShowMenu } from "../redux/storeSlice";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Image, H1Title } from "./Layout";
import Photo from "../assets/Visitor_logo.png";

export const HeaderBottom = ({ titr, redirect }) => {
  return (
    <div className="flex flex-wrap items-center -mx-2 mb-4 px-2">
      <div className="flex basis-6/12 flex-shrink-0 flex-grow-0 max-w-[50%] w-full p-0 mb-0 bg-transparent">
        <h1 className="m-0 text-xl text-[#212529]">{titr}</h1>
      </div>
      <div className="flex basis-6/12 flex-shrink-0 flex-grow-0 max-w-[50%] w-full p-0 mb-0 bg-transparent justify-end">
        <ol className="flex flex-wrap list-none rounded">
          <li>
            <Link to="/panel" className="text-sm">
              خانه
            </Link>
          </li>
          <li>
            <Link
              to={redirect}
              className="before:content-['/'] before:pl-2 pr-2 text-sm"
            >
              {titr}
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export const HeaderTop = ({ NavTitle }) => {
  const isShowMenu = useSelector((state) => state.app.isShowMenu);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  return (
    <nav
      className={
        (isShowMenu ? "mr-64" : "mr-[4.25rem]") +
        ` max-[768px]:mr-0 max-[360px]:text-sm flex items-center justify-between bg-${theme} px-4 py-1`
      }
    >
      <div className="flex items-center h-6">
        <div>
          <FaBars
            className="ml-4 text-2xl cursor-pointer"
            onClick={() => dispatch(setIsShowMenu(!isShowMenu))}
          />
        </div>
        <H1Title H1class={"text-lg"} BoldTitle={NavTitle} />
      </div>
      <section className="w-30 h-12">
        <Image
          Src={Photo}
          ImageClass={"w-full h-full object-cover font-black"}
          Alt={"Visitor-logo"}
        />
      </section>
    </nav>
  );
};
