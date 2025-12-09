"use server";
import { getServerSession } from "next-auth";
import { AUTH_OPTIONS } from "./auth";

export const sessionHelper = async () => {
  const sessionData = await getServerSession(AUTH_OPTIONS);
  if (sessionData) {
    return sessionData;
  }
  return null;
};
