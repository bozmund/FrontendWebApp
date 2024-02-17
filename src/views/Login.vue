<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="login-container">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card>
          <v-card-title class="text-center">
            <h1>Login</h1>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleLogin">
              <v-text-field
                v-model="email"
                label="Email"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-btn type="submit" color="primary">Login</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <router-link to="/register">Don't have an account? Register</router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { loginUser } from "@/client";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      const loginData = {
        email: this.email,
        password: this.password,
      };
      const response = await loginUser(loginData);
      localStorage.setItem("token", response.token);
      location.reload(); // Reload the page
    },
  },
};
</script>

<style scoped>
.login-container {
  margin-top: 100px;
}
</style>
