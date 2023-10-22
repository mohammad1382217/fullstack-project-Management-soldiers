import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// import redux
import store from "./redux/store";
import { Provider } from "react-redux";
// import router-dom
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
// import pages
import {
  AddCompanyPage,
  AmadSoldiers,
  CalturalSoldiers,
  CampSoldiers,
  CommandSoldiers,
  CompanyOneSoldiers,
  CompanyTwoSoldiers,
  CompanyThreeSoldiers,
  EngineerSoldiers,
  ExemptFromWar,
  FinancialSoldiers,
  GroupOneSoldiers,
  GroupTwoSoldiers,
  HealthySoldiers,
  HorticulturalSoldiers,
  LoginPage,
  ManpowerSoldiers,
  OperationSoldiers,
  PanelPage,
  PhysicalEducationSoldiers,
  RepairShopSoldiers,
  RepresentativeSoldiers,
  SettingPage,
  ShowAllLohePosti,
  Soldierinformation,
  ToolsSoldiers,
  UsersPage,
  ActiveSoldiers,
  UnActiveSoldiers,
} from "./pages";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Authorized } from "./components/Authorized";

const persistor = persistStore(store);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/panel",
    element: (
      <Authorized>
        <PanelPage />
      </Authorized>
    ),
  },
  {
    path: "/AddCompany",
    element: (
      <Authorized>
        <AddCompanyPage />
      </Authorized>
    ),
  },
  {
    path: "/AmadSoldiers",
    element: (
      <Authorized>
        <AmadSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/GroupTwoSoldiers",
    element: (
      <Authorized>
        <GroupTwoSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/HealthySoldiers",
    element: (
      <Authorized>
        <HealthySoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/GroupOneSoldiers",
    element: (
      <Authorized>
        <GroupOneSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/ExemptFromWar",
    element: (
      <Authorized>
        <ExemptFromWar />,
      </Authorized>
    ),
  },
  {
    path: "/Setting",
    element: (
      <Authorized>
        <SettingPage />,
      </Authorized>
    ),
  },
  {
    path: "/Soldierinformation",
    element: (
      <Authorized>
        <Soldierinformation />,
      </Authorized>
    ),
  },
  {
    path: "/Users",
    element: (
      <Authorized>
        <UsersPage />,
      </Authorized>
    ),
  },
  {
    path: "/CalturalSoldiers",
    element: (
      <Authorized>
        <CalturalSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/CampSoldiers",
    element: (
      <Authorized>
        <CampSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/CommandSoldiers",
    element: (
      <Authorized>
        <CommandSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/CompanyOneSoldiers",
    element: (
      <Authorized>
        <CompanyOneSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/CompanyTwoSoldiers",
    element: (
      <Authorized>
        <CompanyTwoSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/CompanyThreeSoldiers",
    element: (
      <Authorized>
        <CompanyThreeSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/EngineerSoldiers",
    element: (
      <Authorized>
        <EngineerSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/FinancialSoldiers",
    element: (
      <Authorized>
        <FinancialSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/HorticulturalSoldiers",
    element: (
      <Authorized>
        <HorticulturalSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/ManpowerSoldiers",
    element: (
      <Authorized>
        <ManpowerSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/OperationSoldiers",
    element: (
      <Authorized>
        <OperationSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/PhysicalEducationSoldiers",
    element: (
      <Authorized>
        <PhysicalEducationSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/RepairShopSoldiers",
    element: (
      <Authorized>
        <RepairShopSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/RepresentativeSoldiers",
    element: (
      <Authorized>
        <RepresentativeSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/ToolsSoldiers",
    element: (
      <Authorized>
        <ToolsSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/AllLohePosti",
    element: (
      <Authorized>
        <ShowAllLohePosti />,
      </Authorized>
    ),
  },
  {
    path: "/ActiveSoldiers",
    element: (
      <Authorized>
        <ActiveSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "/UnActiveSoldiers",
    element: (
      <Authorized>
        <UnActiveSoldiers />,
      </Authorized>
    ),
  },
  {
    path: "*",
    element: <Navigate to={"/"} replace />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
