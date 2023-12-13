import React, { useState } from "react";
import LeftNavbar from "./components";
import HrDashboard from "./hrDashboard";
import EmployeeLIst from "./employeeList";
import Timesheets from "./timesheets";
import HrLeaves from "./hrLeaves";
import WFH from "./wfh";
import EmpProfile from "../../components/empProfile";

const HrPanel = () => {
  const [showLeftNav, setShowLeftNav] = useState(true);
  const [showLeavesWfhStatus, setShowLeavesWfhStatus] = useState(false);

  const [isEmpList, setIsEmpList] = useState(true);

  const [showRightNav, setShowRightNav] = useState("dashboard");

  return (
    <div className="background-DCDFE4 py-3">
      <div className="background-FFFFFF min-height-79">
        <div className="row montserrat-fontFamily">
          <LeftNavbar
            showLeftNav={showLeftNav}
            setShowLeftNav={setShowLeftNav}
            setShowRightNav={setShowRightNav}
            showRightNav={showRightNav}
            setIsEmpList={setIsEmpList}
            setShowLeavesWfhStatus={setShowLeavesWfhStatus}
          />

          {(showRightNav === "dashboard" && (
            <HrDashboard showLeftNav={showLeftNav} />
          )) ||
            (showRightNav === "employeeList" &&
              (isEmpList ? (
                <EmployeeLIst
                  showLeftNav={showLeftNav}
                  setIsEmpList={setIsEmpList}
                />
              ) : (
                <div
                  className={`${
                    showLeftNav ? "width-82per" : "col-11"
                  } py-2 px-2`}
                >
                  <EmpProfile empEdit />
                </div>
              ))) ||
            (showRightNav === "timesheets" && (
              <Timesheets showLeftNav={showLeftNav} />
            )) ||
            (showRightNav === "leaves" && showLeavesWfhStatus && (
              <HrLeaves
                showLeftNav={showLeftNav}
                showLeavesWfhStatus={showLeavesWfhStatus}
              />
            )) ||
            (showRightNav === "wfh" && showLeavesWfhStatus && (
              <WFH
                showLeftNav={showLeftNav}
                showLeavesWfhStatus={showLeavesWfhStatus}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HrPanel;
