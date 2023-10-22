import Select from "./Select";
import ThTable from "./ThTable";
import { weekDays } from "./Layout";
import { useRef, useState } from "react";
import { setLohe } from "../redux/storeSlice";
import HeadersLohe from "../data/theader.json";
import DatePicker from "react-multi-date-picker";
import { useDispatch, useSelector } from "react-redux";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";


export const LohePosti = () => {
  const rows = useSelector((state) => state.panel.rows);
  const ref = useRef("");
  const optionHours1 = ["1-3 19-21 13-15 7-9", "22-24 20-22 14-16 8-10"];
  const optionHours2 = ["3-5 21-23 15-17 9-11", "4-6 22-24 16-18 10-12"];
  const optionHours3 = ["5-7 23-1 17-19 11-13", "6-8 24-2 18-20 12-14"];
  const optionsSoldier = rows.map((item) => `${item.firstName} ${item.lastName}`);
  const dispatch = useDispatch();
  const [Headers] = useState(HeadersLohe);

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    dispatch(setLohe({ key: name, value }));
  };

  const handleDateChange = (name, date) => {
    dispatch(
      setLohe({
        key: name,
        value: date?.convert(persian, persian_fa).format().toString() ?? "",
      })
    );
  };

  return (
    <>
      <div
        id="print"
        className="relative overflow-x-auto mx-auto shadow-md sm:rounded-lg mt-4 bg-[#2E323C]"
      >
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
                      ThClass={"px-2 py-1.5 border border-[#2E323C]"}
                    />
                  );
                }
                if (item.id === 2) {
                  return (
                    <th
                      scope="col"
                      colSpan={3}
                      className="px-2 py-1.5 border border-[#2E323C]"
                      key={item.id}
                    >
                      {item.title}:
                      <DatePicker
                        onChange={(date) => handleDateChange("date", date)}
                        weekDays={weekDays}
                        calendar={persian}
                        locale={persian_fa}
                        calendarPosition="bottom-center"
                        inputClass="outline-0 w-24 mx-4 py-1.5 px-3 text-base font-normal text-[#212529] bg-white border border-solid border-[#ced4da] rounded-md focus:ring-blue-500 focus:border-blue-500"
                        id="date"
                        placeholder="تاریخ"
                        required
                      />
                    </th>
                  );
                }
                return null;
              })}
            </tr>
          </thead>
          <thead className="text-xs bg-[#5B7D87] text-white">
            <tr>
              {Headers.HeadersLohe.map((item) => {
                if (item.id > 2 && item.id < 5) {
                  return (
                    <ThTable
                      key={item.id}
                      ColSpan={1}
                      RowSpan={3}
                      title={item.title}
                      ThClass={"px-2 py-1.5 border border-[#2E323C]"}
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
                if (item.id > 4 && item.id < 13) {
                  return (
                    <ThTable
                      key={item.id}
                      ColSpan={1}
                      RowSpan={1}
                      title={item.title}
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
                <Select
                  Selectclass={
                    "outline-0 py-1 text-sm text-center font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"postHoursPass1"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"انتخاب"}
                  options={optionHours1}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"springPass1"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"castlePass1"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"workshopPass1"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"mechanizedGuardPass1"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"amadGuardPass1"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"armedGuardPass1"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"guardPass1"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"medicalGuardPass1"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
            </tr>
            <tr className="bg-white border border-[#2E323C] text-center">
              <td className="border border-[#2E323C] bg-[#5B7D87] text-white">
                2
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "outline-0 py-1 text-sm text-center font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"postHoursPass2"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"انتخاب"}
                  options={optionHours2}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"springPass2"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"castlePass2"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"workshopPass2"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"mechanizedGuardPass2"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"amadGuardPass2"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"armedGuardPass2"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"guardPass2"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"medicalGuardPass2"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
            </tr>
            <tr className="bg-white border border-[#2E323C] text-center">
              <td className="border border-[#2E323C] bg-[#5B7D87] text-white">
                3
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "outline-0 py-1 text-sm text-center font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"postHoursPass3"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"انتخاب"}
                  options={optionHours3}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"springPass3"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"castlePass3"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"workshopPass3"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"mechanizedGuardPass3"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"amadGuardPass3"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"armedGuardPass3"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"guardPass3"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"medicalGuardPass3"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
            </tr>
          </tbody>
          <tfoot className="bg-[#5B7D87] text-white">
            <tr>
              {Headers.HeadersLohe.map((item) => {
                if (item.id === 13) {
                  return (
                    <ThTable
                      key={item.id}
                      ColSpan={2}
                      RowSpan={1}
                      title={item.title}
                      ThClass={"px-2 py-1.5 border border-[#2E323C]"}
                    />
                  );
                }
              })}
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"armedForceMorning1"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"armedForceMorning2"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"armedForceMorning3"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              {Headers.HeadersLohe.map((item) => {
                if (item.id === 16) {
                  return (
                    <ThTable
                      key={item.id}
                      ColSpan={1}
                      RowSpan={1}
                      title={item.title}
                      ThClass={"px-2 py-1.5 border border-[#2E323C]"}
                    />
                  );
                }
              })}
              <td className="border border-[#2E323C]" colSpan={2}>
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"armament"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
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
                if (item.id === 14) {
                  return (
                    <ThTable
                      key={item.id}
                      ColSpan={2}
                      RowSpan={1}
                      title={item.title}
                      ThClass={"px-2 py-1.5 border border-[#2E323C]"}
                    />
                  );
                }
              })}
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"kitchen1"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"kitchen2"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              <td className="border border-[#2E323C]">
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"kitchen3"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              {Headers.HeadersLohe.map((item) => {
                if (item.id === 17) {
                  return (
                    <ThTable
                      key={item.id}
                      ColSpan={1}
                      RowSpan={1}
                      title={item.title}
                      ThClass={"px-2 py-1.5 border border-[#2E323C]"}
                    />
                  );
                }
              })}
              <td className="border border-[#2E323C]" colSpan={2}>
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"refuge"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
            </tr>
            <tr>
              {Headers.HeadersLohe.map((item) => {
                if (item.id === 15) {
                  return (
                    <ThTable
                      key={item.id}
                      ColSpan={2}
                      RowSpan={1}
                      title={item.title}
                      ThClass={"px-2 py-1.5 border border-[#2E323C]"}
                    />
                  );
                }
              })}
              <td className="border border-[#2E323C]" colSpan={3}>
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"watchman"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
              {Headers.HeadersLohe.map((item) => {
                if (item.id === 18) {
                  return (
                    <ThTable
                      key={item.id}
                      ColSpan={1}
                      RowSpan={1}
                      title={item.title}
                      ThClass={"px-2 py-1.5 border border-[#2E323C]"}
                    />
                  );
                }
              })}
              <td className="border border-[#2E323C]" colSpan={2}>
                <Select
                  Selectclass={
                    "block outline-0 text-center w-full py-1 text-base font-normal text-[#212529] bg-white border-0"
                  }
                  SelectName={"shelterManager"}
                  SelectRef={ref}
                  SelectOnChange={handleSelectChange}
                  DefaultValue={""}
                  oneOptionText={"..."}
                  options={optionsSoldier}
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default LohePosti;
