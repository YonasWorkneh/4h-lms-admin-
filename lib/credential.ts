"use server";

import { cookies } from "next/headers";

export const getCredentials = () => {
  const access = cookies().get("access");
  const refresh = cookies().get("refresh");
  return { access, refresh };
};

export const setCredential = (data: { access?: string; refresh?: string }) => {
  const { access, refresh } = data;
  if (access) cookies().set("access", access);
  if (refresh) cookies().set("refresh", refresh);
};
