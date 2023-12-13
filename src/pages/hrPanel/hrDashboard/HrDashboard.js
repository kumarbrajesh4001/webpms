import React from "react";
import leave from "../../../assets/leave.png";
import birthday from "../../../assets/birthday.png";
import recentNews from "../../../assets/recent-news.png";
import todo from "../../../assets/to-do.png";
import holiday from "../../../assets/holiday.png";
import workFrom from "../../../assets/work-from.png";

const HrDashboard = (props) => {
  const { showLeftNav } = props;

  return (
    <div className={`${showLeftNav ? "width-82per" : "col-11"} py-2 `}>
      <div className="d-flex justify-content-around mx-3 mt-5">
        <div className="col-4 d-flex justify-content-around align-items-center section-background-shadow-radius hr-section-height">
          <div>
            <img src={leave} alt="leave" />
          </div>
          <div>
            <div className="hr-secHeading ">Leaves</div>
            <div>
              <span className="hr-secNo color-000000">Approve:</span>
              <span className="hr-secNo color-686868 ms-1">12</span>
            </div>
            <div>
              <span className="hr-secNo color-000000">Reject:</span>
              <span className="hr-secNo color-686868 ms-1">2</span>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-around  align-items-center section-background-shadow-radius hr-section-height">
          <div>
            <img src={birthday} alt="birthday" />
          </div>

          <div>
            <div>
              <span className="hr-secHeading">Birthday</span>
              <span className="hr-secNo color-686868 ms-1">01/03/2023</span>
            </div>
            <div>
              <span className="hr-secTxt">Oliver</span>
              <span className="hr-secTxt ms-4">Steve</span>
            </div>
            <div>
              <span className="hr-secTxt">Scotty</span>
              <span className="hr-secTxt ms-4">Dency</span>
            </div>
            <div>
              <span className="hr-secTxt">Kelvin</span>
              <span className="hr-secTxt ms-4">Remo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-around mx-3 mt-5">
        <div className="col-4 d-flex justify-content-around align-items-center section-background-shadow-radius hr-section-height">
          <div>
            <img src={holiday} alt="holiday" />
          </div>
          <div>
            <div className="hr-secHeading">Holidays</div>
            <div>
              <span className="hr-secNo color-000000">Date:</span>
              <span className="hr-secNo color-686868 ms-1">08/03/23</span>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-around  align-items-center section-background-shadow-radius hr-section-height">
          <div>
            <img src={workFrom} alt="leave" />
          </div>
          <div>
            <div className="hr-secHeading">Work From</div>
            <div>
              <span className="hr-secNo color-000000">Home:</span>
              <span className="hr-secNo color-686868 ms-1">12</span>
            </div>
            <div>
              <span className="hr-secNo color-000000">Office:</span>
              <span className="hr-secNo color-686868 ms-1">50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrDashboard;
