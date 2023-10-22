import { useEffect } from "react";
import Login from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../redux/infoSlice";
import { LoginNavbar } from "../components/Navbar";
import { FooterBottom, FooterTop } from "../components/Footer";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import { setIsSnackbarOpen } from "../redux/storeSlice";
import { setLoginReset } from "../redux/loginSlice";
import { AlertConnectToServer } from "../components/Alert";

export default function LoginPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    Promise.allSettled([dispatch(fetchLogin()), dispatch(setLoginReset())]);
  }, [dispatch]);

  const isShowErrorConnect = useSelector(
    (state) => state.info.isShowErrorConnect
  );
  const isSnackbarOpen = useSelector((state) => state.app.isSnackbarOpen);

  const handleClose = () => dispatch(setIsSnackbarOpen(false));

  return (
    <>
      {isShowErrorConnect ? <AlertConnectToServer /> : null}
      <div>
        <header>
          <LoginNavbar />
        </header>
        <main>
          <Login />
          <Snackbar
            open={isSnackbarOpen}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert className={"w-full p-4 flex"} severity="success">
              ویرایش با موفقیت انجام شد!
            </Alert>
          </Snackbar>
        </main>
        <footer className="border-t-2">
          <FooterTop />
          <FooterBottom />
        </footer>
      </div>
    </>
  );
}
