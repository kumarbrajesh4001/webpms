import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import noop from "lodash/noop";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import SearchIcon from "@mui/icons-material/Search";
import aisLogoHeader from "../../assets/ais-logo-header.png";
import { deleteCookies } from "../../helpers/cookies";
import STORAGE_KEY from "../../constant/storageKey";
import {
  clearLocalStorage,
  getDataInLocalStorage,
} from "../../helpers/localStorage";
import { getRequest } from "../../services";

const Header = (props) => {
  const { setToken, profileShow, setProfileShow } = props;

  const [selectProfile, setSelectProfile] = useState();
  const [showUsers, setShowUsers] = useState(false);
  const userData = getDataInLocalStorage(STORAGE_KEY.USER_DATA);

  const navigate = useNavigate();

  // const [profileShow, setProfileShow] = useState(false);

  // const [searchShow, setSearchShow] = useState(false);
  const [userSearchPlaceholder, setUserSearchPlaceholder] = useState(false);

  const settings = [
    "Profile",
    "Hr Panel",
    "Change Password",
    "Manual Work Log",
    "Pending Work Log",
    "Resource Management",
    "User",
    "Team",
    "Leave",
    "Sign Out",
  ];

  return (
    <div className="row background-FFFFFF m-2">
      <div className="col-4  mb-md-0 mb-2">
        <img
          src={aisLogoHeader}
          alt="ais-logo-header"
          className="pointer-cur"
          onClick={() => {
            navigate("/");
            setSelectProfile();
            setProfileShow(false);
          }}
        />
      </div>

      <div className="col-3 background-F7F7F7 hr-secHeading text-center ">
        {showUsers ? (
          <div className="form-field search-bar-width mt-2">
            <input
              type="text"
              placeholder="Search"
              id="search"
              className="input-field ps-2"
            />
            <span className="search-bar">
              <SearchIcon className="color-2E3192" />
            </span>
          </div>
        ) : (
          <>
            <div className="text-center mt-1">{userData.userName}</div>
            <div className="text-center mt-2">{userData.id_A}</div>
          </>
        )}
      </div>

      <div className="col-5 d-flex justify-content-end position-relative">
        <IconButton disableRipple={true} className="me-3">
          <Badge badgeContent={2} color="error">
            <NotificationsNoneIcon fontSize="medium" className="color-2E3192" />
          </Badge>
        </IconButton>

        <div
          className="heading-3-bold color-000000 border-0 background-FFFFFF d-flex pointer-cur"
          onClick={() => {
            setProfileShow(!profileShow);
            // setSearchShow(false);
          }}
        >
          <div>
            <img
              src={userData.img}
              alt="ais-logo-header"
              width={46}
              height={46}
            />
          </div>
          <div className="ms-2 mt-1">
            <div className="text-center">{userData.userName}</div>
            <div className="text-center">{userData.id_A}</div>
          </div>
          <div>
            {profileShow ? (
              <ExpandLessIcon className="color-2E3192" fontSize="large" />
            ) : (
              <ExpandMoreIcon className="color-2E3192" fontSize="large" />
            )}
          </div>
        </div>

        <div className={`c-model-class profile-popUp shadow`}>
          {profileShow && (
            <>
              <div className="row emp-bckgrd m-0 py-3">
                <div className="col-2">
                  <img
                    src={userData.img}
                    alt="ais-logo-header"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="col-9 ms-2">
                  <div className="color-2E3192">{userData.userName}</div>
                  <div>{userData?.id_A}</div>
                </div>
              </div>

              {settings.map((setting, ind) => (
                <div
                  className={`mx-3 my-2 pointer-cur border-bottom-DDE8F1 pb-1 ${
                    ind === selectProfile
                      ? "select-profile"
                      : "unselect-profile"
                  }`}
                  key={ind}
                  onClick={() => {
                    setProfileShow(false);
                    setSelectProfile(ind);
                    navigate(
                      (ind === 0 && "/profile") ||
                        (ind === 1 && "hr-panel") ||
                        (ind === 2 && "/change-password") ||
                        (ind === 3 && "/manual-work") ||
                        (ind === 4 && "/pending-work") ||
                        (ind === 5 && "/resource-management") ||
                        (ind === 6 && "/user") ||
                        (ind === 7 && "/team") ||
                        (ind === 8 && "/leave") ||
                        (ind === 9 && "/")
                    );

                    if (ind === 6) {
                      setShowUsers(true);
                    } else {
                      setShowUsers(false);
                      if (ind === 9) {
                        deleteCookies();
                        setToken(false);
                        clearLocalStorage();
                      }
                    }
                  }}
                >
                  {setting}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  setToken: PropTypes.func,
  isJiraTimesheetLoading: PropTypes.bool,
};
Header.defaultProps = {
  setToken: noop,
  isJiraTimesheetLoading: false,
};

export default Header;
