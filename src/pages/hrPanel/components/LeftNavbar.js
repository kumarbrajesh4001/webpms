import React, { useState } from "react";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import PersonIcon from "@mui/icons-material/Person";
import HouseIcon from "@mui/icons-material/House";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import TimerSharpIcon from "@mui/icons-material/TimerSharp";
import back_button from "../../../assets/back-button.png";
import forward_button from "../../../assets/forward-button.png";

const LeftNavbar = (props) => {
  const {
    showLeftNav,
    setShowLeftNav,
    setShowRightNav,
    showRightNav,
    setIsEmpList,
    setShowLeavesWfhStatus,
  } = props;

  const [showLeavesBtn, setShowLeavesBtn] = useState(false);
  const [showWFHBtn, setShowWFHBtn] = useState(false);

  const openPopupOnMouseOver = (activity) => () => {
    if (activity === "hrLeave") {
      setShowLeavesBtn(!showLeavesBtn);
      setShowWFHBtn(false);
    } else if (activity === "wfh") {
      setShowWFHBtn(!showWFHBtn);
      setShowLeavesBtn(false);
    } else {
      setShowLeavesBtn(false);
      setShowWFHBtn(false);
    }
  };

  return (
    <div
      className={`${
        showLeftNav ? "width-18per" : "width-7per text-center"
      } background-F7F7F7 px-4 py-2 contain-position-relative `}
    >
      {showLeftNav ? (
        <img
          src={back_button}
          alt="back_button"
          className="leftNav-expand-btn pointer-cur"
          onClick={() => {
            setShowLeftNav(false);
          }}
        />
      ) : (
        <img
          src={forward_button}
          alt="forward_button"
          className="leftNav-expand-btn pointer-cur"
          onClick={() => {
            setShowLeftNav(true);
          }}
        />
      )}

      <div
        className={`hr-leftNav ${
          showRightNav === "dashboard" && "background-2E3192 text-white"
        }  mb-4 mt-5 py-1`}
        onClick={() => {
          setShowRightNav("dashboard");
        }}
      >
        <GridViewSharpIcon fontSize="small" className="ms-1" />
        {showLeftNav && <span className="ms-2">Dashboard </span>}
      </div>
      <div
        className={`hr-leftNav ${
          showRightNav === "employeeList" && "background-2E3192 text-white"
        }  my-4 py-1`}
        onClick={() => {
          setShowRightNav("employeeList");
          setIsEmpList(true);
        }}
      >
        <PersonIcon className="ms-1" />

        {showLeftNav && <span> Employees </span>}
      </div>
      <div
        className={`hr-leftNav ${
          showRightNav === "timesheets" && "background-2E3192 text-white"
        }  my-4 py-1`}
        onClick={() => {
          setShowRightNav("timesheets");
        }}
      >
        <TimerSharpIcon className="ms-1" />

        {showLeftNav && <span className="ms-2">Timesheets</span>}
      </div>
      <div
        className={`hr-leftNav d-flex justify-content-${
          showLeftNav ? "between" : "center"
        } contain-position-relative ${
          showRightNav === "leaves" && "background-2E3192 text-white"
        }  my-4 py-1`}
        onMouseEnter={openPopupOnMouseOver("hrLeave")}
        onMouseLeave={openPopupOnMouseOver("leave")}
      >
        <span>
          <LogoutSharpIcon fontSize="small" className="ms-1" />
          {showLeftNav && <span className="ms-2">Leaves </span>}
        </span>
        {showLeftNav && <ExpandMoreIcon />}
        {showLeavesBtn && (
          <div
            className={`leave-wfh-popup shadow ${
              showLeftNav ? "width-100" : "width-left text-start"
            } `}
          >
            <div
              className="hr-leftNav p-2 mt-1"
              onClick={() => {
                setShowLeavesWfhStatus("leaveList");
                setShowRightNav("leaves");
                setShowLeavesBtn(false);
              }}
            >
              Pending Leave
            </div>
            <div
              className="hr-leftNav p-2 mb-1"
              onClick={() => {
                setShowLeavesWfhStatus("leaveStatus");
                setShowRightNav("leaves");
                setShowLeavesBtn(false);
              }}
            >
              Leave Status
            </div>
          </div>
        )}
      </div>
      <div
        className={`hr-leftNav d-flex justify-content-${
          showLeftNav ? "between" : "center"
        } contain-position-relative ${
          showRightNav === "wfh" && "background-2E3192 text-white"
        }  my-4 py-1`}
        onMouseEnter={openPopupOnMouseOver("wfh")}
        onMouseLeave={openPopupOnMouseOver("leave")}
      >
        <span>
          <HouseIcon fontSize="small" className="ms-1" />
          {showLeftNav && <span className="ms-2">Work From Home</span>}
        </span>
        {showLeftNav && <ExpandMoreIcon />}

        {showWFHBtn && (
          <div
            className={`leave-wfh-popup shadow ${
              showLeftNav ? "width-100" : "width-left text-start"
            } `}
          >
            <div
              className="hr-leftNav p-2 mt-1"
              onClick={() => {
                setShowLeavesWfhStatus("wfhList");
                setShowRightNav("wfh");
                setShowWFHBtn(false);
              }}
            >
              Pending WFH
            </div>
            <div
              className="hr-leftNav p-2 mb-1"
              onClick={() => {
                setShowLeavesWfhStatus("wfhStatus");
                setShowRightNav("wfh");
                setShowWFHBtn(false);
              }}
            >
              WFH Status
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftNavbar;
