"use server";

import { API_STATUS } from "@/app/(application)/(http)/http.constant";
import { FormState } from "./components/container/Container";
import { User } from "@/app/dashboard/model/users.model";
import { ApiResponse } from "@/app/(application)/(http)/http.model";
import { handleHttpError } from "@/app/(application)/(http)/http.error.middleware";

export const handleLogin = async (
  state: FormState,
  data: FormData
): Promise<FormState> => {
  const url = new URL("/api", process.env.NEXT_PUBLIC_API_URL);
  url.searchParams.append("noinfo", "true");
  url.searchParams.append("nat", "us");
  const response = await fetch(url.toString());
  // @ts-ignore
  if (response.status === API_STATUS.SUCCESS) return handleSuccess(response);
  return {
    success: false,
    data: null,
    message: (await handleHttpError(response)).error,
  };
};

const handleSuccess = async (response: Response) => {
  const res = (await response.json()) as ApiResponse<User>;
  // remove hash and dangerous info from user api
  const users = res.results.map(({ login: { username, uuid }, ...item }) => ({
    ...item,
    login: { username, uuid },
  }));
  // extract User from result
  const [data] = users;
  return {
    success: true,
    data,
    message: "Authorization Has been Successfull !",
  };
};
