"use server";

import { cookies } from "next/headers";

const baseUrl = process.env.BASE_API_URL;
console.log(baseUrl);

export const login = async (credential: {
  email: string;
  password: string;
}) => {
  console.log("cred", credential);
  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    });
    const data = await response.json();
    if (data.error || data.message) throw new Error("Something went wrong");
    cookies().set("access_token", data.token);
    return data;
  } catch (err) {
    console.error(err.message);
    return { error: err.message };
  }
};

export const signup = async () => {};
