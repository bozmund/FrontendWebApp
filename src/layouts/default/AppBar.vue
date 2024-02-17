<template>
  <v-app-bar flat :elevation="2">
    <v-app-bar-title>
      <router-link v-if="user" to="/" class="custom-link">
        <span class="custom-title">SpotifyToAnything</span>
      </router-link>
    </v-app-bar-title>
    <v-btn v-if="!user" to="/login">Login</v-btn>
    <span class="spacing"></span>
    <v-btn v-if="!user" to="/register">Register</v-btn>
    <v-btn v-else to="/profile" >Hello {{ user }}</v-btn>
    <v-btn v-if="user" @click="logout">Logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("token");
      location.reload(); // Reload the page
    },
  },
  props: {
    user: String,
  }
};
</script>

<style scoped>
.custom-title {
  font-weight: bold;
}

.spacing {
  margin-right: 8px;
}
</style>
