import axios from "axios";
import Select from "../components/Select";
import { Menu } from "../components/Menu";
import ThTable from "../components/ThTable";
import { Button } from "../components/Layout";
import HeadersLohe from "../data/theader.json";
import { BASE_URL } from "../../api/apiConfig";
import { setEditingId, setIsConfirmOpen, setLohe, setLohePosti } from "../redux/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import DeleteConfirm from "../components/DeleteConfirm";
import React, { Fragment, useEffect, useState } from "react";
import { HeaderBottom, HeaderTop } from "../components/Header";
import { fetchLohePostis, fetchSoldier, setDeleteLohePostis, setLohePostis } from "../redux/panelSlice";

const ShowAllLohePosti = () => {
  const optionHours1 = ["1-3 19-21 13-15 7-9", "22-24 20-22 14-16 8-10"];
  const optionHours2 = ["3-5 21-23 15-17 9-11", "4-6 22-24 16-18 10-12"];
  const optionHours3 = ["5-7 23-1 17-19 11-13", "6-8 24-2 18-20 12-14"];
  const rows = useSelector((state) => state.panel.rows);
  const optionsSoldier = rows.map((item) => `${item.firstName} ${item.lastName}`);
  const editingId = useSelector((state) => state.app.editingId);
  const showMenu = useSelector((state) => state.app.isShowMenu);
  const LohePostis = useSelector((state) => state.panel.LohePostis);
  const Lohe = useSelector((state) => state.app.Lohe);
  const [Headers] = useState(HeadersLohe);
  const dispatch = useDispatch();

  const handleConfirm = () => dispatch(setIsConfirmOpen());

  const handleEdit = (Id) => { 
    dispatch(setEditingId(Id));
    const editLohePosti = LohePostis?.filter(LohePosti => LohePosti.id === Id)[0];
    dispatch(setLohePosti(editLohePosti));
  }

  const handleSave = async (Id) => {
    await axios.put(`${BASE_URL}LohePosti/${Id}`, Lohe);
    dispatch(setEditingId(0));
    const response = await axios.get(`${BASE_URL}LohePosti`);
    dispatch(setLohePostis(response.data));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    dispatch(setLohe({ key: name, value }));
  };

  const handleDelete = async (id, index) => {
    try {
      await axios.delete(`${BASE_URL}LohePosti/${id}`);
      dispatch(setDeleteLohePostis(index));
      dispatch(setIsConfirmOpen());
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    Promise.allSettled([
      dispatch(fetchLohePostis()),
      dispatch(fetchSoldier()),
    ])
  }, [dispatch]);

  return (
    <div>
      <header>
        <HeaderTop NavTitle="آمار کل لوایح پستی" />
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
              <HeaderBottom
                titr="آمار کل لوایح پستی"
                redirect={"/AllLohePosti"}
              />
            </div>
            <div className="">
              {LohePostis.length === 0
                ? null
                : LohePostis.map((Lohe, index) => (
                  <Fragment key={index}>
                    <div className="relative overflow-x-auto shadow-md rounded-lg mt-4 h-auto bg-[#2E323C] mb-4">
                      <table className="table-auto border w-full h-full text-sm text-center text-gray-500">
                        <thead className="text-xs bg-[#5B7D87] text-white">
                          <tr>
                            {Headers.HeadersLohe.map((item) => {
                              if (item.id === 1) {
                                return (
                                  <ThTable
                                    key={item.id}
                                    ColSpan={7}
                                    RowSpan={1}
                                    title={item.title}
                                    ThClass={
                                      "px-2 py-1.5 border border-[#2E323C]"
                                    }
                                  />
                                );
                              }
                              if (item.id === 2) {
                                return (
                                  <ThTable
                                    key={item.id}
                                    ColSpan={3}
                                    RowSpan={1}
                                    title={`${item.title} : ${Lohe.date}`}
                                    ThClass={
                                      "px-2 py-1.5 border border-[#2E323C]"
                                    }
                                  />
                                );
                              }
                              return null;
                            })}
                          </tr>
                        </thead>
                        <thead className="text-xs bg-[#5B7D87] text-white">
                          <tr>
                            {Headers.HeadersLohe.map((item) => {
                              const { id, title } = item;
                              if (id > 2 && id < 5) {
                                return (
                                  <ThTable
                                    key={id}
                                    ColSpan={1}
                                    RowSpan={3}
                                    title={title}
                                    ThClass={
                                      "px-2 py-1.5 border border-[#2E323C]"
                                    }
                                  />
                                );
                              }
                            })}
                          </tr>
                          <tr>
                            <ThTable
                              ColSpan={8}
                              RowSpan={1}
                              title={"مواضع پستی"}
                              ThClass={"px-2 py-1.5 border border-[#2E323C]"}
                            />
                          </tr>
                          <tr>
                            {Headers.HeadersLohe.map((item) => {
                              const { id, title } = item;
                              if (id > 4 && id < 13) {
                                return (
                                  <ThTable
                                    key={id}
                                    ColSpan={1}
                                    RowSpan={1}
                                    title={title}
                                    ThClass={"px-2 py-1.5 border border-[#2E323C]"}
                                  />
                                );
                              }
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border border-[#2E323C] text-center">
                            <td className="border border-[#2E323C] bg-[#5B7D87] text-white">
                              1
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"postHoursPass1"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.postHoursPass1}
                                oneOptionText={"انتخاب"}
                                options={optionHours1}
                              /> : Lohe.postHoursPass1}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"springPass1"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.springPass1}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.springPass1}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"castlePass1"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.castlePass1}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.castlePass1}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"workshopPass1"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.workshopPass1}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.workshopPass1}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"mechanizedGuardPass1"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.mechanizedGuardPass1}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.mechanizedGuardPass1}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"amadGuardPass1"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.amadGuardPass1}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.amadGuardPass1}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"armedGuardPass1"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.armedGuardPass1}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.armedGuardPass1}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"guardPass1"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.guardPass1}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.guardPass1}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"medicalGuardPass1"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.medicalGuardPass1}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.medicalGuardPass1}
                            </td>
                          </tr>
                          <tr className="bg-white border border-[#2E323C] text-center">
                            <td className="border border-[#2E323C] bg-[#5B7D87] text-white">
                              2
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"postHoursPass2"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.postHoursPass2}
                                oneOptionText={"انتخاب"}
                                options={optionHours2}
                              /> : Lohe.postHoursPass2}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"springPass2"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.springPass2}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.springPass2}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"castlePass2"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.castlePass2}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.castlePass2}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"workshopPass2"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.workshopPass2}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.workshopPass2}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"mechanizedGuardPass2"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.mechanizedGuardPass2}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.mechanizedGuardPass2}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"amadGuardPass2"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.amadGuardPass2}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.amadGuardPass2}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"armedGuardPass2"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.armedGuardPass2}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.armedGuardPass2}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"guardPass2"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.guardPass2}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.guardPass2}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"medicalGuardPass2"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.medicalGuardPass2}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.medicalGuardPass2}
                            </td>
                          </tr>
                          <tr className="bg-white border border-[#2E323C] text-center">
                            <td className="border border-[#2E323C] bg-[#5B7D87] text-white">
                              3
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"postHoursPass3"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.postHoursPass3}
                                oneOptionText={"انتخاب"}
                                options={optionHours3}
                              /> : Lohe.postHoursPass3}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"springPass3"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.springPass3}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.springPass3}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"castlePass3"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.springPass3}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.castlePass3}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"workshopPass3"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.workshopPass3}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.workshopPass3}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"mechanizedGuardPass3"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.mechanizedGuardPass3}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.mechanizedGuardPass3}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"amadGuardPass3"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.amadGuardPass3}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.amadGuardPass3}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"armedGuardPass3"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.armedGuardPass3}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.armedGuardPass3}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"guardPass3"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.guardPass3}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.guardPass3}
                            </td>
                            <td className="border border-[#2E323C]">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"medicalGuardPass3"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.medicalGuardPass3}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.medicalGuardPass3}
                            </td>
                          </tr>
                        </tbody>
                        <tfoot className="bg-[#5B7D87] text-white">
                          <tr>
                            {Headers.HeadersLohe.map((item) => {
                              const { id, title } = item;
                              if (id === 13) {
                                return (
                                  <ThTable
                                    key={id}
                                    ColSpan={2}
                                    RowSpan={1}
                                    title={title}
                                    ThClass={"px-2 py-1.5 border border-[#2E323C]"}
                                  />
                                );
                              }
                            })}
                            <td className="border border-[#2E323C] text-gray-500">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"armedForceMorning1"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.armedForceMorning1}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.armedForceMorning1}
                            </td>
                            <td className="border border-[#2E323C] text-gray-500">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"armedForceMorning2"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.armedForceMorning2}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.armedForceMorning2}
                            </td>
                            <td className="border border-[#2E323C] text-gray-500">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"armedForceMorning3"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.armedForceMorning3}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.armedForceMorning3}
                            </td>
                            {Headers.HeadersLohe.map((item) => {
                              const { id, title } = item;
                              if (id === 16) {
                                return (
                                  <ThTable
                                    key={id}
                                    ColSpan={1}
                                    RowSpan={1}
                                    title={title}
                                    ThClass={"px-2 py-1.5 border border-[#2E323C]"}
                                  />
                                );
                              }
                            })}
                            <td
                              className="border border-[#2E323C] text-gray-500"
                              colSpan={2}
                            >
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"armament"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.armament}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.armament}
                            </td>
                            <td
                              rowSpan={3}
                              colSpan={4}
                              className="border border-[#2E323C] bg-white text-gray-500"
                            >
                              امضای مسئول قرارگاه
                            </td>
                          </tr>
                          <tr>
                            {Headers.HeadersLohe.map((item) => {
                              const { id, title } = item;
                              if (id === 14) {
                                return (
                                  <ThTable
                                    key={id}
                                    ColSpan={2}
                                    RowSpan={1}
                                    title={title}
                                    ThClass={"px-2 py-1.5 border border-[#2E323C]"}
                                  />
                                );
                              }
                            })}
                            <td className="border border-[#2E323C] text-gray-500">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"kitchen1"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.kitchen1}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.kitchen1}
                            </td>
                            <td className="border border-[#2E323C] text-gray-500">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"kitchen2"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.kitchen2}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.kitchen2}
                            </td>
                            <td className="border border-[#2E323C] text-gray-500">
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"kitchen3"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.kitchen3}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.kitchen3}
                            </td>
                            {Headers.HeadersLohe.map((item) => {
                              const { id, title } = item;
                              if (id === 17) {
                                return (
                                  <ThTable
                                    key={id}
                                    ColSpan={1}
                                    RowSpan={1}
                                    title={title}
                                    ThClass={"px-2 py-1.5 border border-[#2E323C]"}
                                  />
                                );
                              }
                            })}
                            <td
                              className="border border-[#2E323C] text-gray-500"
                              colSpan={2}
                            >
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"refuge"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.refuge}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.refuge}
                            </td>
                          </tr>
                          <tr>
                            {Headers.HeadersLohe.map((item) => {
                              const { id, title } = item;
                              if (id === 15) {
                                return (
                                  <ThTable
                                    key={id}
                                    ColSpan={2}
                                    RowSpan={1}
                                    title={title}
                                    ThClass={"px-2 py-1.5 border border-[#2E323C]"}
                                  />
                                );
                              }
                            })}
                            <td
                              className="border border-[#2E323C] text-gray-500"
                              colSpan={3}
                            >
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"watchman"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.watchman}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.watchman}
                            </td>
                            {Headers.HeadersLohe.map((item) => {
                              const { id, title } = item;
                              if (id === 18) {
                                return (
                                  <ThTable
                                    key={id}
                                    ColSpan={1}
                                    RowSpan={1}
                                    title={title}
                                    ThClass={"px-2 py-1.5 border border-[#2E323C]"}
                                  />
                                );
                              }
                            })}
                            <td
                              className="border border-[#2E323C] text-gray-500"
                              colSpan={2}
                            >
                              {editingId === Lohe.id ? <Select
                                Selectclass={
                                  "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                                }
                                SelectName={"shelterManager"}
                                SelectOnChange={handleSelectChange}
                                DefaultValue={Lohe.shelterManager}
                                oneOptionText={"..."}
                                options={optionsSoldier}
                              /> : Lohe.shelterManager}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <DeleteConfirm
                      massage={`آیا مطمئن هستید که میخواهید این لوحه پستی را حذف کنید؟`}
                      OnDelete={() => handleDelete(Lohe.id, index)}
                    />
                    {editingId === Lohe.id ?
                      <Button
                        OnClick={() => handleSave(Lohe.id)}
                        ClassName={
                          "m-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto py-1.5 sm:px-5 sm:py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        }
                        btnTitle={"ذخیره"}
                      /> :
                      <div className="px-2 mb-4">
                        <Button
                          OnClick={() => handleConfirm()}
                          ClassName={
                            "my-1.5 sm:mx-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto py-1.5 sm:px-5 sm:py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                          }
                          btnTitle={"حذف"}
                        />
                        <Button
                          OnClick={() => handleEdit(Lohe.id)}
                          ClassName={
                            "my-1.5 sm:mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-1.5 sm:px-5 sm:py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          }
                          btnTitle={"ویرایش"}
                        />
                      </div>
                    }

                  </Fragment>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShowAllLohePosti;
