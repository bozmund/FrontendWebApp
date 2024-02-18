import axios from "axios";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

// Define your main function
async function convertSong(convertModel) {
  try {
    // Make a POST request to the server
    const response = await axios.get(
      `http://localhost:3001/api/v1/convert/Song/${convertModel.from}/${convertModel.to}/${convertModel.link}`
    );

    // Handle the response data
    return response.data;
  } catch (error) {
    // Handle any errors
    console.error(error);
  }
}

async function convertPlaylist(convertModel) {
  try {
    // Make a POST request to the server
    const response = await axios.post(
      `http://localhost:3001/api/v1/convert/Playlist/${convertModel.from}/${convertModel.to}/${convertModel.link}`,
      convertModel
    );

    return response.data;
  } catch (error) {
    // Handle any errors
    console.error(error);
  }
}

async function registerUser(registrationData) {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/register",
      registrationData
    );
    // Registration successful, handle the response
    return response.data;
    // TODO: Handle success response
  } catch (error) {
    // Registration failed, handle the error
    console.error(error);
    // TODO: Handle error response
  }
}

async function loginUser(loginData) {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/login",
      loginData
    );
    // Login successful, handle the response
    return response.data;
  } catch (error) {
    // Login failed, handle the error
    console.error(error);
  }
}

async function getUser() {
  try {
    const response = await axios.get("http://localhost:3001/api/v1/user");
    // Handle the response data
    return response.data;
  } catch (error) {
    // Handle any errors
    console.error(error);
  }
}

// Export the main function
export { convertSong, convertPlaylist, registerUser, loginUser, getUser };
