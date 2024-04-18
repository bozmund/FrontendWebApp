// Function to generate a random string of a given length
const generateRandomString = (length) => {
	const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for (let i = 0; i < length; i++) {
	  const randomIndex = Math.floor(Math.random() * charset.length);
	  result += charset.charAt(randomIndex);
	}
	return result;
  };
  
  // Function to create a Code Verifier using PKCE specification
  const generateCodeVerifier = () => {
	const codeVerifierLength = 256; // You can adjust the length as needed
	return generateRandomString(codeVerifierLength);
  };
  
export { generateCodeVerifier };
  