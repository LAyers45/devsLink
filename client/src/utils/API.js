import axios from "axios";

export default {
  signin: function (userInfo) {
    return axios.post("/api/user/signin", userInfo)
  },
  signup: function (userInfo) {
    return axios.post("api/user/signup", userInfo)
  },
  updateInfo: function (id) {
    return axios.put("api/user/" + id)
  }
};
