import React from "react";

const LeavesStatus = () => {
  const leaveDetails = [
    "Sr. No.",
    "Employee ID",
    "User Name",
    "Department",
    "Designation",
    "No. Of Days",
    "Type",
    "From Date",
    "To Date",
    "Status",
  ];

  const empLists = [
    "1",
    "A0001",
    "Olive",
    "UI/UX",
    "Designer",
    "2",
    "Paid Leave",
    "01/01/23",
    "03/03/23",
    "Approve",
  ];

  return (
    <table className="width-100 mt-3">
      <tr className="background-F7F7F7">
        {leaveDetails.map((empDetail, ind) => (
          <th
            // colSpan={`${ind === 8 && 2}`}
            className={`color-2E3192 py-2 border-start-0 border-end-0 text-center`}
            key={ind}
          >
            {empDetail}
          </th>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {empLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {ind == 9 ? (
              <span className="approve_btn  px-2 py-1">{empList}</span>
            ) : (
              empList
            )}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {empLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {ind == 9 ? (
              <span className="reject_btn  px-2 py-1">{"Reject"}</span>
            ) : (
              empList
            )}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {empLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {ind == 9 ? (
              <span className="approve_btn  px-2 py-1">{empList}</span>
            ) : (
              empList
            )}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {empLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {ind == 9 ? (
              <span className="reject_btn px-2 py-1">{"Reject"}</span>
            ) : (
              empList
            )}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {empLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {ind == 9 ? (
              <span className="approve_btn px-2 py-1">{empList}</span>
            ) : (
              empList
            )}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {empLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {ind == 9 ? (
              <span className="reject_btn px-2 py-1">{"Reject"}</span>
            ) : (
              empList
            )}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {empLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {ind == 9 ? (
              <span className="approve_btn px-2 py-1">{empList}</span>
            ) : (
              empList
            )}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {empLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {ind == 9 ? (
              <span className="approve_btn px-2 py-1">{empList}</span>
            ) : (
              empList
            )}
          </td>
        ))}
      </tr>
    </table>
  );
};

export default LeavesStatus;
