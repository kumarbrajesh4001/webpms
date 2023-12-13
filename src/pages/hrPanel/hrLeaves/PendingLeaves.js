import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const PendingLeaves = (props) => {
    
  const { handleClick } = props;

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
    <MoreVertIcon className="color-000000 pointer-cur" onClick={handleClick} />,
  ];

  return (
    <table className="width-100 mt-3">
      <tr className="background-F7F7F7">
        {leaveDetails.map((empDetail, ind) => (
          <th
            colSpan={`${ind === 8 && 2}`}
            className={`${
              ind !== 8 ? "text-center" : "ps-3"
            } color-2E3192 py-2 border-start-0 border-end-0`}
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
            {empList}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {empLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {empList}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {empLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {empList}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {empLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {empList}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {empLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {empList}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {empLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {empList}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {empLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {empList}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {empLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {empList}
          </td>
        ))}
      </tr>
    </table>
  );
};

export default PendingLeaves;
