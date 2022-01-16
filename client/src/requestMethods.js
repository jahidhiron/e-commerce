import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTJjNjU5ZmRhNGViNDYzYTZjNmFkNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjMyMTY4MCwiZXhwIjoxNjQyNDA4MDgwfQ.oY3dJT-lGSMFH7jw4VpYshQ631MX2Mi3yLKKuuKkHzE";

export const pusblicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
