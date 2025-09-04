import { api } from "./API";

export const loginAdmin = async (username, password) => {
  const response = await api.post("/auth/login", {
    username,
    password,
  });

  return response.data;
};
