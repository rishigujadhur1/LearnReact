import axios from "axios";

const responseBody = (response) => response.data;
const requests = {
  get: (url, params) => axios.get(url, { params }).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
};

const Account = {
  login: (values) => requests.post("user/login", values),
  register: (values) => requests.post("user/register", values),
  currentUser: (values) => requests.get("user/currentUser", values),
};

export default Account;
