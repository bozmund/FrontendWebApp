//this is a home page where the user is able to select the conversion type, from
platform, to platform, and link to the song or playlist they want to convert.
//the user is also able to start the conversion by clicking the start conversion
button. //if user is not logged in it should show an error message or handle
incomplete selection. //if user is logged in and all the fields are filled out,
it should start the conversion. //if user is logged in and all the fields are
not filled out, it should show an error message or handle incomplete input.
//when a user clicks on the start conversion button, he should be redirected to
the conversion page.
<template>
  <div class="landing-page">
    <h1>Welcome {{ user }} to our Conversion Tool</h1>
    <p>On this website, you can choose what type of conversion you need.</p>
    <p>
      Just like how on another website, you can choose what playlists you can
      import from one music platform to another, you can also do that here to
      find songs in that other platform.
    </p>
    <v-card elevation="5">
      <v-card-title>Choose your conversion type:</v-card-title>
      <v-card-text>
        <v-select v-model="conversionType" :items="conversionTypes"></v-select>
      </v-card-text>
      <v-card-text class="conversion-selects">
        <div>
          <label>From:</label>
          <v-select
            v-model="fromPlatform"
            :items="conversionOptions"
          ></v-select>
        </div>
        <div>
          <label>To:</label>
          <v-select v-model="toPlatform" :items="conversionOptions"></v-select>
        </div>
        <div>
          <label>Link to the song or playlist:</label>
          <v-text-field
            v-model="link"
            placeholder="Paste your link here"
          ></v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" :disabled="!user" @click="startConversion"
          >Start Conversion</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import ConvertModel from "@/models/ConvertModel";
import { convertSong } from "@/client/index.js";

export default {
  props: {
    user: String,
  },
  data() {
    return {
      conversionTypes: ["Song", "Playlist"],
      conversionType: "",
      conversionOptions: ["Spotify", "Tidal"],
      fromPlatform: "",
      toPlatform: "",
      link: "",
    };
  },
  methods: {
    async startConversion() {
      if (
        this.conversionType &&
        this.fromPlatform &&
        this.toPlatform &&
        this.link
      ) {
        const response = await convertSong(
          new ConvertModel(
            this.conversionType,
            this.fromPlatform,
            this.toPlatform,
            this.link
          )
        );
        console.log(response);
      } else {
        // Show an error message or handle incomplete input
      }
    },
  },
};
</script>

<style scoped>
.landing-page {
  margin: 20px;
}
.conversion-selects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 10px;
  align-items: center;
}
.conversion-selects div {
  display: flex;
  flex-direction: column;
}
</style>
