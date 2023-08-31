import axios from "axios";

let headers = {
  "X-localization": "en",
  Accept: "application/json",
  "Content-Type": "application/json",
};

if (localStorage.getItem("token")) {
  headers["Authorization"] = `Bearer ${localStorage.getItem("token") || null}`;
}
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const {
      status,
      config: { url },
      data,
    } = error.response;

    console.log(data, "error.response");
    if (
      status === 500 &&
      url !== "login" &&
      data?.message?.includes("Unauthenticated.")
    ) {
      localStorage.removeItem("token");
      window.location.pathname = "/sign-in";
    }

    return Promise.reject(error);
  },
);
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
axios.defaults.headers.common = headers;

export default axios;
