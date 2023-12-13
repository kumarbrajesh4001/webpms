import moment from "moment";
import React, { useState } from "react";
import dwn_btn from "../../assets/dwn-btn.png";
import ModalView from "../modalView";
import SalaryStructure from "../salaryStructure";

const EmpDetails = (props) => {
  const { empEdit, getProfile } = props;

  const { data } = getProfile;

  const [open, setOpen] = useState(false);

  const [isLeave, setIsLeave] = useState(true);

  const genders = ["Please Choose...", "Male", "Female", "Other"];

  const designations = {
    default: ["Please Choose..."],
    HR: ["Please Choose...", "Trainee", "Junior", "Senior", "Team Lead"],
    PM: ["Please Choose...", "DM", "Sr.PM", "APM", "PC"],

    Developer: [
      "Please Choose...",
      "Trainee",
      "Junior developer",
      "Senior developer",
      "TL",
    ],

    QA: ["Please Choose...", "Trainee", "Junior QA", "Senior QA", "TL QA"],
    BA: ["Please Choose...", "Trainee", "Junior BA", "Senior BA"],

    Administrator: [
      "Please Choose...",
      "Trainee",
      "Junior Administrator",
      "Senior Administrator",
    ],

    Sales: ["Please Choose...", "Trainee", "Junior Sales", "Senior Sales"],
    SEO: ["Please Choose...", "Trainee", "Junior SEO", "Senior SEO"],
    Design: ["Please Choose...", "Trainee", "Junior Design", "Senior Design"],
  };

  const departments = [
    "Please Choose...",
    "HR",
    "PM",
    "Developer",
    "QA",
    "BA",
    "Sales",
    "SEO",
    "Administrator",
    "Design",
  ];

  const handleModalClose = () => setOpen(false);

  const currentMonth = moment().format("YYYY-MM");
  const [rangeMonth, setRangeMonth] = useState("");

  const [inputValue, setInputValue] = useState("");

  const [selectDepartment, setSelectDepartment] = useState("default");

  const [selectedDesig, setSelectedDesig] = useState("");

  return (
    <>
      <div className="section-background-shadow-radius p-3">
        <div className="d-flex justify-content-between mt-2 mb-4">
          <div>
            <img src={data?.avatar} alt="emp_profile" width={80} height={80} />
            <span className="emp-heading color-000000 ms-2">
              {data?.display_name}
            </span>
          </div>

          {!empEdit && (
            <div className="mt-3">
              <span
                className="apply-pro-save-btn text-white px-4 py-2"
                onClick={() => {
                  setOpen(true);

                  setIsLeave(false);
                }}
              >
                Apply for WFH
              </span>
              <span
                className="apply-pro-save-btn text-white ms-4 px-4 py-2"
                onClick={() => {
                  setOpen(true);

                  setIsLeave(true);
                }}
              >
                Apply for Leave
              </span>
            </div>
          )}
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <label htmlFor="name" className="d-block label-text">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="input-section ps-2"
            />
          </div>
          <div className="col-4">
            <label htmlFor="gender" className="d-block label-text">
              Gender
            </label>

            <select id="gender" className="input-section ps-1" required>
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
          <div className="col-4">
            <label htmlFor="empId" className="d-block label-text">
              Employee ID
            </label>
            <input
              type="text"
              className="input-section ps-2"
              id="empId"
              placeholder="Enter employee id"
              value={data?.user_key}
              disabled
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-4">
            <label htmlFor="pseudo" className="d-block label-text">
              Pseudo Name
            </label>
            <input
              type="text"
              className="input-section ps-2"
              id="pseudo"
              placeholder="Enter pseudo name"
              value={data?.display_name}
              disabled
            />
          </div>
          <div className="col-4">
            <label htmlFor="department" className="d-block label-text">
              Department
            </label>
            <select
              id="department"
              className="input-section ps-1"
              onChange={(e) => {
                setSelectDepartment(e.target.value);
                setSelectedDesig("");
              }}
              required
            >
              {departments.map((department, ind) => (
                <option
                  key={ind}
                  value={ind === 0 ? "" : department}
                  disabled={ind === 0 && true}
                  selected={ind === 0 && true}
                  hidden={ind === 0 && true}
                >
                  {department}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4">
            <label htmlFor="designation" className="d-block label-text">
              Designation
            </label>
            <select
              id="designation"
              className="input-section ps-1"
              value={selectedDesig}
              onChange={(e) => setSelectedDesig(e.target.value)}
              required
            >
              {designations[selectDepartment]?.map((cv, ind) => (
                <option
                  key={ind}
                  value={ind === 0 ? "" : cv}
                  disabled={ind === 0 && true}
                  selected={ind === 0 && true}
                  hidden={ind === 0 && true}
                >
                  {cv}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mt-3 mb-2">
          <div className="col-4">
            <label htmlFor="dob" className="d-block label-text">
              Date Of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="input-section ps-2 pe-1 pointer-cur"
              onClick={(e) => {
                e.target.showPicker();
              }}
            />
          </div>
          <div className="col-4">
            <label htmlFor="doj" className="d-block label-text">
              Date Of Joining
            </label>
            <input
              type="date"
              id="doj"
              className="input-section ps-2 pe-1 pointer-cur"
              onClick={(e) => {
                e.target.showPicker();
              }}
            />
          </div>
          <div className="col-4">
            <label htmlFor="emailIdOffice" className="d-block label-text">
              Email ID (Office)
            </label>
            <input
              type="text"
              className="input-section ps-2"
              id="emailIdOffice"
              placeholder="Enter your email Id"
              value={data?.email}
              disabled
            />
          </div>
        </div>

        <div className="row mt-3 mb-2">
          <div className="col-4">
            <label htmlFor="emailIDPersonal" className="d-block label-text">
              Email ID (Personal)
            </label>
            <input
              type="text"
              className="input-section ps-2"
              id="emailIDPersonal"
              placeholder="Enter your email Id"
            />
          </div>
          <div className="col-4">
            <label htmlFor="conNoprimary" className="d-block label-text">
              Contect Number (Primary)
            </label>
            <input
              type="number"
              className="input-section px-2"
              id="conNoprimary"
              placeholder="Enter contect number"
              min={0}
            />
          </div>
          <div className="col-4">
            <label htmlFor="conNoSecond" className="d-block label-text">
              Contect Number (Secondary)
            </label>
            <input
              type="number"
              className="input-section px-2"
              id="conNoSecond"
              placeholder="Enter contect number"
              min={0}
            />
          </div>
        </div>

        <div className="row mt-3 mb-2">
          <div className="col-4">
            <label htmlFor="currentAdd" className="d-block label-text">
              Current Address
            </label>
            <input
              type="text"
              className="input-section ps-2"
              id="currentAdd"
              placeholder="Enter current address"
            />
          </div>
          <div className="col-4">
            <label htmlFor="permanentAdd" className="d-block label-text">
              Permanent Address
            </label>
            <input
              type="text"
              className="input-section ps-2"
              id="permanentAdd"
              placeholder="Enter permanent address"
            />
          </div>
        </div>
      </div>
      <div className="section-background-shadow-radius p-3 my-3">
        <span className="emp-heading color-2E3192">Salary Slip</span>
        <div className="row mt-4">
          <div className="col-4">
            <label htmlFor="dom" className="d-block label-text">
              From Month
            </label>
            <input
              type="month"
              id="dom"
              className="input-section ps-2 pe-1 pointer-cur"
              onChange={(e) => {
                setRangeMonth(e.target.value);

                setInputValue("");
              }}
              onClick={(e) => {
                e.target.showPicker();
              }}
              max={currentMonth}
            />
          </div>
          {!(rangeMonth === currentMonth) && (
            <div className="col-4">
              <label htmlFor="doj" className="d-block label-text">
                To Month
              </label>
              <input
                type="month"
                id="doj"
                className="input-section ps-2 pe-1 me-2 pointer-cur"
                min={rangeMonth}
                max={currentMonth}
                disabled={!rangeMonth}
                onClick={(e) => {
                  e.target.showPicker();
                }}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                value={inputValue}
              />
            </div>
          )}
          <div className="col-4 margin-top-19 p-0">
            <span className="pointer-cur">
              <img src={dwn_btn} alt="dwn-btn" width="61px" />
              <span className="ps-2 hr-secNo color-686868">
                Download Salary Slip
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="section-background-shadow-radius p-3">
        <span className="emp-heading color-2E3192">Bank Details</span>
        <div className="row mt-4">
          <div className="col-4">
            <label htmlFor="bank-name" className="d-block label-text">
              Bank Name
            </label>
            <input
              type="text"
              className="input-section ps-2"
              id="bank-name"
              placeholder="Enter bank name"
            />
          </div>
          <div className="col-4">
            <label htmlFor="holder-name" className="d-block label-text">
              Account Holder Name
            </label>
            <input
              type="text"
              className="input-section ps-2"
              id="holder-name"
              placeholder="Enter account holder name"
            />
          </div>
          <div className="col-4">
            <label htmlFor="account-number" className="d-block label-text">
              Account Number
            </label>
            <input
              type="number"
              className="input-section px-2"
              id="account-number"
              placeholder="Enter account number"
              min={0}
            />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-4 px-3">
        <span className="cancel-button px-5 py-1">Cancel</span>
        <span className="apply-pro-save-btn px-5 py-1 text-white ms-4">
          Save
        </span>
      </div>
      {empEdit && data?.role !== "Admin" && data?.role !== "NormalEmployee" && (
        <SalaryStructure />
      )}

      <ModalView
        open={open}
        handleModalClose={handleModalClose}
        title={isLeave ? "Apply for Leave" : "Apply for Work From Home"}
        primaryLabel={isLeave ? "Sent" : "Submit"}
      />
    </>
  );
};

export default EmpDetails;
