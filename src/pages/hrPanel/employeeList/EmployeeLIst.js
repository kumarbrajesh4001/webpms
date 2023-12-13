import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Pagination from "@mui/material/Pagination";
import Popover from "@mui/material/Popover";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import upload from "../../../assets/upload.png";
import { getRequest } from "../../../services";
import { getUserList } from "../../../constant/apiUrls";
import { DEFAULT_SELECTED_PAGE, PAGINATION_ROWS } from "../../../constant";
import PaginationInfo from "../../../components/paginationInfo";
import Loader from "../../../components/loader";

const EmployeeLIst = (props) => {
  const { showLeftNav, setIsEmpList } = props;

  const [empList, setEmpList] = useState({});

  const [selectedPage, setSelectedPage] = useState(DEFAULT_SELECTED_PAGE);

  const [isLoading, setIsLoading] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const statuses = ["Please Choose...", "Active", "Inactive", "Pending"];

  const empDetails = [
    "Sr. No.",
    "Employee ID",
    "Pseudo Name",
    "Department",
    "Designation",
    "Address",
    "Work From",
    "Status",
    "Reason",
    "DOE",
  ];

  useEffect(() => {
    setIsLoading(true);
    getRequest(getUserList(selectedPage, PAGINATION_ROWS))
      .then((res) => {
        setEmpList(res.data);
      })
      .finally(() => setIsLoading(false));
  }, [selectedPage]);

  return (
    <>
      <div className={`${showLeftNav ? "width-82per" : "col-11"} py-2 px-4`}>
        <div className="d-flex justify-content-between mt-5">
          <div className="form-field">
            <input
              type="text"
              placeholder="Search"
              className="leaveInput-search_Bar ps-2"
            />
            <span className="empList-search pointer-cur">
              <SearchIcon className="color-2E3192" />
            </span>
          </div>
          <div className="row">
            <div className="col-9 input-bg-hight-border font-size-15 d-flex align-items-center px-2">
              <span>Status:</span>
              <select
                className="border-0 color-686868 ps-1 pointer-cur"
                required
              >
                {statuses.map((status, ind) => (
                  <option
                    key={ind}
                    
                    value={ind === 0 ? "" : status}
                    disabled={ind === 0 && true}
                    selected={ind === 0 && true}
                    hidden={ind === 0 && true}
                  >
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-2">
              <img
                src={upload}
                alt="upload"
                width="35px"
                height="35px"
                className="pointer-cur"
              />
            </div>
          </div>
        </div>

        <div className="section-background-shadow-radius">
          <table className="width-100 mt-3">
            <tr className="background-F7F7F7">
              {empDetails.map((empDetail, ind) => (
                <th
                  colSpan={`${ind === 9 && 2}`}
                  className={`${
                    ind !== 9 ? "text-center" : "ps-3"
                  } color-2E3192 py-2 border-start-0 border-end-0`}
                  key={ind}
                >
                  {empDetail}
                </th>
              ))}
            </tr>

            {empList?.data?.map((list, ind) => (
              <tr className="background-FFFFFF" key={ind}>
                <td className="text-center empList-txt py-2 border-start-0 border-end-0">
                  {ind + 1 + (selectedPage + 1 - 1) * PAGINATION_ROWS}
                </td>

                <td className="text-center empList-txt py-2 border-start-0 border-end-0">
                  {list.user_key}
                </td>
                <td className="text-center empList-txt py-2 border-start-0 border-end-0">
                  {list.display_name}
                </td>
                <td className="text-center empList-txt py-2 border-start-0 border-end-0">
                  {list.department || "UI/UX"}
                </td>
                <td className="text-center empList-txt py-2 border-start-0 border-end-0">
                  {list.designation || "Software developer"}
                </td>
                <td className="text-center empList-txt py-2 border-start-0 border-end-0">
                  {list.address || "Delhi"}
                </td>
                <td className="text-center empList-txt py-2 border-start-0 border-end-0">
                  {list.workFrom || "Home"}
                </td>
                <td className="text-center empList-txt py-2 border-start-0 border-end-0">
                  {list.status || "⛔"}
                </td>

                <td className="text-center empList-txt py-2 border-start-0 border-end-0">
                  {list.reason || "FNY"}
                </td>
                <td className="text-center empList-txt py-2 border-start-0 border-end-0">
                  {list.DOJ || "01/01/23"}
                </td>

                <td className="text-center empList-txt py-2 border-start-0 border-end-0">
                  <MoreVertIcon
                    className="color-000000 pointer-cur"
                    onClick={handleClick}
                  />
                </td>
              </tr>
            ))}
          </table>

          <div className="d-flex justify-content-between pb-3 pt-2 mt-3 mx-2">
            {Math.ceil(empList?.count / 10) > 1 && (
              <Pagination
                count={Math.ceil(empList?.count / 10)}
                showFirstButton
                showLastButton
                shape="rounded"
                onChange={(_, page) => setSelectedPage(page - 1)}
              />
            )}

            <PaginationInfo
              selectedPage={selectedPage}
              currentPageCount={empList?.data?.length}
              totalCount={empList?.count}
            />
          </div>
        </div>

        <div className="mt-5">
          <div className="cus_radio_btn background-40BC39 d-inline-block"></div>
          <span className="ms-3 me-4">Active</span>
          <div className="cus_radio_btn background-E71D1D d-inline-block"></div>
          <span className="ms-3 me-4">Inactive</span>
          <div className="cus_radio_btn background-FDE642 d-inline-block"></div>
          <span className="ms-3">Pending</span>
        </div>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <div className="p-3 empList-txt">
            <div
              className="pointer-cur"
              onClick={() => {
                setIsEmpList(false);
              }}
            >
              <EditIcon fontSize="small" className="me-2" />
              Edit
            </div>
            <div className="my-2 pointer-cur">
              <VisibilityIcon fontSize="small" className="me-2" />
              View
            </div>
            <div className="pointer-cur">
              <DeleteIcon fontSize="small" className="me-2" />
              Delete
            </div>
          </div>
        </Popover>
      </div>
      <Loader open={isLoading} size={70} />
    </>
  );
};

export default EmployeeLIst;
