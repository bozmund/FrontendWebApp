<template>
  <v-main>
    <router-view :user ="user"/>
  </v-main>
</template>

<script>
  export default {
    props: {
      user: String,
    }
  }
</script>
