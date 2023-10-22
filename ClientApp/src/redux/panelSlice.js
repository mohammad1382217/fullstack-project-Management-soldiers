import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/apiConfig";
import axios from "axios";

const initialState = {
  isShowErrorConnect: false,
  isLoading: true,
  rows: [],
  LohePostis: [],
};

const panelSlice = createSlice({
  name: "panel",
  initialState,
  reducers: {
    setResetSoldier: (state) => {
      state.soldier = initialState.soldier;
    },
    setRows: (state, action) => {
      state.rows = action.payload;
    },
    setDeleteRows: (state, action) => {
      state.rows.splice(action.payload, 1);
    },
    setLohePostis: (state, action) => {
      state.LohePostis = action.payload;
    },
    setDeleteLohePostis: (state, action) => {
      state.LohePostis.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSoldier.fulfilled, (state, action) => {
        state.rows = action.payload;
        state.isShowErrorConnect = false;
        state.isLoading = false;
      })
      .addCase(fetchSoldier.rejected, (state) => {
        state.isShowErrorConnect = true;
      })
      .addCase(fetchLohePostis.fulfilled, (state, action) => {
        state.LohePostis = action.payload;
        state.isShowErrorConnect = false;
        state.isLoading = false;
      })
      .addCase(fetchLohePostis.rejected, (state) => {
        state.isShowErrorConnect = true;
      });
  },
});

const fetchSoldier = createAsyncThunk("panel/fetchSoldier", async () => {
  try {
    const soldierRes = await axios.get(`${BASE_URL}Soldiers`);
    return soldierRes.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const fetchLohePostis = createAsyncThunk("panel/fetchLohePostis", async () => {
  try {
    const LohePostisRes = await axios.get(`${BASE_URL}LohePosti`);
    return LohePostisRes.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export { fetchSoldier, fetchLohePostis };

export const { setResetSoldier, setRows, setLohePostis, setDeleteRows,setDeleteLohePostis } =
  panelSlice.actions;

export default panelSlice.reducer;
