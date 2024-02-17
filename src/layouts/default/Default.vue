<template>
  <v-app>
    <default-bar :user = "user"/>

    <default-view :user = "user"/>
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>

<script>
  export default {
    props: {
      user: String,
    }
  }
</script>
