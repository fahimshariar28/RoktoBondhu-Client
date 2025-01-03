"use server";

export const userLogin = async (data) => {
  try {
    const response = await fetch(` ${process.env.BACKEND_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    const userInfo = await response.json();
    return userInfo;
  } catch (error) {
    console.log(error);
  }
};
