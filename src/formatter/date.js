import moment from "moment";
import { MMM_DD_YYYY } from "../constant/datepicker";

export const getExDateTime = (days) =>
  new Date(moment().add(days, "days").toDate());

export const startDateMonth = (number) =>
  moment().add(number, "months").startOf("month").format(MMM_DD_YYYY);

export const endDateMonth = (number) =>
  moment().add(number, "months").endOf("month").format(MMM_DD_YYYY);

export const getSelectStartDate = (selectDate) =>
  selectDate
    ? moment(selectDate).format(MMM_DD_YYYY)
    : moment().startOf("month").format(MMM_DD_YYYY);

export const getSelectEndDate = (selectDate) =>
  selectDate
    ? moment(selectDate).format(MMM_DD_YYYY)
    : moment().endOf("month").format(MMM_DD_YYYY);


