import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "../forgotPassword";
import Login from "../login";
import Home from "../home";
import Menu from "../menu";
import ManualWork from "../manualWork";
import PendingWork from "../pendingWork";
import Profile from "../profile";
import Leave from "../leave";
import ResourceManagement from "../resourceManagement";
import ChangePassword from "../changePassword";
import Frontend from "../frontend";
import { getCookiesToken, setCookiesToken } from "../../helpers/cookies";
import { API_URL } from "../../constant/apiUrls";
import { EX_ONEDAY } from "../../constant";
import HrPanel from "../hrPanel";
import STORAGE_KEY from "../../constant/storageKey";
import { postRequest } from "../../services";
import { setDataInLocalStorage } from "../../helpers/localStorage";
import Team from "../team";
import User from "../user/User";

function RoutesComponent() {
  const [token, setToken] = useState(getCookiesToken());

  const [opensnackbar, setSnackbarOpen] = useState();

  // const [token, setToken] = useState(true);  ////temperary cheking

  const [isLoading, setIsLoading] = useState(false);

  const getLoginData = (crediantial) => {
    setIsLoading(true);

    postRequest(API_URL.LOGIN, crediantial)
      .then((res) => {
        setDataInLocalStorage(STORAGE_KEY.USER_DATA, res.data.userInfo);

        if (!token) {
          setCookiesToken(res.data.token, EX_ONEDAY);

          setToken(res.data.token);
        }
      })
      .catch((error) => {
        setSnackbarOpen({
          setopen: true,
          message: error.response?.data,
          severity: "error",
        });
      })

      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleClose = () => {
    setSnackbarOpen({ setopen: false });
  };

  if (!token) {
    return (
      <Login
        getLoginData={getLoginData}
        isLoading={isLoading}
        opensnackbar={opensnackbar}
        handleClose={handleClose}
      />
    );
  }

  return (
    <div className="letter-space font-Poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontend setToken={setToken} />}>
            <Route index element={<Home />} />
            {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/hr-panel" element={<HrPanel />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/manual-work" element={<ManualWork />} />
            <Route path="/pending-work" element={<PendingWork />} />
            <Route path="/user" element={<User />} />
            <Route path="/team" element={<Team />} />
            <Route
              path="/resource-management"
              element={<ResourceManagement />}
            />
            <Route path="/leave" element={<Leave />} />
          </Route>

          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesComponent;
