import axios from "axios";

export default {
  signin: function (userInfo) {
    return axios.post("/api/user/signin", userInfo)
  },
  signup: function (userInfo) {
    return axios.post("api/user/signup", userInfo)
  },
  getUser: function (userID) {
    return axios.get("api/users/:id", userID)
  }
};
