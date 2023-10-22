import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../api/apiConfig";
import { Button, InputFloatingLable } from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsShowErrorAboveEightDigits,
  setLogin,
  setLoginReset,
} from "../redux/loginSlice";
import { setIsSnackbarOpen } from "../redux/storeSlice";
import { setIsDefaultInformation } from "../redux/infoSlice";

export const Changeinformation = () => {
  const login = useSelector((state) => state.login.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setLogin({ key: name, value }));
    if (name === "password") {
      value.length > 8
        ? dispatch(setIsShowErrorAboveEightDigits(true))
        : dispatch(setIsShowErrorAboveEightDigits(false));
    }
  };
  const handleEdit = async (id) => {
    try {
      const response = await axios.put(`${BASE_URL}Login/${id}`, login);
      dispatch(setLoginReset());
      dispatch(setIsSnackbarOpen(true));
      dispatch(setIsDefaultInformation(false));
      navigate("/");
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center">
        <div className="border border-solid border-black rounded flex flex-wrap justify-between w-full p-4 mt-4">
          <h2>تغییر مشخصات کاربر(رمزعبور،نام کاربری،نام و نام خانوادگی) :</h2>
          <div>
            <InputFloatingLable
              ID="outlined"
              title="نام و نام خانوادگی"
              Name={"nameAndFamily"}
              OnChange={handleChange}
            />
            <InputFloatingLable
              ID="default_outlined"
              title="نام کاربری"
              Name={"username"}
              OnChange={handleChange}
            />
            <InputFloatingLable
              ID="floating_outlined"
              title="نام کاربری"
              Name={"password"}
              OnChange={handleChange}
            />
            <Button
              btnTitle={"ویرایش"}
              Type={"submit"}
              ClassName={
                "w-28 h-11 my-2.5 mx-2.5 select-none focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              }
              OnClick={() => handleEdit(1)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
