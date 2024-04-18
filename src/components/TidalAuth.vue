<template>
	<div>
		<button id="login">Login</button>
	</div>
</template>

<script>
import * as auth from 'https://unpkg.com/@tidal-music/auth/dist';

export default {
	mounted() {
		this.initializeAuth();
	},
	methods: {
		async initializeAuth() {
			const clientId = 'bnOztz49XynohdJA';
			const redirectUri = 'http://localhost:3000/';
			await auth.init({
				clientId,
				credentialsStorageKey: 'key',
				clientUniqueKey: 'foo',
			});

			document.querySelector('#login').addEventListener('click', async () => {
				const loginUrl = await auth.initializeLogin({
					redirectUri,
				});
				window.open(loginUrl, '_self');
			});

			if (window.location.search.length > 0) {
				await auth.finalizeLogin(window.location.search);
				window.location.replace('/');
			}

			const credentials = await auth.credentialsProvider.getCredentials();

			console.log(credentials);
		},
	},
};
</script>

<style>
/* Add any custom styles here */
</style>