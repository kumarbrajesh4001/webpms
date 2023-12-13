import React, { useEffect, useState } from "react";
import moment from "moment";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { postRequest } from "../../services";
import { API_URL } from "../../constant/apiUrls";
import Loader from "../loader";

function ModalView(props) {
  const { open, handleModalClose, title, primaryLabel, secondaryLabel } = props;
  const [isLoading, setIsLoading] = useState(false);

  const leaveType = ["Please Choose ...", "Paid Leave", "Leave Without Pay"];

  const [wfhData, setWfhData] = useState({
    toDate: "",
    fromDate: "",
    discription: "",
  });

  const [leaveData, setLeaveData] = useState({
    user_id: "",
    subject: "",
    toDate: "",
    fromDate: "",
    leaveType: "",
    body: "ghbh", 
    daywise_leaves: ""
  });

  // const leaveData = {
  //   user_id: "AA051",
  //   subject: "gfgdf",
  //   body: "ghbh",
  //   fromDate: "2/3/2022",
  //   toDate: "4/3/2022",
  //   leaveType: "Paid",
  //   daywise_leaves: "",
  // };

  const handleClick = (e) => {
    const name = e.target.name;
    const value =
      name === "discription"
        ? e.target.value
        : moment(e.target.value).format("DD/MM/YYYY");

    setWfhData({ ...wfhData, [name]: value });
  };

  const applyWfh = () => {
    setIsLoading(true);

    postRequest(API_URL.WFH, wfhData)
      .then((res) => {
        console.log(res);
      })
      .finally(() => setIsLoading(false));
    setWfhData({ toDate: "", fromDate: "", discription: "" });
  };

  const applyLeave = () => {
    setIsLoading(true);
    postRequest(API_URL.APPLY_LEAVE, leaveData)
      .then((res) => {
        console.log(res);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    applyLeave();
  }, []);

  return (
    <>
      <Modal
        open={open}
        onClose={handleModalClose}
        className="montserrat-fontFamily"
      >
        <Box
          className={`modalView ${secondaryLabel ? "width-37" : "width-45"}`}
        >
          <div className="row">
            <div className="col-11 text-center leave-apply color-000000 mb-3">
              {title}
            </div>
            <div className="col-1 text-end">
              <IconButton size="small" onClick={handleModalClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
          {!secondaryLabel && (
            <div className="row">
              <div className="col-6">
                <label htmlFor="from" className="d-block label-text">
                  From
                </label>
                <input
                  type="date"
                  id="from"
                  name="fromDate"
                  className="input-section ps-2 pe-1 pointer-cur"
                  onChange={handleClick}
                  onClick={(e) => {
                    e.target.showPicker();
                  }}
                />
              </div>
              <div className="col-6">
                <label htmlFor="to" className="d-block label-text">
                  To
                </label>
                <input
                  type="date"
                  id="to"
                  name="toDate"
                  className="input-section ps-2 pe-1 pointer-cur"
                  onChange={handleClick}
                  onClick={(e) => {
                    e.target.showPicker();
                  }}
                />
              </div>
            </div>
          )}

          <div className="row mt-3">
            {primaryLabel === "Sent" && (
              <div className="col-6">
                <label htmlFor="leave" className="d-block label-text">
                  Leave Type
                </label>
                <select
                  id="leave"
                  className="input-section ps-1"
                  name="leaveType"
                  required
                >
                  {leaveType.map((leave, ind) => (
                    <option
                      key={ind}
                      value={ind === 0 ? "" : leave}
                      disabled={ind === 0 && true}
                      selected={ind === 0 && true}
                      hidden={ind === 0 && true}
                    >
                      {leave}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className={!!secondaryLabel ? "col-12" : "col-6"}>
              <label htmlFor="name" className="d-block label-text">
                Description
              </label>
              <input
                type="text"
                id="name"
                name="discription"
                placeholder="Enter description"
                className="input-section ps-2"
                onChange={handleClick}
              />
            </div>
          </div>
          <div className="text-center mt-4 mb-2">
            {!!secondaryLabel && (
              <span className="cancel-button px-5 py-2 color-2E3192">
                {secondaryLabel}
              </span>
            )}
            <span
              className="apply-pro-save-btn px-5 py-2 text-white ms-3"
              onClick={() => {
                applyWfh();
                handleModalClose();
              }}
            >
              {primaryLabel}
            </span>
          </div>
        </Box>
      </Modal>
      <Loader open={isLoading} size={70} />
    </>
  );
}

export default ModalView;
