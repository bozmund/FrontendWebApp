<template>
  <v-card class="pa-5" outlined>
    <v-card-title class="headline">{{ formType }}</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="username"
          label="Username"
          required
          outlined
          class="mb-4"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          required
          outlined
          class="mb-4"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="submitForm">{{ formType }}</v-btn>
      <v-btn text @click="switchFormType">
        Switch to {{ formType === "Login" ? "Register" : "Login" }}
      </v-btn>
      <v-btn text @click="closeDialog">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      formType: "Login", // Default form type
    };
  },
  methods: {
    submitForm() {
      if (this.formType === "Login") {
        // Handle login
      } else {
        // Handle registration
      }
    },
    switchFormType() {
      this.formType = this.formType === "Login" ? "Register" : "Login";
    },
    closeDialog() {
      // Handle closing the dialog
    },
  },
};
</script>

<style scoped>
.v-card {
  max-width: 400px;
  margin: auto;
}
</style>
