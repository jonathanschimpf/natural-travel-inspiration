<script>
	import { onMount } from 'svelte';
	import PhotoCard from '../components/PhotoCard.svelte';
	import { writable } from 'svelte/store';
  
	const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
	const seenPhotos = writable(new Set());
	const requestTimes = writable([]);
  
	export let photo;
	let error = '';
	let searchTerm = '';
  
	// Rate limit parameters
	const maxRequestsPerHour = 50;
	const oneHour = 3600 * 1000; // milliseconds
  
	// Function to check if we can make a request
	function canMakeRequest() {
	  const now = Date.now();
	  $requestTimes = $requestTimes.filter(time => now - time < oneHour);
	  return $requestTimes.length < maxRequestsPerHour;
	}
  
	// Function to record a request time
	function recordRequestTime() {
	  $requestTimes.push(Date.now());
	}
  
	async function fetchPhoto(query) {
	  if (!canMakeRequest()) {
		error = 'Rate limit reached. Please wait.';
		return null;
	  }
  
	  const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=${encodeURIComponent(query)}`;
	  try {
		const response = await fetch(url);
		if (!response.ok) {
		  throw new Error('Error fetching photo.');
		}
		recordRequestTime();
		const newPhoto = await response.json();
		return newPhoto;
	  } catch (err) {
		error = 'Error fetching new photo.';
		return null;
	  }
	}
  
	const keywords = ['mountain', 'hike', 'vista', 'cliff', 'forest', 'river'];
  
	function getRandomKeyword() {
	  return keywords[Math.floor(Math.random() * keywords.length)];
	}
  
	async function getUniquePhoto() {
	  let uniquePhoto = null;
	  while (!uniquePhoto) {
		const randomKeyword = getRandomKeyword();
		const potentialPhoto = await fetchPhoto(randomKeyword);
		if (potentialPhoto && !$seenPhotos.has(potentialPhoto.id)) {
		  uniquePhoto = potentialPhoto;
		  $seenPhotos.add(potentialPhoto.id);
		}
	  }
	  photo = uniquePhoto;
	}
  
	async function handleSearch() {
	  if (searchTerm.trim()) {
		const searchPhoto = await fetchPhoto(searchTerm);
		if (searchPhoto && !$seenPhotos.has(searchPhoto.id)) {
		  photo = searchPhoto;
		  $seenPhotos.add(searchPhoto.id);
		}
		searchTerm = '';
	  }
	}
  
	onMount(() => {
	  getUniquePhoto();
	});
  </script>
  
  <h1>Natural Travel Inspiration ⛰️</h1>
  {#if error}
	<p>{error}</p>
  {:else if photo}
	<PhotoCard {photo} />
  {:else}
	<p>Loading...</p>
  {/if}
  
  <button on:click={getUniquePhoto}>Random Natural Inspiration</button>
  
  <form on:submit|preventDefault={handleSearch} class="pico-form">
	<input type="search" id="search-input" bind:value={searchTerm} placeholder="" />
	<button type="submit">Search</button>
  </form>
  

<style>
	/* FIRST THINGS FIRST: Mobile Media Query's */

	@media (max-width: 500px) {
		h1 {
			font-size: 6vw;
		}
	}

	@media (max-width: 500px) {
		.pico-form {
			max-width: 300px !important;
		}
	}

	h1 {
		font-family: 'Futura', sans-serif;
		text-align: center;
		color: rgb(33, 33, 33);
	}

	button {
		max-width: 250px;
		width: 100%;
		margin: 1em auto;
		display: flex; /* FLEX TO CENTER SEARCH BUTTON TEXT  */
		align-items: center; /* BUTTON TEXT CENTERED VERTICALLY */
		justify-content: center; /* BUTTON TEXT CENTERED HORIZONTALLY */
		padding: 0.5em 1em;
		background-color: #000000;
		color: #fff;
		border: 2px solid transparent;
		border-radius: 4px;
		font-size: 1rem;
		cursor: pointer;
		font-size: 14px;
		
	}

	button:focus {
		background-color: #1f1f1f;
		color: #fff;
	}

	button:hover {
		background-color: rgb(209, 209, 209);
		color: #000000;
		border-color: #000000;
	}

	.pico-form {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		margin: 2em auto;
		max-width: 500px;
		font-size: 14px;
	}

	.pico-form input[type='search'],
	.pico-form button {
		flex: 1; /* Allows the items to grow and take up equal space */
		height: 50px; /* Set a fixed height for alignment */
		box-sizing: border-box; /* Ensures padding is included in the width and height */
		margin: 0; /* Resets any default margins */
		padding: 1em 1em; /* Adjust padding as needed */
		border-radius: 4px; /* Keeps the design consistent */
		border: 1px solid #202020; /* Example border, adjust as needed */
		outline: none; /* Removes the default focus outline */
		border: 2px solid #000;
		font-size: 14px;
	}

	.pico-form input[type='search'] {
		background-image: none;
		/* padding-left: 3em; */
		margin-right: 0.5rem; /* Adds space between the input and the button */
		background-color: #535353; /* Light grey background */
		font-size: 14px;
	}

	.pico-form button {
		margin-left: 0.5rem; /* Adds space between the input and the button */
	}

	/* Add styles for when the input or button is focused */
	.pico-form input[type='search']:focus,
	.pico-form button:focus {
		border-color: rgb(65, 65, 65);
		outline: 2px solid #000;
		font-size: 14px;
	}

	/* To remove validation styles */
	.pico-form input[type='search']:invalid {
		border: 2px solid #000;
		box-shadow: none;
		font-size: 14px;
	}
	/* Change the background color and text color of the input during autofill */
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		-webkit-box-shadow: 0 0 0 90px rgb(84, 84, 84) inset !important;
		-webkit-text-fill-color: rgb(187, 198, 206) !important;
		font-weight: normal !important;
	}

	/* Transition for the autofill */
	input:-webkit-autofill {
		transition: background-color 5000s ease-in-out 0s;
		font-weight: normal !important;
	}
</style>
