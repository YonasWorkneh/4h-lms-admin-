import { setCredential } from "../credential";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const login = async (credential: {
  email: string;
  password: string;
}) => {
  try {
    console.log(baseUrl);
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    });
    const data = await response.json();
    if (data.error || data.message) throw new Error("Something went wrong");
    setCredential({ access: data.token });
    return data;
  } catch (err) {
    console.error(err.message);
    return { error: err.message };
  }
};

export const signup = async () => {};
