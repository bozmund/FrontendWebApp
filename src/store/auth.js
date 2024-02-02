import { defineStore } from "pinia";
import axios from "axios"; // Assuming you're using axios for HTTP requests

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    user: null,
  }),
  actions: {
    async login({ username, password }) {
      const response = await axios.post("/api/login", { username, password });
      this.token = response.data.token;
      this.user = response.data.user;
      axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
    },
    async register({ username, password }) {
      const response = await axios.post("/api/register", {
        username,
        password,
      });
      this.token = response.data.token;
      this.user = response.data.user;
      axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
    },
    logout() {
      this.token = null;
      this.user = null;
      delete axios.defaults.headers.common["Authorization"];
    },
  },
});
