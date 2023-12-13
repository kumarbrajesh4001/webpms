import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const WFHList = (props) => {
  const { handleClick } = props;
  const wfhDetails = [
    "Pseudo Name",
    "Employee Name",
    "From Date",
    "To Date",
    "",
  ];

  const wfhLists = [
    "Jonny",
    "Olive",
    "01/01/23",
    "03/03/23",
    <MoreVertIcon className="color-000000 pointer-cur" onClick={handleClick} />,
  ];

  return (
    <table className="width-100 mt-3">
      <tr className="background-F7F7F7">
        {wfhDetails.map((wfhDetail, ind) => (
          <th
            className="color-2E3192 py-2 border-start-0 border-end-0 text-center"
            key={ind}
          >
            {wfhDetail}
          </th>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {wfhLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {empList}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {wfhLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {empList}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {wfhLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {empList}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {wfhLists.map((empList, ind) => (
          <td
            className="text-center   empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {empList}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {wfhLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {empList}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {wfhLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {empList}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {wfhLists.map((empList, ind) => (
          <td
            className="text-center empList-txt py-2 border-start-0 border-end-0"
            key={ind}
          >
            {empList}
          </td>
        ))}
      </tr>
      <tr className="background-FFFFFF">
        {wfhLists.map((empList, ind) => (
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

export default WFHList;
