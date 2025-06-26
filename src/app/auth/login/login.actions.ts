"use server";

import { API_STATUS } from "@/app/(application)/(http)/http.constant";
import { FormState } from "./components/container/Container";
import { User } from "@/app/(dashboard)/model/users.model";
import { ApiResponse } from "@/app/(application)/(http)/http.model";
import { handleHttpError } from "@/app/(application)/(http)/http.error.middleware";

export const handleLogin = async (
  state: FormState,
  data: FormData
): Promise<FormState> => {
  const url = new URL("/", process.env.NEXT_PUBLIC_API_URL);
  url.searchParams.append("exc", "noinfo");
  url.searchParams.append("nat", "us");
  const response = await fetch(url.toString());
  if (response.status === API_STATUS.SUCCESS) {
    const res = (await response.json()) as ApiResponse<User>;
    return {
      success: false,
      data: res,
      message: "Authorization Has been Successfull !",
    };
  }
  return {
    success: false,
    data: null,
    message: (await handleHttpError(response)).error,
  };
};
