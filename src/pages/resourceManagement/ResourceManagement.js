import React, { useState } from "react";
import moment from "moment";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import date from "../../assets/date.png";
import reload from "../../assets/reload.png";
import exp from "../../assets/exp.png";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function ResourceManagement() {
  let [showDatePicker, setShowDatePicker] = useState(false);

  let [number, setNumber] = useState(0);

  let [applyMonth, setApplyMonth] = useState([
    moment().startOf("month").format("MMM DD, YYYY"),
    moment().endOf("month").format("MMM DD, YYYY"),
  ]);

  const names = ["Oliver Hansen", "Van Henry"];
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [startEndDate, setStartEndDate] = useState([
    moment().add(number, "months").startOf("month").format("MMM DD, YYYY"),
    moment().add(number, "months").endOf("month").format("MMM DD, YYYY"),
  ]);

  const changeMonth = () => {
    setStartEndDate([
      moment().add(number, "months").startOf("month").format("MMM DD, YYYY"),
      moment().add(number, "months").endOf("month").format("MMM DD, YYYY"),
    ]);
  };

  const previousMonth = () => {
    setNumber(--number);
    changeMonth();
  };

  const nextMonth = () => {
    setNumber(++number);
    changeMonth();
  };

  const handleClose = () => {
    setShowDatePicker(false);
  };

  return (
    <div className="background-DCDFE4 p-3 response">
      <div className="background-FFFFFF min-height-79 px-3 pb-5">
        <div className="row pt-4 ">
          <div className="color-2E3192 heading-4 col-6">
            RESOURCE MANAGEMENT
          </div>
          <div className="col-6 text-end">
            <img src={reload} alt="reload" />
            &nbsp;&nbsp;&nbsp;
            <img src={exp} alt="export" />
          </div>
          <div className="col-md-4 col-12 date-width position-relative mt-3">
            <div className="color-2E3192 hr-secNo mb-2">DATE RANGE</div>

            <button
              className="date-button font-Poppins p-1"
              onClick={() => {
                previousMonth();
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </button>

            <button
              className="mx-2 date-button font-Poppins button-width p-1"
              onClick={() => {
                setShowDatePicker(!showDatePicker);
              }}
            >
              <span className="mx-2">
                <img src={date} alt="date" width="14px" className="mb-1" />
                {startEndDate.map((cv, ind) => (
                  <span className="ms-2" key={ind}>
                    {cv} {ind < 1 && "-"}
                  </span>
                ))}
              </span>
            </button>
            <button
              className="date-button font-Poppins p-1"
              onClick={() => {
                nextMonth();
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </button>
            {showDatePicker && (
              <div className="modal2 modal21 p-3">
                <span className="color-2E3192">DATE RANGE</span>
                <div className="row mt-4">
                  <div className="col-6">
                    <span>Start Date</span>

                    <input
                      className="input-date-border input-pos"
                      type="date"
                      onChange={(e) => {
                        setApplyMonth([
                          moment(e.target.value).format("MMM DD, YYYY"),
                          applyMonth[1],
                        ]);
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <span>End Date</span>

                    <input
                      className="input-date-border date input-pos"
                      type="date"
                      onChange={(e) => {
                        setApplyMonth([
                          applyMonth[0],
                          moment(e.target.value).format("MMM DD, YYYY"),
                        ]);
                      }}
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="background-2E3192 border-button text-white col-3 py-1"
                    onClick={() => {
                      setStartEndDate(applyMonth);

                      handleClose();
                    }}
                  >
                    Apply
                  </button>
                  <button
                    className="border-button color-2E3192 ms-5 col-3 py-1"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-8 col-12 mt-3 font-14">
            <div className="row">
              <div className="col-md-2 col-6">
                By Pm
                <FormControl sx={{ m: 1, width: 100 }} size="small">
                  <InputLabel id="demo-multiple-name-label">By Pm</InputLabel>
                  <Select
                    input={<OutlinedInput label="Name" />}
                    sx={{ ".MuiOutlinedInput-notchedOutline": { border: 0 } }}
                  >
                    {names.map((name, i) => (
                      <MenuItem key={i} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="col-md-2 col-6">
                By Project
                <FormControl sx={{ m: 1, width: 100 }} size="small">
                  <InputLabel id="demo-multiple-name-label">By Pm</InputLabel>
                  <Select
                    input={<OutlinedInput label="Name" />}
                    sx={{ ".MuiOutlinedInput-notchedOutline": { border: 0 } }}
                  >
                    {names.map((name, i) => (
                      <MenuItem key={i} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="col-md-2 col-6">
                By Tech
                <FormControl sx={{ m: 1, width: 100 }} size="small">
                  <InputLabel id="demo-multiple-name-label">By Pm</InputLabel>
                  <Select
                    input={<OutlinedInput label="Name" />}
                    sx={{ ".MuiOutlinedInput-notchedOutline": { border: 0 } }}
                  >
                    {names.map((name, i) => (
                      <MenuItem key={i} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className="col-md-2 col-6">
                By Resource
                <FormControl sx={{ m: 1, width: 100 }} size="small">
                  <InputLabel id="demo-multiple-name-label">By Pm</InputLabel>
                  <Select
                    input={<OutlinedInput label="Name" />}
                    sx={{ ".MuiOutlinedInput-notchedOutline": { border: 0 } }}
                  >
                    {names.map((name, i) => (
                      <MenuItem key={i} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className=" col-md-2 col-6 d-flex align-items-center">
                <button
                  type="button"
                  className="border-button color-FFFFFF background-2E3192 p-1"
                >
                  Reset Filters
                </button>
              </div>
              <div className="col-md-2 col-6">
                Days
                <FormControl sx={{ m: 1, width: 100 }} size="small">
                  <InputLabel id="demo-multiple-name-label">Days</InputLabel>
                  <Select
                    input={<OutlinedInput label="Name" />}
                    sx={{ ".MuiOutlinedInput-notchedOutline": { border: 0 } }}
                  >
                    {days.map((day, i) => (
                      <MenuItem key={i} value={day}>
                        {day}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceManagement;
