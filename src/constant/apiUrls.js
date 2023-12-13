export const API_URL = {
  LOGIN: "/login",
  JIRA_TIMESHEET: "/JiraTimesheet",
  TEAM_TIMESHEET: "/TeamTimesheet",
  USER_DETAIL: "/userdetail",
  LEAVE: "/Leave",
  USER_LIST: "/userlist",
  WFH: "/WFH",
  APPLY_LEAVE: " /leave/ApplyLeave",
};

export const getUserList = (page, limit) =>
  `${API_URL.USER_LIST}?limit=${limit}&pageNo=${page}`;
