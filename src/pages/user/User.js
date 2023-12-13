import React, { useEffect, useState } from "react";
import Loader from "../../components/loader";
import TableModal from "../../components/tablemodal";
import UserWorklog from "../../components/userWorklog";
import { API_URL } from "../../constant/apiUrls";
import { getRequest } from "../../services";

const User = () => {
  const [jiraTimeSheet, setjiraTimeSheet] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [tableModal, setTableModal] = useState(false);

  const [userLogs, setUserLogs] = useState([]);

  const tableModalClose = () => setTableModal(false);

  useEffect(() => {
    setIsLoading(true);
    getRequest(API_URL.JIRA_TIMESHEET) /// only URL Change when call user api
      .then((res) => {
        setjiraTimeSheet(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className="background-DCDFE4 p-3">
        <UserWorklog
          jiraTimeSheet={jiraTimeSheet}
          setUserLogs={setUserLogs}
          setTableModal={setTableModal}
        />
      </div>
      <TableModal
        tableModal={tableModal}
        tableModalClose={tableModalClose}
        userLogs={userLogs}
        isUser={true}
      />
      <Loader open={isLoading} size={70} />
    </>
  );
};

export default User;
