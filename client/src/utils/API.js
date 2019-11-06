import axios from "axios";

export default {
  getUsers: function () {
    return axios.get("/api/devsearch");
  },
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  }
};
