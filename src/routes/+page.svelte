<script>
	import { onMount } from 'svelte';
	import PhotoCard from '../components/PhotoCard.svelte';
	import { writable } from 'svelte/store';

	// EXTERNAL BLACKLISTED ID'S STORED IN THE JS MODULE FILE BELOW
	import { blacklist } from '../components/Blacklisted-IDs.js';

	// PUBLIC ACCESS KEY FROM THE Unsplash COMPANY AND KEPT PRIVATE IN ENVIRONMENT VARIABLES
	const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
	// THIS STORE MAINTAINS A SET OF PHOTO IDs THAT HAVE BEEN SEEN BY THE IP
	const seenPhotos = writable(new Set());

	
	// HOLDS THE CURRENT PHOTO OBJECT
	let photo;
	// STORES VARIOUS ERROR MESSSAGES
	let error = '';
	// SEARCH TERM ENTERED BY THE USER!
	let searchTerm = '';

	// FETCHES A RANDOM PHOTO FROM THE Unsplash API
	// BASED ON the getRandomKeyword FUNCTION BELOW ON LINE 281
	async function fetchPhoto(query) {
		// TRIM THE QUERY AND CHECK FOR SPACES (INDICATING A PHRASE SEARCH?)
		const trimmedQuery = query.trim();
		const isPhraseSearch = trimmedQuery.includes(' ');
		// ENCLOSE ENTIRE QUERY IN QUOTATIONS TO
		// HOPEFULLY ALLOW IT TO BE TREATED AS A PHRASE?
		const encodedQuery = isPhraseSearch
			? encodeURIComponent(`"${trimmedQuery}"`)
			: encodeURIComponent(trimmedQuery);

		// URL CONSTRUCT FOR API REQUEST
		const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=${encodedQuery}`;

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('Error fetching photo.');
			}
			const newPhoto = await response.json();
			return newPhoto;
		} catch (err) {
			error = 'Error fetching new photo.';
			console.error('Fetch error:', err);
			return null;
		}
	}

	// THIS FUNCTION IS TRIGGERED WHEN THE USER CLICKS THE 'Download' BUTTON UNDER THE IMAGE ON THIS '+page.svelte'.
	//  IT MAKES AN ADDITIONAL REQUEST TO THE Unsplash API FOR THE DOWNLOAD. IT THEN TRIGGERS THE BROWSER TO DOWNLOAD.
	async function onDownload(photo, filename) {
		try {
			const downloadLocationResponse = await fetch(
				`${photo.links.download_location}?client_id=${accessKey}`,
				{
					method: 'GET',
					headers: {
						Authorization: `Client-ID ${accessKey}`
					}
				}
			);

			if (downloadLocationResponse.ok) {
				const downloadLocationData = await downloadLocationResponse.json();
				const actualDownloadUrl = downloadLocationData.url;

				const imageResponse = await fetch(actualDownloadUrl);
				if (imageResponse.ok) {
					const blob = await imageResponse.blob();
					const downloadUrl = URL.createObjectURL(blob);
					const a = document.createElement('a');
					a.href = downloadUrl;
					a.download = filename;
					document.body.appendChild(a);
					a.click();
					document.body.removeChild(a);
					URL.revokeObjectURL(downloadUrl);
				} else {
					throw new Error('Failed to download the image from Unsplash');
				}
			} else {
				throw new Error('Unsplash download trigger failed');
			}
		} catch (error) {
			console.error('Download error:', error);
		}
	}

	const MAX_ATTEMPTS = 20; // TRY 20 TIMES TO FIND A NON-BLACKLISTED ID (PHOTO)
	const RETRY_DELAY = 1000; // WAIT 1 SECOND BEFORE TRYING AGAIN

	// THIS FUNCTION MAKES MULTIPLE ATTEMPTS TO FETCH
	// A UNIQUE PHOTO THAT IS NOT ON THE BLACKLIST ABOVE
	async function getUniquePhoto() {
		let attempts = 0;
		let found = false;

		while (!found && attempts < MAX_ATTEMPTS) {
			attempts++;
			const randomKeyword = getRandomKeyword();
			const potentialPhoto = await fetchPhoto(randomKeyword);

			if (
				potentialPhoto &&
				!blacklist.has(potentialPhoto.id) &&
				potentialPhoto.location &&
				potentialPhoto.location.name
			) {
				if (!$seenPhotos.has(potentialPhoto.id)) {
					photo = potentialPhoto;
					$seenPhotos.add(potentialPhoto.id);
					found = true;
				}
			}
		}

		if (!found) {
			setTimeout(getUniquePhoto, RETRY_DELAY);
		}
	}

	// HANDLES THE SEARCH FORM SUBMISSION,
	// FETCHING A PHOTOGRAPH BASED ON THE SEARCH TERM ENTERED BY THE USER
	async function handleSearch() {
		if (searchTerm.trim()) {
			// Log the search term when the search is triggered
			console.log('Searching for:', searchTerm);
			const searchPhoto = await fetchPhoto(searchTerm);
			if (searchPhoto && !$seenPhotos.has(searchPhoto.id) && !blacklist.has(searchPhoto.id)) {
				photo = searchPhoto;
				$seenPhotos.add(searchPhoto.id);
			}
			searchTerm = ''; // RESET searchTerm AFTER SEARCH?
		}
	}

	// RETURNS ONE OF THE RANDOM KEYWORDS BELOW FROM THE ARRAY
	// I'VE ENTERED BELOW THAT ARE THE BACKBONE OF CONTENT FOR THIS 'Natural Travel Inspiration' PROJECT
	function getRandomKeyword() {
		const keywords = ['mountain', 'hike', 'vista', 'cliff', 'forest', 'river'];
		return keywords[Math.floor(Math.random() * keywords.length)];
	}
	// LIFECYCLE HOOK THAT RUNS WHEN THE COMPONENT IS INITIALLY RENDERED
	onMount(async () => {
		let success = false;
		let attempts = 0;
		while (!success && attempts < MAX_ATTEMPTS) {
			attempts++;
			try {
				const initialPhoto = await fetchPhoto('nature');
				if (
					initialPhoto &&
					!blacklist.has(initialPhoto.id) &&
					initialPhoto.location &&
					initialPhoto.location.name
				) {
					photo = initialPhoto;
					seenPhotos.update((set) => {
						set.add(initialPhoto.id);
						return set;
					});
					success = true;
				} else {
					await new Promise((r) => setTimeout(r, RETRY_DELAY));
				}
			} catch (e) {
				error = 'Whoops! Refresh your browser, please.';
				console.error(e);
			}
		}
		if (!success) {
			error = 'Please try again. Refresh your browser!';
		}
	});
</script>

<!-- HTML + DYNAMIC CONTENT COMPONENT + PICO.CSS LIGHTWEIGHT FRAMEWORK (INSTEAD OF BOOTSTRAP ALWAYS) -->
<h1>Natural Travel Inspiration ⛰️</h1>

<button class="random-natural-button" on:click={getUniquePhoto}>Random Natural Inspiration</button>

<p class="click-below-message-longer">
	<span class="smaller-down-arrow"> ⬇ </span>Search For A More Specific Random Image Below<br />
	Single Word Searches Work Best With This API — You Could Always "Google" It.
</p>

<form on:submit|preventDefault={handleSearch} class="pico-form">
	<input type="search" id="search-input" bind:value={searchTerm} placeholder="" />
	<button type="submit">Search</button>
</form>

<div class="image-container-on-page">
	{#if error}
		<p>{error}</p>
	{:else}
		<PhotoCard {photo} {onDownload} />
		<!-- <div class="placeholder">
			<img src="assets/fetching-image-element-placeholder.png" alt="Placeholder" />
		</div> -->
		{#if !photo}
			<p class="searching-for-inspiration">🔍 Searching for inspiration...</p>
		{/if}
	{/if}
</div>

<style>
	.image-container-on-page {
		position: relative;
	}

	.searching-for-inspiration {
		font-family: 'Futura', sans-serif;
		font-weight: bolder;
		color: #777777;
		transition: color 0.1s ease-in-out;
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: -25em;
	}

	.random-natural-button {
		width: 225px;
	}

	h1 {
		font-family: 'Futura', sans-serif;
		text-align: center;
		color: #3a3a3a;
		font-weight: 900 !important;
		margin-bottom: 5px !important;
	}

	.smaller-down-arrow {
		font-size: 8px;
	}

	.click-below-message-longer {
		margin-top: 20px;
		margin-bottom: 0;
		padding: 0;
	}

	p {
		padding-top: 1em;
		font-family: 'Futura', sans-serif;
		text-align: center;
		color: #3a3a3a;
		font-size: 12px;
	}

	button {
		max-width: 300px;
		width: 100%;
		margin: 0.15rem auto;
		margin-top: 20px;
		margin-bottom: 10px;
		display: flex; /* FLEX TO CENTER SEARCH BUTTON TEXT  */
		align-items: center; /* BUTTON TEXT CENTERED VERTICALLY */
		justify-content: center; /* BUTTON TEXT CENTERED HORIZONTALLY */
		padding: 0.5em 1em;
		background-color: #3a3a3a;
		color: #fff;
		border: 2px solid transparent;
		border-radius: 10px;
		font-size: 1rem;
		cursor: pointer;
		font-size: 14px;
	}

	button:hover {
		background-color: rgb(209, 209, 209);
		color: #3a3a3a;
		border-color: #3a3a3a;
	}

	.pico-form {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.25rem;
		margin: 0.25em auto;
		max-width: 500px;
		font-size: 14px;
		padding-bottom: 1em;
	}

	.pico-form input[type='search'],
	.pico-form button {
		flex: 1;
		height: 50px;
		box-sizing: border-box;
		margin: 0;
		padding: 1em 1em;
		border-radius: 10px;
		outline: none;
		border: 2px solid #3a3a3a;
		font-size: 14px;
	}

	.pico-form input[type='search'] {
		background-image: none;
		margin-right: 0.5rem;
		background-color: #535353;
		font-size: 14px;
		color: white;
	}

	.pico-form button {
		margin-left: 0.5rem;
	}

	.pico-form input[type='search']:focus,
	.pico-form button:focus {
		border-color: rgb(65, 65, 65);
		font-size: 14px;
	}

	.pico-form input[type='search']:invalid {
		border: 2px solid #3a3a3a !important;
		outline: 2px solid #3a3a3a !important;
		border-color: rgb(65, 65, 65);
		box-shadow: none;
		font-size: 14px;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		border: 2px solid #3a3a3a !important;
		outline: 2px solid #3a3a3a !important;
		-webkit-box-shadow: 0 0 0 90px rgb(84, 84, 84) inset !important;
		-webkit-text-fill-color: white !important;
		font-family: inherit !important;
	}

	input:-webkit-autofill {
		border: 2px solid #3a3a3a !important;
		outline: 2px solid #3a3a3a !important;
		transition: background-color 5000s ease-in-out 0s;
	}

	/*  Mobile Media Query's */

	/* RESET HOVER STYLES FOR
	 MOBILE DEVICES BECAUSE REASONS */
	@media (hover: none) {
		button:hover {
			background-color: #3a3a3a;
			color: #fff;
			border-color: transparent;
		}

		button:active {
			background-color: rgb(209, 209, 209);
			color: #3a3a3a;
			border-color: #3a3a3a;
		}
	}

	@media (max-width: 525px) {
		.click-below-message-longer,
		.smaller-down-arrow {
			font-size: 11px;
		}
	}

	@media (max-width: 440px) {
		.click-below-message-longer,
		.smaller-down-arrow {
			font-size: 8px;
		}
	}

	@media (max-width: 500px) {
		h1 {
			font-size: 6vw;
		}
	}

	@media (max-width: 525px) {
		.pico-form {
			max-width: 400px !important;
		}
	}

	@media (max-width: 440px) {
		.pico-form {
			max-width: 300px !important;
		}
	}

	@media (max-width: 325px) {
		.pico-form {
			max-width: 200px !important;
		}
	}

	@media (max-width: 425px) {
		.random-natural-button {
			max-width: 250px !important;
		}
	}

	@media (max-width: 325px) {
		.random-natural-button {
			max-width: 200px !important;
			font-size: 12px !important;
		}
	}
</style>
