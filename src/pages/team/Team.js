import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import { API_URL } from "../../constant/apiUrls";
import { getCalender } from "../../helpers/calender";
import { getRequest } from "../../services";
import Loader from "../../components/loader";
import { getHoursByDate } from "../../helpers/worklog";
import DateCalender from "../../components/dataCalender";
import TableModal from "../../components/tablemodal";

function Team() {
  const [teamTimeSheet, setTeamTimeSheet] = useState({});

  const [userLogs, setUserLogs] = useState([]);

  console.log(userLogs, 17);

  const [isLoading, setIsLoading] = useState(false);

  const [tableModal, setTableModal] = useState(false);

  const calenderDate = getCalender();

  const tableModalClose = () => setTableModal(false);

  const getTotalHoursbyDate = () =>
    teamTimeSheet?.userDisplay_name?.map((userName) => {
      return {
        [userName]: getHoursByDate(
          teamTimeSheet?.user_worklog[userName]?.logs,
          calenderDate.length
        ),
      };
    });

  const userStatus = (user, date) => {
    setUserLogs(
      teamTimeSheet?.user_worklog[user]?.logs?.filter(
        (cv) => cv.worklog_date === date
      )
    );
  };

  useEffect(() => {
    setIsLoading(true);
    getRequest(API_URL.TEAM_TIMESHEET)
      .then((res) => {
        setTeamTimeSheet(res.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className="background-DCDFE4 p-3">
        <div className="background-FFFFFF min-height-79 px-3 pb-5">
          <div className="d-flex justify-content-between pt-4">
            <DateCalender />
            <div className="form-field search-bar-width">
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

          <hr className="border-DDE8F1" />

          <div className="row mt-3 scroller mx-1">
            <div className="col-3 px-0 sticky">
              <table className="width-100">
                <tr className="background-EEF3F8">
                  <th
                    colSpan="2"
                    className="color-000000 heading-home th-padding ps-2"
                  >
                    Name
                  </th>
                  <th className="color-000000 sigma-sign text-center">Σ</th>
                </tr>

                {teamTimeSheet?.userDisplay_name?.map((name, ind) => (
                  <tr key={ind}>
                    <td
                      colSpan="2"
                      className="line-height-26 fontWeight-500 color-000000 py-2 ps-2"
                    >
                      {name}
                    </td>
                    <td className="line-height-26 fontWeight-600 text-center">
                      {teamTimeSheet?.user_worklog[name]?.total}
                    </td>
                  </tr>
                ))}

                <tr>
                  <td
                    colSpan="3"
                    className="color-2E3192 heading-home py-2 ps-2"
                  >
                    Daily Hours Total
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan="3"
                    className="color-2E3192 heading-home py-2 ps-2"
                  >
                    Weekly Hours Total
                  </td>
                </tr>

                <tr>
                  <td
                    colSpan="3"
                    className="color-2E3192 heading-home py-2 ps-2"
                  >
                    Monthly Hours Total
                  </td>
                </tr>
              </table>
            </div>

            <div className="col-md-9 col-6 scroll-X-axis1 ps-0">
              <table className="width-100">
                <tr className="calender-date color-000000 background-EEF3F8">
                  {calenderDate.map((cv, ind) => (
                    <td
                      key={ind}
                      className={`text-center ${
                        cv.day === "SU" && "opacity-05"
                      } px-2`}
                    >
                      {cv.date}
                      <br />
                      {cv.day}
                    </td>
                  ))}
                </tr>

                {getTotalHoursbyDate()?.map((userHours, ind) =>
                  Object.keys(userHours).map((user) => (
                    <tr
                      key={ind}
                      className="line-height-26 fontWeight-400 text-center"
                    >
                      {userHours[user]?.map((totalHour, ind) => (
                        <td
                          key={ind}
                          className={`py-2 ${
                            totalHour.AttrValue === "1" && "pre-border"
                          }  ${totalHour.worklog_time && "pointer-cur"}`}
                          onClick={() => {
                            if (totalHour.worklog_time) {
                              setTableModal(true);
                              userStatus(user, totalHour.worklog_date);
                            }
                          }}
                        >
                          {totalHour.worklog_time
                            ? Number.parseFloat(totalHour.worklog_time).toFixed(
                                2
                              )
                            : ""}
                        </td>
                      ))}
                    </tr>
                  ))
                )}

                <tr className="color-2E3192  text-center line-height-27 fontWeight-600">
                  {teamTimeSheet?.hours_total?.map((cv, ind) => (
                    <td className="py-2" key={ind}>
                      {cv}
                    </td>
                  ))}
                </tr>

                <tr className="color-2E3192  text-end line-height-27 fontWeight-600">
                  {teamTimeSheet?.sumWeekData?.map((cv, ind) => (
                    <td colSpan={cv.col} className="py-2" key={ind}>
                      {cv.time}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td
                    colSpan={teamTimeSheet.lastDate}
                    className="py-2 border-start-0 color-2E3192 monthly-hours"
                  >
                    {teamTimeSheet.totalLogTime}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <TableModal
        tableModal={tableModal}
        tableModalClose={tableModalClose}
        userLogs={userLogs}
        isUser={false}
      />

      <Loader open={isLoading} size={70} />
    </>
  );
}

export default Team;
