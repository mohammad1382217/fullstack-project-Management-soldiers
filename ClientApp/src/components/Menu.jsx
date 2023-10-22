import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaSolarPanel,
  FaUserAlt,
  FaAngleLeft,
  FaAngleDown,
  FaTimes,
} from "react-icons/fa";
import { IoInformation, IoSettingsSharp } from "react-icons/io5";
import { AiOutlinePartition } from "react-icons/ai";
import { MdLocalPostOffice } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import underMenu1, {
  underMenu2,
  underMenu3,
  underMenu4,
} from "../data/Undermenu";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowMenu } from "../redux/storeSlice";

export const LiMenu = ({ Link, icon, title }) => {
  const showMenu = useSelector((state) => state.app.isShowMenu);
  return (
    <li>
      <NavLink
        style={({ isActive }) => {
          return { backgroundColor: isActive ? "#475569" : "" };
        }}
        to={Link}
        className="flex items-center py-2 px-4 hover:text-white hover:bg-slate-600 justify-center"
      >
        {icon}
        {showMenu ? (
          <p className="w-full flex items-center justify-between p-2 text-[#c2c7d0] focus:bg-white focus:opacity-10">
            {title}
          </p>
        ) : (
          ""
        )}
      </NavLink>
    </li>
  );
};

export const Menu = () => {
  useEffect(() => {
    window.innerWidth < 768 ? dispatch(setIsShowMenu(false)) : null;
  }, []);

  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.app.isShowMenu);
  const loginsInformation = useSelector(
    (state) => state.info.loginsInformation
  );
  const [showUnderMenu1, setShowUnderMenu1] = useState(false);
  const [showUnderMenu2, setShowUnderMenu2] = useState(false);
  const [showUnderMenu3, setShowUnderMenu3] = useState(false);
  const [showUnderMenu4, setShowUnderMenu4] = useState(false);
  const ShowUnderMenuOne = () => setShowUnderMenu1(!showUnderMenu1);
  const ShowUnderMenuTwo = () => setShowUnderMenu2(!showUnderMenu2);
  const ShowUnderMenuThree = () => setShowUnderMenu3(!showUnderMenu3);
  const ShowUnderMenuFour = () => setShowUnderMenu4(!showUnderMenu4);

  return (
    <>
      <aside
        className={
          "min-h-full h-screen overflow-y-auto overflow-x-hidden z-10 fixed block top-0 bottom-0 right-0 shadow-lg bg-[#343a40] text-white transition-all" +
          (showMenu
            ? " w-64 z-50"
            : " max-[768px]:w-0 md:w-[4.25rem] max-[768px]:hidden")
        }
      >
        <div className="flex items-center justify-between border-b border-b-[#4b545c]">
          <div>
            <NavLink
              to="/panel"
              className="flex items-center text-xl py-3.5 px-2"
            >
              <FaSolarPanel className="mr-3.5 ml-4 text-2xl" />
              {showMenu ? <span>پنل مدیریت</span> : ""}
            </NavLink>
          </div>
          <div className="px-4">
            <FaTimes
              onClick={() => dispatch(setIsShowMenu())}
              className="text-xl transition-all cursor-pointer"
            />
          </div>
        </div>
        <div className="overflow-hidden relative px-2 w-full">
          <div className="border-b border-b-[#4f5962] mt-4 pb-4 flex items-center ">
            <div className="inline-block">
              <FaUserAlt className="rounded border-[#4f5962] mr-3.5 ml-4 text-2xl" />
            </div>
            <div className="inline-block">
              {showMenu ? (
                <NavLink
                  to="/panel"
                  className="text-[#c2c7d0] hover:text-white"
                >
                  {loginsInformation[0].nameAndfamily}
                </NavLink>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <nav className="flex flex-col flex-wrap pr-0 mb-0 list-none">
          <ul className="mt-2 mb-4">
            <li
              onClick={ShowUnderMenuThree}
              className="flex items-center py-2 px-4 hover:text-white hover:bg-slate-600 justify-center "
            >
              <IoInformation
                className={
                  showMenu ? "mr-[0.05rem] ml-2 text-2xl" : " text-2xl"
                }
              />
              {showMenu ? (
                <p className="w-full flex items-center justify-between p-2 text-[#c2c7d0] focus:bg-white focus:opacity-10 cursor-pointer">
                  اطلاعات سربازان
                  {showUnderMenu3 ? (
                    <FaAngleDown className="text-xl transition-all" />
                  ) : (
                    <FaAngleLeft className="text-xl transition-all" />
                  )}
                </p>
              ) : (
                ""
              )}
            </li>
            {showUnderMenu3 ? (
              <ul className="block">
                {underMenu3.map((underMenu) => {
                  const { id, title, icon, redirect } = underMenu;
                  return (
                    <li
                      key={id}
                      className="mb-0 list-none flex items-center py-2 px-4 cursor-pointer  hover:text-white hover:bg-slate-600 "
                    >
                      {icon}
                      {showMenu ? (
                        <NavLink to={redirect} className="p-2">
                          {title}
                        </NavLink>
                      ) : (
                        ""
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
            <li
              onClick={ShowUnderMenuOne}
              className="flex items-center py-2 px-4 hover:text-white hover:bg-slate-600 justify-center "
            >
              <AiOutlinePartition
                className={
                  showMenu ? "mr-[0.05rem] ml-2 text-2xl" : " text-2xl"
                }
              />
              {showMenu ? (
                <p className="w-full flex items-center justify-between p-2 text-[#c2c7d0] focus:bg-white focus:opacity-10 cursor-pointer">
                  قسمت ها
                  {showUnderMenu1 ? (
                    <FaAngleDown className="text-xl transition-all" />
                  ) : (
                    <FaAngleLeft className="text-xl transition-all" />
                  )}
                </p>
              ) : (
                ""
              )}
            </li>
            {showUnderMenu1 ? (
              <ul className="block">
                {underMenu1.map((underMenu) => {
                  const { id, title, icon, redirect } = underMenu;
                  return (
                    <li
                      key={id}
                      className="mb-0 list-none flex items-center py-2 px-4 cursor-pointer  hover:text-white hover:bg-slate-600 "
                    >
                      {icon}
                      {showMenu ? (
                        <NavLink to={redirect} className="p-2">
                          {title}
                        </NavLink>
                      ) : (
                        ""
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
            <li
              onClick={ShowUnderMenuFour}
              className="flex items-center py-2 px-4 hover:text-white hover:bg-slate-600 justify-center"
            >
              <MdLocalPostOffice
                className={(showMenu ? "mr-[0.05rem] ml-2" : "") + " text-2xl"}
              />
              {showMenu ? (
                <p className="w-full flex items-center justify-between p-2 text-[#c2c7d0] focus:bg-white focus:opacity-10 cursor-pointer">
                  لوحه پستی
                  {showUnderMenu4 ? (
                    <FaAngleDown className="text-xl transition-all" />
                  ) : (
                    <FaAngleLeft className="text-xl transition-all" />
                  )}
                </p>
              ) : (
                ""
              )}
            </li>
            {showUnderMenu4 ? (
              <ul className="block">
                {underMenu4.map((underMenu2) => {
                  const { id, title, icon, redirect } = underMenu2;
                  return (
                    <li
                      key={id}
                      className="mb-0 list-none flex items-center py-2 px-4 cursor-pointer  hover:text-white hover:bg-slate-600"
                    >
                      {icon}
                      {showMenu ? (
                        <NavLink to={redirect} className="p-2">
                          {title}
                        </NavLink>
                      ) : (
                        ""
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
            <li
              onClick={ShowUnderMenuTwo}
              className="flex items-center py-2 px-4 hover:text-white hover:bg-slate-600 justify-center"
            >
              <TbReport
                className={(showMenu ? "mr-[0.05rem] ml-2" : "") + " text-2xl"}
              />
              {showMenu ? (
                <p className="w-full flex items-center justify-between p-2 text-[#c2c7d0] focus:bg-white focus:opacity-10 cursor-pointer">
                  گزارش گیری
                  {showUnderMenu2 ? (
                    <FaAngleDown className="text-xl transition-all" />
                  ) : (
                    <FaAngleLeft className="text-xl transition-all" />
                  )}
                </p>
              ) : (
                ""
              )}
            </li>
            {showUnderMenu2 ? (
              <ul className="block">
                {underMenu2.map((underMenu2) => {
                  const { id, title, icon, redirect } = underMenu2;
                  return (
                    <li
                      key={id}
                      className="mb-0 list-none flex items-center py-2 px-4 cursor-pointer  hover:text-white hover:bg-slate-600"
                    >
                      {icon}
                      {showMenu ? (
                        <NavLink to={redirect} className="p-2">
                          {title}
                        </NavLink>
                      ) : (
                        ""
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
            <LiMenu
              title="تنظیمات"
              Link="/Setting"
              icon={
                <IoSettingsSharp
                  className={
                    (showMenu ? "mr-[0.05rem] ml-2" : "") + " text-2xl"
                  }
                />
              }
            />
            <LiMenu
              title="خروج"
              Link="/"
              icon={
                <ImExit
                  className={
                    (showMenu ? "mr-[0.05rem] ml-2" : "") + " text-2xl"
                  }
                />
              }
            />
          </ul>
        </nav>
      </aside>
    </>
  );
};
