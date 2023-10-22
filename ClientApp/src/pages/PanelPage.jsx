import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdLocalPostOffice } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { HeaderTop, HeaderBottom } from "../components/Header";
import { Menu } from "../components/Menu";
import { DashboardCard } from "../components/DashboardCard";
import { Table } from "../components/Table";
import { FooterBottom, FooterTop } from "../components/Footer";
import { fetchSoldier, fetchLohePostis } from "../redux/panelSlice";
import { setIsShowMenu } from "../redux/storeSlice";

export default function PanelPage() {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.panel.rows);
  const LohePostis = useSelector((state) => state.panel.LohePostis);

  const handleResize = () => {
    if(window.innerWidth <= 768) {
      dispatch(setIsShowMenu(false));
    } else {
      dispatch(setIsShowMenu(true));
    }
  }

  useEffect(() => {
    window.addEventListener('resize',handleResize);
    Promise.allSettled([
      dispatch(fetchSoldier()),
      dispatch(fetchLohePostis()),
    ]);

    return () => {
      window.removeEventListener('resize',handleResize)
    }
  }, [dispatch]);

  const showMenu = useSelector((state) => state.app.isShowMenu);
  const isLoading = useSelector((state) => state.login.isLoading);

  const card = [
    {
      id: 1,
      color: "#28a745",
      Number: rows.length,
      icon: (
        <IoIosPersonAdd className="before:inline-block text-7xl absolute top-5 lg:left-4 md:left-2 max-[768px]:left-1 transition-opacity" />
      ),
      title: "افزودن نیروی وظیفه جدید",
      link: "/Soldierinformation",
    },
    {
      id: 2,
      color: "#17a2b8",
      Number: LohePostis.length,
      icon: (
        <MdLocalPostOffice className="before:inline-block text-7xl absolute top-5 lg:left-4 md:left-2 max-[768px]:left-1 transition-opacity" />
      ),
      title: "افزودن لوحه پستی جدید",
      link: "/AddCompany",
    },
  ];
  return isLoading ? null : (
    <>
      <header>
        <HeaderTop NavTitle="پنل کاربری" />
        <Menu />
      </header>
      <main>
        <div className={"h-full max-[768px]:mr-0" + (showMenu ? " mr-64" : " mr-[4.25rem]")}>
          <div className="py-4 px-2">
            <div className="container-fluid px-2">
              <HeaderBottom titr="داشبورد" redirect={"/panel"} />
              <div className="grid grid-cols-2 gap-4">
                {card.map((card) => {
                  const { id, color, Number, title, icon, link } = card;
                  return (
                    <DashboardCard
                      key={id}
                      color={color}
                      Number={Number}
                      title={title}
                      icon={icon}
                      link={link}
                    />
                  );
                })}
              </div>
              <Table data={rows} />
            </div>
          </div>
        </div>
      </main>
      <footer
        className={"border-t-2 max-[768px]:mr-0" + (showMenu ? " mr-64" : " mr-[4.25rem]")}
      >
        <FooterTop />
        <FooterBottom />
      </footer>
    </>
  );
}
