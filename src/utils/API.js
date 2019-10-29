import axios from "axios";

export default {
  getUsers: function () {
    return axios.get("/api/devsearch");
  },
  getUser: function (username) {
    return axios.get("/api/userpage/" + username);
  },
  saveUser: function (userData) {
    return axios.post("/api/signup", userData);
  }
};
