import instance from "./config";

const signup = (user) => {
  return instance.post(`/signup`, user);
};
const login = (user) => {
  return instance.post(`/login`, user);
};
export { signup, login };
