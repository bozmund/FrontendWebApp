<script setup>
</script>

<template>
  <div>
    <h1>Welcome to Our Landing Page</h1>
    <form @submit.prevent="submitForm">
      <label for="link">Enter a Link:</label>
      <input type="text" id="link" v-model="link" />
      <button type="submit">Submit</button>
    </form>
    <form @click="submitForm">
      <button>Submit</button>
    </form>
  </div>
</template>


<script>
export default {
data() {
  return {
    link: '',
  };
},
  methods: {
    submitForm() {
      console.log('yes')
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
