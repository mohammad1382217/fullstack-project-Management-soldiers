import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu } from "../components/Menu";
import { Form } from "../components/Layout";
import { Table } from "../components/Table";
import { HeaderBottom, HeaderTop } from "../components/Header";
import { fetchSoldier } from "../redux/panelSlice";

const Soldierinformation = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.app.isShowMenu);
  const rows = useSelector((state) => state.panel.rows);

  useEffect(() => {
    dispatch(fetchSoldier());
  }, [dispatch]);

  return (
    <div>
      <header>
        <HeaderTop NavTitle="اطلاعات سربازان" />
        <Menu />
      </header>
      <main>
        <div
          className={
            "h-full max-[768px]:mr-0" + (showMenu ? " mr-64" : " mr-[4.25rem]")
          }
        >
          <div className="py-4 px-4">
            <div className="container px-4">
              <HeaderBottom titr="اطلاعات سربازان" />
            </div>
            <Form />
            <Table data={rows} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Soldierinformation;
