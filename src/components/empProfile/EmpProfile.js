import React, { useEffect, useState } from "react";
import { API_URL } from "../../constant/apiUrls";
import { getRequest } from "../../services";
import EmpDetails from "../empDetails";
import EmpDocumentation from "../empDocumentation";
import Loader from "../loader";

const EmpProfile = (props) => {
  const { empEdit } = props;

  const [isEmpDetail, setIsEmpDetail] = useState(true);

  const [getProfile, setGetProfile] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getRequest(API_URL.USER_DETAIL)
      .then((res) => {
        setGetProfile(res.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className="pt-2 pb-5 px-3 scroll-Y-axis1">
        <div className="text-center my-4">
          <span
            className={`${
              isEmpDetail ? "apply-pro-save-btn text-white" : "doc-button"
            } px-5 py-2 pointer-cur`}
            onClick={() => {
              setIsEmpDetail(true);
            }}
          >
            Profile
          </span>
          <span
            className={`${
              !isEmpDetail ? "apply-pro-save-btn text-white" : "doc-button"
            } px-4 py-2 pointer-cur`}
            onClick={() => {
              setIsEmpDetail(false);
            }}
          >
            Documentation
          </span>
        </div>
        {isEmpDetail ? (
          <EmpDetails empEdit={empEdit} getProfile={getProfile} />
        ) : (
          <EmpDocumentation />
        )}
      </div>
      <Loader open={isLoading} size={70} />
    </>
  );
};

export default EmpProfile;
