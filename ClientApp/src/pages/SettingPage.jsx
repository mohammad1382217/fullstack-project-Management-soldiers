import React from "react";
import { useSelector } from "react-redux";
import { HeaderBottom, HeaderTop } from "../components/Header";
import { Menu } from "../components/Menu";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { Changeinformation } from "../components/Changeinformation";

const SettingPage = () => {
  const showMenu = useSelector((state) => state.app.isShowMenu);
  return (
    <div>
      <header>
        <HeaderTop NavTitle="تنظیمات" />
        <Menu />
      </header>
      <main>
        <div className={"h-full max-[768px]:mr-0" + (showMenu ? " mr-64" : " mr-[4.25rem]")}>
          <div className="py-4 px-4">
            <div className="container px-4">
              <HeaderBottom titr="تنظیمات" redirect={"/Setting"} />
            </div>
            <ThemeSwitcher />
            <Changeinformation />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingPage;
