import { create } from "apisauce";
import { AxiosRequestConfig } from "axios";

import { Store } from "@root/src/application";

import { BASE_URL } from "./constants";
import { ErrorResponse } from "./error";

export const api = create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const authConfig = (): AxiosRequestConfig => {
  const auth = Store.store.stores.authStore;

  if (auth.loggedIn && auth.token) {
    return {
      headers: { "X-ORIGIN-SECRET": "MXcm6c8wNaEDbbf", Authorization: `Bearer ${auth.token}` },
    };
  }

  return {
    headers: {
      "X-ORIGIN-SECRET": "MXcm6c8wNaEDbbf",
    },
  };
};

export const get = async <T, P extends {}>(url: string, params?: P) =>
  await api.get<T, ErrorResponse>(url, params ?? {}, authConfig());
export const post = async <T, D extends any>(url: string, data?: D) =>
  await api.post<T, ErrorResponse>(url, data, authConfig());
export const put = async <T, D extends any>(url: string, data?: D) =>
  await api.put<T, ErrorResponse>(url, data, authConfig());
export const del = async <T, P extends {}>(url: string, params?: P) =>
  await api.delete<T, ErrorResponse>(url, params ?? {}, authConfig());
