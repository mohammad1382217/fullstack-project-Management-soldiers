import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/apiConfig";
import axios from "axios";

const initialState = {
  isShowErrorConnect: false,
  isLoading: true,
  isDefaultInformation: true,
  loginsInformation: [],
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setIsDefaultInformation: (state, action) => {
      state.isDefaultInformation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loginsInformation = action.payload;
        state.isShowErrorConnect = false;
        state.isLoading = false;
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.isShowErrorConnect = true;
      });
  },
});

const fetchLogin = createAsyncThunk("info/fetchLogin", async () => {
  try {
    const response = await axios.get(`${BASE_URL}Login`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export { fetchLogin };

export const { setIsDefaultInformation } = infoSlice.actions;

export default infoSlice.reducer;
