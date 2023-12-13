import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import Popover from "@mui/material/Popover";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ModalView from "../../../components/modalView";
import PendingLeaves from "./PendingLeaves";
import LeavesStatus from "./LeavesStatus";

const HrLeaves = (props) => {
  const { showLeftNav, showLeavesWfhStatus } = props;

  const [openLeavePopup, setOpenLeavePopup] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleModalClose = () => setOpenLeavePopup(false);

  return (
    <>
      <div className={`${showLeftNav ? "width-82per" : "col-11"} py-2 px-4`}>
        <div className="d-flex justify-content-between mt-5">
          <div className="form-field">
            <input
              type="text"
              placeholder="Search"
              className="leaveInput-search_Bar ps-2"
            />
            <span className="empList-search">
              <SearchIcon className="color-2E3192" />
            </span>
          </div>

          {/* <div className="align-self-center">
            <span
              className="apply-pro-save-btn color-FFFFFF fontWeight-600 pointer-cur px-3 py-2"
              onClick={() => setOpenLeavePopup(true)}
            >
              Apply New Leave
            </span>
          </div> */}
        </div>

        <div className="section-background-shadow-radius">
          {showLeavesWfhStatus === "leaveList" && (
            <PendingLeaves handleClick={handleClick} />
          )}

          {showLeavesWfhStatus === "leaveStatus" && <LeavesStatus />}

          <div className="d-flex justify-content-between pb-3 pt-2 mt-3">
            <Pagination
              count={10}
              showFirstButton
              showLastButton
              shape="rounded"
            />
            <span className="hr-secTxt mt-1">1 of 20 pages (70 items)</span>
          </div>
        </div>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <div className="py-1">
            <div
              className="pointer-cur popUp_app_rej width-100 mt-1 px-3 py-2"
              onClick={() => {
                setOpenLeavePopup(true);
              }}
            >
              <CheckCircleIcon fontSize="small" className="me-2" />
              Approve
            </div>
            <div
              className="mt-2 pointer-cur popUp_app_rej width-100 px-3 py-2 mb-1"
              onClick={() => {
                setOpenLeavePopup(true);
              }}
            >
              <CancelIcon fontSize="small" className="me-2" />
              Reject
            </div>
          </div>
        </Popover>
      </div>

      <ModalView
        open={openLeavePopup}
        handleModalClose={handleModalClose}
        title="Comments"
        primaryLabel="Confirm"
        secondaryLabel="Cancel"
      />
    </>
  );
};

export default HrLeaves;
