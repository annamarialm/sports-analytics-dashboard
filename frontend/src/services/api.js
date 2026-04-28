import { users } from "../mock/data";

const USE_MOCK = true;

export async function getUserById(userId) {
  if (USE_MOCK) {
    const user = users.find(
      (item) => item.id === Number(userId)
    );

    return user;
  }

  // Later real backend call here
}