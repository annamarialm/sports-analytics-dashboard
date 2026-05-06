import axios from "axios";
import { users } from "../mock/data";

const USE_MOCK = false;

const API_URL = "http://localhost:8000/api";

export async function loginUser(
  username,
  password
) {
  if (USE_MOCK) {
    const user = users.find(
      (item) =>
        item.username === username &&
        item.password === password
    );

    if (!user) {
      throw new Error("Invalid credentials");
    }

    return {
      token: "mock-token",
      userId: user.id,
    };
  }

  const response = await axios.post(
    `${API_URL}/login`,
    {
      username,
      password,
    }
  );

  console.log(response.data);
  
  return response.data;
}

export async function getUserInfo(token) {
  if (USE_MOCK) {
    return users[0];
  }

  const response = await axios.get(
    `${API_URL}/user-info`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

export async function getUserActivity(
  token,
  startWeek,
  endWeek
) {
  if (USE_MOCK) {
    return [];
  }

  const response = await axios.get(
    `${API_URL}/user-activity`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        startWeek,
        endWeek,
      },
    }
  );

  return response.data;
}