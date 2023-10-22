import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsLoggedIn,
  setLogin,
  setIsShowErrorAboveEightDigits,
  setIsShowErrorFalsyValue,
} from "../redux/loginSlice";
import { InputPassword, Button, InputElem, InputFloatingLable } from "./Layout";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginsInformation = useSelector(
    (state) => state.info.loginsInformation
  );
  const login = useSelector((state) => state.login.login);
  const isShowErrorFalsyValue = useSelector(
    (state) => state.login.isShowErrorFalsyValue
  );
  const isShowErrorAboveEightDigits = useSelector(
    (state) => state.login.isShowErrorAboveEightDigits
  );
  const isDefaultInformation = useSelector(
    (state) => state.info.isDefaultInformation
  );

  const submit = () => {
    if (
      loginsInformation[0].username === login.username &&
      loginsInformation[0].password === login.password
    ) {
      dispatch(setIsLoggedIn());
      navigate("/panel");
      dispatch(setIsShowErrorFalsyValue(false));
    } else {
      dispatch(setIsShowErrorFalsyValue(true));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setLogin({ key: name, value }));
    if (name === "password") {
      value.length > 8
        ? dispatch(setIsShowErrorAboveEightDigits(true))
        : dispatch(setIsShowErrorAboveEightDigits(false));
    }
  };

  return (
    <div className="flex flex-col border border-gray-300 max-[360px]:w-[90%] max-w-[280px] p-4 mx-auto my-12 rounded-lg text-xl">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center">
          <span>خوش آمدید</span>
        </div>
        <br />
        <div className="flex items-center justify-center">
          <FaUser className="w-20 h-20 rounded-full text-slate-50 bg-teal-500 pt-5" />
        </div>
        <br />
        {isShowErrorFalsyValue ? (
          <div className="bg-red-300 p-2 m-2.5 text-sm border border-red-700 rounded-lg">
            <p className="text-red-700">نام کاربری یا رمز عبور اشتباه است</p>
          </div>
        ) : null}
        <InputFloatingLable
          ID="outlined"
          title="نام کاربری"
          Name={"username"}
          OnChange={handleChange}
        />
        <InputPassword
          ID="floating_outlined"
          title="رمزعبور"
          Name={"password"}
          OnChange={handleChange}
        />
        {isShowErrorAboveEightDigits ? (
          <div className="flex items-center justify-center">
            <i className="text-red-800 text-xs font-bold">
              رمز عبور نمیتواند بیش از 8 کاراکتر باشد
            </i>
          </div>
        ) : null}
        <Button
          btnTitle={"ورود"}
          Type={"submit"}
          ClassName={
            "w-[92%] h-11 my-2.5 mx-auto select-none focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          }
          OnClick={submit}
        />
        {isDefaultInformation ? (
          <>
            <p className="text-gray-700 text-base text-center m-2.5">
              نام کاربری پیشفرض: <span className="text-green-900">admin</span>
            </p>
            <p className="text-gray-700 text-base text-center m-2.5">
              رمز عبور پیشفرض: <span className="text-green-900">12345678</span>
            </p>
          </>
        ) : null}
      </form>
    </div>
  );
}
