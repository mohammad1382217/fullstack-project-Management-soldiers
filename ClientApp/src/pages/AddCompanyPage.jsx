import React, { useEffect } from "react";
import { Menu } from "../components/Menu";
import { HeaderBottom, HeaderTop } from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "react-multi-date-picker/components/button";
import LohePosti from "../components/LohePosti";
import axios from "axios";
import { setLohePostis } from "../redux/panelSlice";
import { BASE_URL } from "../../api/apiConfig";
import { setResetLohe } from "../redux/storeSlice";

const AddCompanyPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setResetLohe());
  }, [dispatch]);

  const showMenu = useSelector((state) => state.app.isShowMenu);
  const Lohe = useSelector((state) => state.app.Lohe);
  const LohePostis = useSelector((state) => state.panel.LohePostis);

  const handleAddLohe = async () => {
    try {
      const response = await axios.post(`${BASE_URL}LohePosti`, Lohe);
      const data = response.data;
      dispatch(setLohePostis([...LohePostis, data]));
    } catch (error) {
      if (error.response) {
        console.log(error.message);
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <header>
        <HeaderTop NavTitle="افزودن لوحه پستی" />
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
              <HeaderBottom titr="افزودن لوحه پستی" redirect={"/AddCompany"} />
            </div>
            <LohePosti />
            <Buttons value="افزودن" onClick={handleAddLohe} />
            <Buttons value="پرینت" onClick={handlePrint} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddCompanyPage;
