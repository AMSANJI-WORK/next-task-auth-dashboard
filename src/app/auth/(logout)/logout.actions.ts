"use server";
import { LogoutState } from "@/app/(application)/components/header/HeaderLogoutButton";

export const handleLogout = async (
  state: LogoutState,
  data: FormData
): Promise<LogoutState> => {
  return { message: "Logout Succesfull !", success: true };
};
