import axios from "axios";
import Select from "./Select";
import { useRef, useState } from "react";
import { setRows } from "../redux/panelSlice";
import { BASE_URL } from "../../api/apiConfig";
import DatePicker from "react-multi-date-picker";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { setResetSoldier, setSoldier } from "../redux/storeSlice";
import underMenu1 from "../data/Undermenu";

export const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
const OptionsHealthyType = ["سالم", "گروه الف", "گروه ب", "معاف از رزم"];
const OptionsDepartmentName = underMenu1.map(item => `${item.title}`)
const OptionsIsActive = ["فعال","غیرفعال"]

export const H1Title = ({ BoldTitle, H1class }) => {
  return <h1 className={H1class}>{BoldTitle}</h1>;
};

export const Parag = ({ Paragraph, Pclass }) => {
  return <p className={Pclass}>{Paragraph}</p>;
};

export const Image = ({ Src, Alt, ImageClass }) => {
  return <img src={Src} className={ImageClass} alt={Alt} />;
};

export const Button = ({ btnTitle, Type, ClassName, OnClick }) => {
  return (
    <button type={Type} className={ClassName} onClick={OnClick}>
      {btnTitle}
    </button>
  );
};

export const Input = ({
  Type,
  InputValue,
  Id,
  InputName,
  InputClass,
  Placeholder,
  InputOnChange,
}) => {
  return (
    <input
      type={Type}
      value={InputValue}
      id={Id}
      name={InputName}
      className={InputClass}
      placeholder={Placeholder}
      onChange={InputOnChange}
    />
  );
};
export const Lable = ({ HtmlFor, LableClass, LableTitle }) => {
  return (
    <label htmlFor={HtmlFor} className={LableClass}>
      {LableTitle}
    </label>
  );
};

export const InputPassword = ({ ID, title, Name, OnChange }) => {
  const [showPassword, setshowPassword] = useState(0);
  const setShowPassword = () => setshowPassword(!showPassword);
  return (
    <>
      <div className="w-full relative inline-flex items-center m-2.5">
        <Input
          Type={showPassword ? "text" : "password"}
          Id={ID}
          InputName={Name}
          InputClass={
            "block outline-0 w-full pl-10 pr-2.5 pb-1.5 pt-3 text-base font-normal bg-transparent rounded-md border border-solid border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          }
          Placeholder={" "}
          InputOnChange={OnChange}
        />
        <Lable
          HtmlFor={ID}
          LableClass={
            "absolute top-1 text-lg cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 z-10 peer-focus:origin-[0] peer-focus:translate-x-3 bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
          }
          LableTitle={title}
        />
        {showPassword ? (
          <div>
            <FaEye
              onClick={setShowPassword}
              className="relative left-8 h-5 w-5 cursor-pointer"
            />
          </div>
        ) : (
          <div>
            <FaEyeSlash
              onClick={setShowPassword}
              className="relative left-8 h-5 w-5 cursor-pointer"
            />
          </div>
        )}
      </div>
    </>
  );
};

export const InputFloatingLable = ({ ID, title, OnChange, Name }) => {
  return (
    <>
      <div className="relative m-2.5">
        <Input
          Type={"text"}
          Id={ID}
          InputName={Name}
          InputClass={
            "block outline-0 w-full px-2.5 pb-1.5 pt-3 text-base font-normal bg-transparent rounded-md border border-solid border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          }
          Placeholder={" "}
          InputOnChange={OnChange}
        />
        <Lable
          HtmlFor={ID}
          LableClass={
            "absolute top-1 text-lg cursor-text text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 z-10 peer-focus:origin-[0] peer-focus:translate-x-3 bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 right-1"
          }
          LableTitle={title}
        />
      </div>
    </>
  );
};

export const InputElem = ({
  title,
  address,
  OnChange,
  Value,
  inputLableClass,
  inputClass,
  inputName,
  Placeholder,
  divClass,
}) => {
  return (
    <div className={divClass}>
      <Lable
        HtmlFor={address}
        LableClass={inputLableClass}
        LableTitle={title}
      />
      <Input
        Type={"text"}
        InputValue={Value}
        Id={address}
        InputName={inputName}
        InputClass={inputClass}
        Placeholder={Placeholder}
        InputOnChange={OnChange}
      />
    </div>
  );
};

export const Form = () => {
  const [showError, setShowError] = useState(0);
  const selectOne = useRef();
  const selectTwo = useRef();
  const selectThree = useRef();

  const postData = async () => {
    try {
      const response = await axios.post(`${BASE_URL}Soldiers`, soldier);
      const data = response.data;
      dispatch(setRows([...rows, data]));
      setShowError(0);
    } catch (error) {
      if (error.response) {
        setShowError(1);
      } else {
        console.log(error.message);
      }
    }
  };

  const dispatch = useDispatch();
  const rows = useSelector((state) => state.panel.rows);
  const soldier = useSelector((state) => state.app.soldier);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setSoldier({ key: name, value }));
  };

  const handleDateChange = (name, date) => {
    dispatch(
      setSoldier({
        key: name,
        value: date?.convert(persian, persian_fa).format().toString() ?? "",
      })
    );
  };

  const handleSelectChange = (e) => {
    const { value, name } = e.target;
    const optionValue = value === "فعال" ? true : false;
    dispatch(setSoldier({ key: name, value: optionValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    postData();
    dispatch(setResetSoldier());

    selectOne.current.selectedIndex = 0;
    selectTwo.current.selectedIndex = 0;
    selectThree.current.selectedIndex = 0;
  };

  return (
    <>
      <form className="container-fluid mt-1" onSubmit={handleSubmit}>
        {showError ? (
          <div className="bg-red-300 p-2 mb-4 ml-4 mr-4 border border-red-700 rounded-lg">
            <Parag
              Pclass={"text-red-700"}
              Paragraph={"پرکردن همه فیلدها الزامی می باشد"}
            />
          </div>
        ) : null}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 mb-4">
          <InputElem
            inputName={"firstName"}
            inputLableClass={
              "block mb-2 text-sm font-medium dark:text-white mx-4"
            }
            inputClass={
              "block outline-0 w-[-webkit-fill-available] mx-4 mb-4 py-1.5 px-3 text-base font-normal text-[#212529] bg-white border border-solid border-[#ced4da] rounded-md focus:ring-blue-500 focus:border-blue-500"
            }
            Value={soldier.firstName}
            title="نام"
            address="firstName"
            OnChange={handleChange}
          />
          <InputElem
            inputName={"lastName"}
            inputLableClass={
              "block mb-2 text-sm font-medium dark:text-white mx-4"
            }
            inputClass={
              "block outline-0 w-[-webkit-fill-available] mx-4 mb-4 py-1.5 px-3 text-base font-normal text-[#212529] bg-white border border-solid border-[#ced4da] rounded-md focus:ring-blue-500 focus:border-blue-500"
            }
            Value={soldier.lastName}
            title="نام خانوادگی"
            address="lastName"
            OnChange={handleChange}
          />
          <InputElem
            inputName={"fatherName"}
            inputLableClass={
              "block mb-2 text-sm font-medium dark:text-white mx-4"
            }
            inputClass={
              "block outline-0 w-[-webkit-fill-available] mx-4 mb-4 py-1.5 px-3 text-base font-normal text-[#212529] bg-white border border-solid border-[#ced4da] rounded-md focus:ring-blue-500 focus:border-blue-500"
            }
            Value={soldier.fatherName}
            title="نام پدر"
            address="fatherName"
            OnChange={handleChange}
          />
          <InputElem
            inputName={"rank"}
            inputLableClass={
              "block mb-2 text-sm font-medium dark:text-white mx-4"
            }
            inputClass={
              "block outline-0 w-[-webkit-fill-available] mx-4 mb-4 py-1.5 px-3 text-base font-normal text-[#212529] bg-white border border-solid border-[#ced4da] rounded-md focus:ring-blue-500 focus:border-blue-500"
            }
            Value={soldier.rank}
            title="درجه"
            address="rank"
            OnChange={handleChange}
          />
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 mb-4">
          <InputElem
            inputName={"nationalCode"}
            inputLableClass={
              "block mb-2 text-sm font-medium dark:text-white mx-4"
            }
            inputClass={
              "block outline-0 w-[-webkit-fill-available] mx-4 mb-4 py-1.5 px-3 text-base font-normal text-[#212529] bg-white border border-solid border-[#ced4da] rounded-md focus:ring-blue-500 focus:border-blue-500"
            }
            Value={soldier.nationalCode}
            title="کدملی"
            address="nationalCode"
            OnChange={handleChange}
          />
          <InputElem
            inputName={"personnelCode"}
            inputLableClass={
              "block mb-2 text-sm font-medium dark:text-white mx-4"
            }
            inputClass={
              "block outline-0 w-[-webkit-fill-available] mx-4 mb-4 py-1.5 px-3 text-base font-normal text-[#212529] bg-white border border-solid border-[#ced4da] rounded-md focus:ring-blue-500 focus:border-blue-500"
            }
            Value={soldier.personnelCode}
            title="کد پرسنلی"
            address="personnelCode"
            OnChange={handleChange}
          />
          <div>
            <Lable
              HtmlFor={"healthType"}
              LableClass={
                "block mx-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
              }
              LableTitle={"نوع سلامت"}
            />
            <Select
              Selectclass={
                "block outline-0 w-[-webkit-fill-available] mx-4 mb-4 py-1.5 px-3 text-base font-normal text-[#212529] bg-white border border-solid border-[#ced4da] rounded-md focus:ring-blue-500 focus:border-blue-500"
              }
              SelectName={"healthType"}
              SelectRef={selectTwo}
              SelectOnChange={handleChange}
              DefaultValue={""}
              oneOptionText={"انتخاب کنید"}
              options={OptionsHealthyType}
            />
          </div>
          <div className="flex flex-col">
            <Lable
              HtmlFor={"EntryDate"}
              LableClass={"block mb-2 text-sm font-medium dark:text-white mx-4"}
              LableTitle={"تاریخ ورود به یگان"}
            />
            <DatePicker
              value={soldier.entryDate}
              onChange={(date) => handleDateChange("entryDate", date)}
              weekDays={weekDays}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              inputClass="block outline-0 w-[-webkit-fill-available] mx-4 mb-4 py-1.5 px-3 text-base font-normal text-[#212529] bg-white border border-solid border-[#ced4da] rounded-md focus:ring-blue-500 focus:border-blue-500"
              id="EntryDate"
              placeholder="تاریخ ورود"
              required
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 mb-4">
          <div className="flex flex-col">
            <Lable
              HtmlFor={"ServiceStartDate"}
              LableClass={"block mb-2 text-sm font-medium dark:text-white mx-4"}
              LableTitle={"تاریخ شروع خدمت"}
            />
            <DatePicker
              value={soldier.serviceStartDate}
              onChange={(date) => handleDateChange("serviceStartDate", date)}
              weekDays={weekDays}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              inputClass="block outline-0 w-[-webkit-fill-available] mx-4 mb-4 py-1.5 px-3 text-base font-normal text-[#212529] bg-white border border-solid border-[#ced4da] rounded-md focus:ring-blue-500 focus:border-blue-500"
              id="ServiceStartDate"
              placeholder="تاریخ شروع خدمت"
              required
            />
          </div>
          <div className="flex flex-col">
            <Lable
              HtmlFor={"ServiceEndDate"}
              LableClass={"block mb-2 text-sm font-medium dark:text-white mx-4"}
              LableTitle={"تاریخ پایان خدمت"}
            />
            <DatePicker
              value={soldier.serviceEndDate}
              onChange={(date) => handleDateChange("serviceEndDate", date)}
              weekDays={weekDays}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              inputClass="block outline-0 w-[-webkit-fill-available] mx-4 mb-4 py-1.5 px-3 text-base font-normal text-[#212529] bg-white border border-solid border-[#ced4da] rounded-md focus:ring-blue-500 focus:border-blue-500"
              id="serviceEndDate"
              placeholder="تاریخ پایان خدمت"
              required
            />
          </div>
          <div>
            <Lable
              HtmlFor={"departmentName"}
              LableClass={
                "block mx-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
              }
              LableTitle={"نام قسمت"}
            />
            <Select
              Selectclass={
                "block outline-0 w-[-webkit-fill-available] mx-4 mb-4 py-1.5 px-3 text-base font-normal text-[#212529] bg-white border border-solid border-[#ced4da] rounded-md focus:ring-blue-500 focus:border-blue-500"
              }
              SelectName={"departmentName"}
              SelectRef={selectThree}
              SelectOnChange={handleChange}
              DefaultValue={""}
              oneOptionText={"انتخاب کنید"}
              options={OptionsDepartmentName}
            />
          </div>
          <div>
            <Lable
              HtmlFor={"isActive"}
              LableClass={
                "block mx-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
              }
              LableTitle={"وضعیت"}
            />
            <Select
              Selectclass={
                "block outline-0 w-[-webkit-fill-available] mx-4 mb-4 py-1.5 px-3 text-base font-normal text-[#212529] bg-white border border-solid border-[#ced4da] rounded-md focus:ring-blue-500 focus:border-blue-500"
              }
              SelectName={"isActive"}
              SelectRef={selectOne}
              SelectOnChange={handleSelectChange}
              DefaultValue={""}
              oneOptionText={"انتخاب کنید"}
              options={OptionsIsActive}
            />
          </div>
        </div>
      </form>
      <div className="flex justify-end px-3">
        <Button
          btnTitle={"افزودن"}
          Type="submit"
          ClassName={
            "mb-4 mr-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto py-1.5 sm:px-5 sm:py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          }
          OnClick={handleSubmit}
        />
      </div>
    </>
  );
};
