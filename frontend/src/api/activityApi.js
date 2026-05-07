import axios from "axios";

import {
  API_URL,
  USE_MOCK,
} from "./config";

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