import axios from "axios";
import { users } from "../mock/data";

import {
  API_URL,
  USE_MOCK,
} from "./config";

export async function getUserInfo(
  token
) {
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