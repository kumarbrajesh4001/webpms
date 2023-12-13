import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ModalView from "../../components/modalView";

function PendingWork() {
  const [open, setOpen] = useState(false);
  // const [checked, setChecked] = useState(false);

  const entries = ["Please Choose...", 10, 20, 30];
  const genders = ["Select User", "berry", "steve", "henny"];

  const userDetails = [
    <input
      type="checkbox"
    ////  checked={checked} ///// controll by api 
      // onClick={() => {
      //   setChecked(!checked);
      // }}

    />,
    "Approval",
    "User Name",
    "Issue Key",
    "Issue Name",
    "Time Spent",
    "Date Created",
    "Comment",
  ];

  const userDetailsList = [
    <input
      type="checkbox"
      // checked={checked} ///// controll by api 
      // onClick={() => {
      //   setChecked(!checked);
      // }}
    />,

    "Pending",
    "A0314",
    "A1MAX",
    "A1MQA Testing",
    "01h : 10m",
    "2022-07-15",
    "overall help",
  ];

  const dataTable = Array.from({ length: 3 }, () => {
    return {
      approval: "Pending",
      userName: "A0314",
      issueKey: "A1MAXINTERNAL",
      issueName: "A1MQA Testing, Bug creation",
      time: "01h : 10m",
      date: "2022-07-15 T17:21",
      commit: "overall help ",
    };
  });

  const handleModalClose = () => setOpen(false);

  return (
    <>
      <div className="background-DCDFE4 p-3">
        <div className="background-FFFFFF min-height-79 px-4">
          <div className="main-heading color-2E3192 pt-3">PENDING WORK LOG</div>

          <hr className="border-DDE8F1" />

          <div className="d-flex justify-content-between">
            <div className="row">
              <label htmlFor="user" className="heading-home">
                Select User
              </label>

              <div className="col-10">
                <select id="user" className="input-field ps-1" required>
                  {genders.map((gender, ind) => (
                    <option
                      key={ind}
                      value={ind === 0 ? "" : gender}
                      disabled={ind === 0 && true}
                      selected={ind === 0 && true}
                      hidden={ind === 0 && true}
                    >
                      {gender}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-2 align-item-end d-flex">
                <span
                  className="apply-pro-save-btn color-FFFFFF fontWeight-600 pointer-cur px-3 py-2"
                  onClick={() => setOpen(true)}
                >
                  Approve
                </span>
                <span className="cancel-button px-5 py-2 mx-3">Reject</span>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div>
                <label
                  htmlFor="entries"
                  className="d-block heading-home color-000000"
                >
                  Show Entries
                </label>

                <select
                  id="entries"
                  className="input-field  color-2E3192 ps-1"
                  required
                >
                  {entries.map((entry, ind) => (
                    <option
                      key={ind}
                      value={ind === 0 ? "" : entry}
                      disabled={ind === 0 && true}
                      selected={ind === 0 && true}
                      hidden={ind === 0 && true}
                    >
                      {entry}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field search-bar-width ms-3">
                <label
                  htmlFor="search"
                  className="d-block heading-home color-000000"
                >
                  Search
                </label>
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
            </div>
          </div>

          <div>
            <table className="width-100 mt-4 mb-5">
              <tr className="background-EEF3F8">
                {userDetails.map((userDetail) => (
                  <th className="text-center py-1">{userDetail}</th>
                ))}
              </tr>
              <tr>
                {userDetailsList.map((userDetail, ind) => (
                  <td className="text-center py-1" key={ind}>
                    {userDetail}
                  </td>
                ))}
              </tr>
              <tr>
                {userDetailsList.map((userDetail, ind) => (
                  <td className="text-center py-1" key={ind}>
                    {userDetail}
                  </td>
                ))}
              </tr>
              <tr>
                {userDetailsList.map((userDetail, ind) => (
                  <td className="text-center py-1" key={ind}>
                    {userDetail}
                  </td>
                ))}
              </tr>
              <tr>
                {userDetailsList.map((userDetail, ind) => (
                  <td className="text-center py-1" key={ind}>
                    {userDetail}
                  </td>
                ))}
              </tr>
              <tr>
                {userDetailsList.map((userDetail, ind) => (
                  <td className="text-center py-1" key={ind}>
                    {userDetail}
                  </td>
                ))}
              </tr>
            </table>
          </div>
        </div>
      </div>
      <ModalView
        open={open}
        handleModalClose={handleModalClose}
        title="Apply for Leave"
        primaryLabel="Sent"
      />
    </>
  );
}

export default PendingWork;
