import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTJjNjU5ZmRhNGViNDYzYTZjNmFkNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjM5NDIwMiwiZXhwIjoxNjQyNDgwNjAyfQ.cJwsoHsH7Ny6ux8PDR6QzEcgkgPLg_b_VqkGSOJ0aQo";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

export const userPayment = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
    Authorization: `Bearer ${process.env.REACT_APP_STRIPE_KEY}`,
  },
});
