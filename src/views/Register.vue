<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="text-center">
            <h1>Register</h1>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                v-model="username"
                label="Username"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-btn type="submit" color="primary">Register</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <router-link to="/login">Already have an account? Login</router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { registerUser } from "@/client";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      // Send registration data to the server
      const registrationData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      if(await registerUser(registrationData)) {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
