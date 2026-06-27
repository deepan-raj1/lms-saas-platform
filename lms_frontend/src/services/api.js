import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (
//       token &&
//       !config.url.includes("users/login/")
//   ) {
//       config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// API.interceptors.request.use((config) => {

//     const token = localStorage.getItem("token");

//     // Public endpoints
//     const publicUrls = [
//         "users/login/",
//         "users/register/",
//         "courses/",
//     ];

//     const isPublic = publicUrls.some(url =>
//         config.url.startsWith(url)
//     );

//     if (token && !isPublic) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
// });

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    const publicUrls = [
        "users/login/",
        "users/register/",
    ];

    const isPublic =
        publicUrls.some(url => config.url.startsWith(url)) ||

        // Public Course List
        config.url === "courses/" ||

        // Public Course Detail
        /^courses\/\d+\/$/.test(config.url);

    if (token && !isPublic) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});


API.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem("refresh");

        const res = await axios.post(
          "http://127.0.0.1:8000/api/users/token/refresh/",
          {
            refresh,
          }
        );

        localStorage.setItem("token", res.data.access);

        originalRequest.headers.Authorization =
          `Bearer ${res.data.access}`;

        return API(originalRequest);

      } catch (err) {

        localStorage.clear();
        window.location.href = "/login";

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default API;