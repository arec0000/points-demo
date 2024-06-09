import axios, { CreateAxiosDefaults } from "axios";
import { getContentType } from "./api.helper";

const axiosOptions: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: getContentType(),
  withCredentials: true,
};

export const instance = axios.create(axiosOptions);
