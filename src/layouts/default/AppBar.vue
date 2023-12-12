<script setup>
import Login from "@/components/Login.vue";
</script>
<template>
  <v-app-bar flat :elevation="2">
    <v-app-bar-title> SpotifyToAnything </v-app-bar-title>
    <v-btn @click="showLoginDialog">Login</v-btn>

    <v-dialog v-model="loginDialog" max-width="500px">
      <v-card>
        <!-- Your login component goes here -->
        <login-component @closeDialog="closeLoginDialog" />
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      loginDialog: false,
    };
  },
  methods: {
    showLoginDialog() {
      this.loginDialog = true;
    },
    closeLoginDialog() {
      this.loginDialog = false;
    },
  },
  components: {
    "login-component": Login,
  },
};
</script>
