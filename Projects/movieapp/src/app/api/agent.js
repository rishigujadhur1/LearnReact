import axios from "axios";

const responseBody = (response) => response.data;
const requests = {
  get: (url, params) => axios.get(url, { params }).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
};

const Account = {
  login: (values) =>
    requests.post("https://localhost:5006/api/user/login", values),
  register: (values) =>
    requests.post("https://localhost:5006/api/user/register", values),
  currentUser: (values) =>
    requests.get("https://localhost:5006/api/user/currentUser", values),
};

export default Account;
