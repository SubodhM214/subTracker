export const BASE_URL = "http://localhost:5500";

export const API_PATHS = {
  AUTH: {
    SIGN_UP: "/api/v1/auth/sign-up",
    SIGN_IN: "/api/v1/auth/sign-in",
    SIGN_OUT: "/api/v1/auth/sign-out",
    GET_USER_INFO: "/api/v1/auth/getUser",
  },
  USER: {
    GET_USER: "/api/v1/users/getUser",
  },
  SUBSCRIPTION: {
    GET_ALL: (id) => `${BASE_URL}/api/v1/subscriptions/${id}`,
    GET_BY_ID: (id) => `${BASE_URL}/subscriptions/${id}`, // (GET with authorize)
    CREATE: `${BASE_URL}/subscriptions`, // (POST with authorize)
  },
};
