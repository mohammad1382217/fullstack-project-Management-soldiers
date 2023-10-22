import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderBottom, HeaderTop } from "../components/Header";
import { Menu } from "../components/Menu";
import { Table } from "../components/Table";
import { fetchSoldier } from "../redux/panelSlice";

const FinancialSoldiers = () => {
  const showMenu = useSelector((state) => state.app.isShowMenu);
  const rows = useSelector((state) => state.panel.rows);
  const Financial = rows?.filter(row => row.departmentName === 'مالی') ?? [];

  const dispatch = useDispatch();
  useEffect(() => {
    Promise.allSettled([
      dispatch(fetchSoldier()),
    ])
  }, [dispatch]);

  return (
    <div>
      <header>
        <HeaderTop NavTitle="اطلاعات سربازان مالی" />
        <Menu />
      </header>
      <main>
        <div className={"h-full max-[768px]:mr-0" + (showMenu ? " mr-64" : " mr-[4.25rem]")}>
          <div className="py-4 px-4">
            <div className="container px-4">
              <HeaderBottom titr="سرباز مالی" redirect={"/AmadSoldier"} />
            </div>
            <Table data={Financial}/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinancialSoldiers;