import React, { useState } from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

const Frontend = (props) => {
  const { setToken, isJiraTimesheetLoading, getApiData } = props;

  const [profileShow, setProfileShow] = useState(false);

  return (
    <div
      onClick={() => {
        profileShow && setProfileShow(false);
      }}
    >
      <Header
        setToken={setToken}
        profileShow={profileShow}
        setProfileShow={setProfileShow}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

Frontend.propTypes = {
  setToken: PropTypes.func,
  isLoading: PropTypes.bool,
};
Frontend.defaultProps = {
  setToken: noop,
  isLoading: false,
};

export default Frontend;
