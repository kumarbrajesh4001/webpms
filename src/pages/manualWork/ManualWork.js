import React from "react";
import timer from "../../assets/timer.png";

function ManualWork() {
  const names = ["Oliver Hansen", "Van Henry"];
  const genders = ["Select project", "AIStimer2.0", "GOM", "lapaland"];

  return (
    <div className="background-DCDFE4 p-3">
      <div className="background-FFFFFF min-height-79 px-4 pt-3 pb-4">
        <div className="main-heading color-2E3192">AIS MANUAL TIMER</div>
        <div className="manual-heading">
          Worklog saved From Here Need To Approve From PM
        </div>
        <hr className="border-DDE8F1" />
        <div className="d-flex justify-content-center px-5 mt-4">
          <div className="px-5">
            <div className="manual-border mb-5 mx-5">
              <div className="row m-3 mt-4">
                <div className="col-6">
                  <label htmlFor="project" className="d-block heading-home">
                    Select Project
                  </label>

                  <select id="project" className="input-field ps-1" required>
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
                <div className="col-6">
                  <label htmlFor="issue" className="d-block heading-home">
                    Select Issue
                  </label>

                  <select id="issue" className="input-field ps-1" required>
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
                <div className="col-12 my-3">
                  <label htmlFor="comment" className="d-block heading-home">
                    Comment
                  </label>
                  <input
                    type="text"
                    id="comment"
                    placeholder="Comments"
                    className="input-field ps-2"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="select-date" className="d-block heading-home">
                    Date
                  </label>
                  <input
                    className="input-field input-pos ps-2 pointer-cur"
                    id="select-date"
                    type="date"
                    onClick={(e) => {
                      e.target.showPicker();
                    }}
                  />
                </div>

                <div className="col-6">
                  <div className="row">
                    <div className="col-6">
                      <label htmlFor="hour" className="heading-home">
                        Hour
                      </label>
                      <div className="input-field d-flex align-items-center">
                        <img
                          src={timer}
                          alt="timer"
                          width="11%"
                          className="ms-2"
                        />

                        <input
                          type="number"
                          id="hour"
                          className=" border-0 mx-2 width-88"
                          min={0}
                        ></input>
                      </div>
                    </div>
                    <div className="col-6">
                      <label htmlFor="minute" className="d-block heading-home">
                        Minute
                      </label>
                      <div className="input-field d-flex align-items-center">
                        <img
                          src={timer}
                          alt="timer"
                          width="11%"
                          className="ms-2"
                        />

                        <input
                          type="number"
                          id="minute"
                          className=" border-0 mx-2 width-88"
                          min={0}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-5 mb-4">
                <span className="cancel-button px-5 py-2">Refresh</span>
                <span className="cancel-button px-5 py-2 mx-4">Cancel</span>
                <span className="apply-pro-save-btn text-white px-4 py-2">
                  Save Worklog
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManualWork;
