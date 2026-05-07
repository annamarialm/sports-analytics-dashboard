import axios from "axios";
import { users } from "../mock/data";

import {
  API_URL,
  USE_MOCK,
} from "./config";

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
      throw new Error(
        "Invalid credentials"
      );
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

  return response.data;
}