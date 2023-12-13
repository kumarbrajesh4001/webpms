import STORAGE_KEY from "../constant/storageKey";
import { getExDateTime } from "../formatter/date";

export const setCookiesToken = (token, exdays) => {
  document.cookie = `${STORAGE_KEY.TOKEN}=${token}; expires=${getExDateTime(
    exdays
  )}; Path=/;`;
};

export const deleteCookies = () => {
  document.cookie = `${STORAGE_KEY.TOKEN}=;Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

export const getCookiesToken = () => document.cookie.split("=")[1];
