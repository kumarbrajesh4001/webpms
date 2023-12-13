import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import HeadingLogo from "../../components/heading_logo";
import { validationSchemaforgotPassword } from "../../schmas";

const initialValues = {
  username: "",
  new_password: "",
  confirm_password: "",
};

function ForgotPassword() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: validationSchemaforgotPassword,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  const [isShowNewPassword, setIsShowNewPassword] = useState(true);
  const [isShowConfirmtPassword, setIsShowConfirmtPassword] = useState(true);

  return (
    <div className="full-view-height bg-img d-flex align-items-center">
      <div className="container shadow letter-space py-md-5 py-0 background-FFFFFF">
        <div className="row">
          <HeadingLogo />
          <div className="col-12 col-md-6 d-flex justify-content-center ms-md-0 ms-2">
            <form className="background-2E3192 rounded  px-5 py-4">
              <div className="mx-1">
                <div className="heading-1-small c-font-height color-FFFFFF">
                  FORGOT PASSWORD
                </div>
                <label
                  htmlFor="password"
                  className="heading-4 color-FFFFFF d-block mt-3"
                >
                  Username
                </label>
                <FormControl focused={false}>
                  <OutlinedInput
                    sx={{
                      width: "16rem",
                      border: "1px solid white",
                      input: { color: "white", fontSize: "0.94rem" },
                    }}
                    type="text"
                    size="small"
                    name="username"
                    placeholder="Enter Your Username"
                    id="password"
                    value={values.username}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </FormControl>
                <div className="error-msg">
                  {touched.username && errors.username && errors.username}
                </div>
                <label
                  htmlFor="new_password"
                  className={`heading-4 color-FFFFFF d-block ${
                    (!touched.username && "mt-3") ||
                    (!errors.username && "mt-3")
                  }`}
                >
                  New Password
                </label>
                <FormControl focused={false}>
                  <OutlinedInput
                    sx={{
                      width: "16rem",
                      border: "1px solid white",
                      input: { color: "white", fontSize: "0.94rem" },
                    }}
                    type={isShowNewPassword ? "password" : "text"}
                    size="small"
                    placeholder="New Password"
                    id="new_password"
                    name="new_password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <IconButton
                        className="text-light"
                        edge="end"
                        onClick={() => {
                          setIsShowNewPassword(!isShowNewPassword);
                        }}
                      >
                        {isShowNewPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    }
                  />
                </FormControl>
                <div className={`error-msg `}>
                  {touched.new_password &&
                    errors.new_password &&
                    errors.new_password}
                </div>

                <label
                  htmlFor="confirm_password"
                  className={`heading-4 color-FFFFFF d-block ${
                    (!touched.new_password && "mt-3") ||
                    (!errors.new_password && "mt-3")
                  }`}
                >
                  Confirm Password
                </label>
                <FormControl focused={false}>
                  <OutlinedInput
                    sx={{
                      width: "16rem",
                      border: "1px solid white",
                      input: { color: "white", fontSize: "0.94rem" },
                    }}
                    type={isShowConfirmtPassword ? "password" : "text"}
                    size="small"
                    placeholder="Confirm Password"
                    id="confirm_password"
                    name="confirm_password"
                    value={values.confirm_password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    endAdornment={
                      <IconButton
                        className="text-light"
                        edge="end"
                        onClick={() => {
                          setIsShowConfirmtPassword(!isShowConfirmtPassword);
                        }}
                      >
                        {isShowConfirmtPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    }
                  />
                </FormControl>
                <div className="error-msg">
                  {touched.confirm_password &&
                    errors.confirm_password &&
                    errors.confirm_password}
                </div>

                <Button
                  variant="light"
                  size="sm"
                  className={`col-12 border-radius mb-2 ${
                    (!touched.confirm_password && "mt-5") ||
                    (!errors.confirm_password ? "mt-5" : "mt-4")
                  }`}
                  onClick={handleSubmit}
                >
                  <span className="color-2E3192">Submit</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
