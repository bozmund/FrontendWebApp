<template>
  <router-view :user = "user"/>
</template>

<script setup>
  import { getUser } from "@/client";
</script>

<script>
  export default {
    name: "App",
    data() {
      return {
        user : null
      };
    },
    async created() {
      let response = await getUser();
      if (response.error) {
        this.$router.push("/login");
      }else{
        this.$router.push("/");
      }
      this.user = response.user;
    },
  };
</script>
