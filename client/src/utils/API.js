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
  },
  getDevs: function () {
    return axios.get("/api/devs")
  },
  getDev: function (id) {
    return axios.get("/api/devs/" + id)
  }
};
