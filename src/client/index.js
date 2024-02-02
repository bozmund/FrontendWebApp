import axios from "axios";

// Define your main function
async function convertSong(convertModel) {
  try {
    // Make a POST request to the server
    const response = await axios.get(
      `http://localhost:3001/api/v1/convert/${convertModel.conversionType}/${convertModel.from}/${convertModel.to}/${convertModel.link}`
    );

    // Handle the response data
    console.log(response.data);
  } catch (error) {
    // Handle any errors
    console.error(error);
  }
}

async function convertPlaylist(convertModel) {
  try {
    // Make a POST request to the server
    const response = await axios.post(
      `http://localhost:3001/api/v1/convertPlaylist`,
      convertModel
    );

    // Handle the response data
    console.log(response.data);
  } catch (error) {
    // Handle any errors
    console.error(error);
  }
}

// Export the main function
export { convertSong };
