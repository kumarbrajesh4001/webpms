import * as Yup from "yup";

export const validationSchemaLogin = Yup.object({
  userName: Yup.string()
    .min(2, "Username  length 2 to 30 long.")
    .max(30, "Username length 2 to 30 long.")
    .required("Enter username"),

  password: Yup.string()
    .min(6, "Password length  6 to 18 long")
    .max(18, "Password length  6 to 18 long")
    .required("Enter password"),
});

export const validationSchemaforgotPassword = Yup.object({
  username: Yup.string()
    .min(2, "Username  length 2 to 30 long.")
    .max(30, "Username length 2 to 30 long.")
    .required("Enter username"),

  new_password: Yup.string()
    .min(6, "Password length  6 to 18 long")
    .max(18, "Password length  6 to 18 long")
    .required("Enter password"),

  confirm_password: Yup.string()
    .required("Enter confirm password")
    .oneOf([Yup.ref("new_password"), null], "Password must match"),
});

export const validationSchemaChangePassword = Yup.object({
  old_password: Yup.string()
    .min(6, "Password length  6 to 18 long")
    .max(18, "Password length  6 to 18 long")
    .required("Enter password"),
  new_password: Yup.string()
    .min(6, "Password length  6 to 18 long")
    .max(18, "Password length  6 to 18 long")
    .required("Enter password"),
  confirm_password: Yup.string()
    .required("Enter confirm password")
    .oneOf([Yup.ref("new_password"), null], "Password must match"),
});
