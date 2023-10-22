import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import appReducer from "./storeSlice";
import themeReducer from "./themeSlice";
import loginReducer from "./loginSlice";
import panelReducer from "./panelSlice"
import infoReducer from "./infoSlice";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ['theme','info','login'],
};

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  panel: panelReducer,
  theme: themeReducer,
  info: infoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk),
});

export default store;