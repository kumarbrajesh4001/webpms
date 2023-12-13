import moment from "moment";

export const getCalender = () => {
  let daysInMonth = [];

  let monthDate = moment().startOf("month");

  for (let i = 0; i < monthDate.daysInMonth(); i++) {
    let newDay = monthDate.clone().add(i, "days");

    daysInMonth.push({ date: newDay.format("DD"), day: newDay.format("dd").toUpperCase() });
  }

  return daysInMonth;
};
