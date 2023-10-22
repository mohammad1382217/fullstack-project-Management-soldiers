import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowErrorFalsyValue: false,
  isShowErrorAboveEightDigits: false,
  login: {
    nameAndFamily: "",
    username: "",
    password: "",
  },
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      const { key, value } = action.payload;
      state.login[key] = value;
    },
    setLoginReset: (state) => {
      state.login = initialState.login;
      state.isLoggedIn = initialState.isLoggedIn;
    },
    setIsLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    setIsShowErrorFalsyValue: (state, action) => {
      state.isShowErrorFalsyValue = action.payload;
    },
    setIsShowErrorAboveEightDigits: (state, action) => {
      state.isShowErrorAboveEightDigits = action.payload;
    },
  },
});

export const {
  setLogin,
  setIsLoggedIn,
  setIsShowErrorFalsyValue,
  setIsShowErrorAboveEightDigits,
  setLoginReset,
} = loginSlice.actions;

export default loginSlice.reducer;
