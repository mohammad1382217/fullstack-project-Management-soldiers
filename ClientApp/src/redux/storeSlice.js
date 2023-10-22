import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowMenu: true,
  isConfirmOpen: false,
  isSnackbarOpen : false,
  editingId: 0,
  soldier: {
    firstName: "",
    lastName: "",
    fatherName: "",
    rank: "",
    nationalCode: "",
    personnelCode: "",
    healthType: "",
    entryDate: "",
    serviceStartDate: "",
    serviceEndDate: "",
    departmentName: "",
    isActive: null,
  },
  Lohe: {
    date: "",
    postHoursPass1: "",
    springPass1: "",
    castlePass1: "",
    workshopPass1: "",
    mechanizedGuardPass1: "",
    amadGuardPass1: "",
    armedGuardPass1: "",
    guardPass1: "",
    medicalGuardPass1: "",
    postHoursPass2: "",
    springPass2: "",
    castlePass2: "",
    workshopPass2: "",
    mechanizedGuardPass2: "",
    amadGuardPass2: "",
    armedGuardPass2: "",
    guardPass2: "",
    medicalGuardPass2: "",
    postHoursPass3: "",
    springPass3: "",
    castlePass3: "",
    workshopPass3: "",
    mechanizedGuardPass3: "",
    amadGuardPass3: "",
    armedGuardPass3: "",
    guardPass3: "",
    medicalGuardPass3: "",
    armedForceMorning1: "",
    armedForceMorning2: "",
    armedForceMorning3: "",
    kitchen1: "",
    kitchen2: "",
    kitchen3: "",
    watchman: "",
    armament: "",
    refuge: "",
    shelterManager: "",
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsShowMenu: (state,action) => {
      state.isShowMenu = action.payload;
    },
    setIsConfirmOpen: (state) => {
      state.isConfirmOpen = !state.isConfirmOpen;
    },
    setIsSnackbarOpen: (state) => {
      state.isSnackbarOpen = !state.isSnackbarOpen;
    },
    setEditingId: (state,action) => {
      state.editingId = action.payload;
    },
    setSoldier: (state, action) => {
      const { key, value } = action.payload;
      state.soldier[key] = value;
    },
    setLohe: (state, action) => {
      const { key, value } = action.payload;
      state.Lohe[key] = value;
    },
    setLohePosti: (state,action) => {
      state.Lohe = action.payload;
    },
    setResetLohe: (state) => {
      state.Lohe = initialState.Lohe;
    },
    setResetSoldier: (state) => {
      state.soldier = initialState.soldier;
    },
  },
});

export const {
  setIsShowMenu,
  setSoldier,
  setLohe,
  setLohePosti,
  setResetSoldier,
  setIsConfirmOpen,
  setIsSnackbarOpen,
  setResetLohe,
  setEditingId,
} = appSlice.actions;

export default appSlice.reducer;
