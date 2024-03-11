<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import PhotoCard from '../components/PhotoCard.svelte';

	// EXTERNAL BLACKLISTED ID'S STORED IN THE JS MODULE FILE PATH BELOW
	import { blacklist } from '../components/Blacklisted-IDs.js';

	// PUBLIC ACCESS KEY FROM THE Unsplash COMPANY AND KEPT PRIVATE IN ENVIRONMENT VARIABLES
	const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

	// HOLDS THE CURRENT PHOTO OBJECT
	let photo;
	// STORES VARIOUS ERROR MESSSAGES
	let error = '';

	// FETCHES A RANDOM PHOTO FROM THE Unsplash API
	// BASED ON the getRandomKeyword FUNCTION BELOW ON LINE 125
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

			// CHECK IF PHOTO LACKS A LOCATION OR IS BLACKLISTED
			if (blacklist.has(newPhoto.id) || !newPhoto.location || !newPhoto.location.name) {
				console.log('Photo blacklisted or without location, fetching another one.');
				return fetchPhoto(query); // RECURSIVE CALL FOR A NEW PHOTO IF NEEDED
			}

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

	// THIS FUNCTION MAKES MULTIPLE ATTEMPTS TO FETCH
	// A UNIQUE PHOTO THAT IS NOT ON THE BLACKLIST ABOVE
	async function getUniquePhoto() {
		const randomKeyword = getRandomKeyword();
		photo = await fetchPhoto(randomKeyword);
		if (!photo) {
			error = 'Could not fetch a new photo. Please try again.';
		}
	}

	// RETURNS ONE OF THE RANDOM KEYWORDS BELOW FROM THE ARRAY
	// I'VE ENTERED BELOW THAT ARE THE BACKBONE OF CONTENT FOR THIS 'Natural Travel Inspiration' PROJECT
	function getRandomKeyword() {
		const keywords = [
			'mountain',
			'hike',
			'vista',
			'cliff',
			'forest',
			'rainforest',
			'river',
			'natural',
			'island',
			'desert',
			'canyon',
			'glacier',
			'volcano',
			'waterfall',
			'valley',
			'fjord',
			'plateau',
			'geyser',
			'dune'
		];
		return keywords[Math.floor(Math.random() * keywords.length)];
	}
	// LIFECYCLE HOOK THAT RUNS WHEN THE COMPONENT IS INITIALLY RENDERED

	onMount(() => {
		getUniquePhoto();
	});
	// REMOVING OUTLINE ON THE '+Random Natural Inspiration' BUTTON

	let buttonElement;

	// FUNCTION TO REMOVE FOCUS FROM BUTTON
	// IMMEDIATELY AFTER CLICK/PRESS
	function removeFocus() {
		if (buttonElement) {
			buttonElement.blur();
		}
	}
</script>
{#if error}
  <p>{error}</p>
{:else if photo}
  <div in:fade={{ delay: 500, duration: 1000 }}>
    <h1>Natural Travel Inspiration ⛰️</h1>
    <button
      class="random-natural-button"
      on:click={getUniquePhoto}
      bind:this={buttonElement}
      on:mouseup={removeFocus}
    >+Random Natural Inspiration</button>
    <PhotoCard {photo} {onDownload} />
  </div>
{:else}
  <p class="searching-for-inspiration">🔍 Searching For Inspiration...</p>
{/if}

<style>

	/* '+Random Natural Inspiration' BUTTON STYLING */
	.random-natural-button:focus {
		outline: 2px solid whitesmoke;
	}

	.random-natural-button {
		width: 225px;
	}

	button {
		max-width: 300px;
		width: 100%;
		margin: 0.15rem auto;
		margin-top: 20px;
		margin-bottom: 30px;
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

	.searching-for-inspiration {
		font-family: 'Futura', sans-serif;
		font-weight: bolder;
		color: #777777;
		transition: color 0.1s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: -25em;
	}

	p {
		padding-top: 1em;
		font-family: 'Futura', sans-serif;
		text-align: center;
		color: #3a3a3a;
		font-size: 12px;
	}

	h1 {
		font-family: 'Futura', sans-serif;
		text-align: center;
		color: #3a3a3a;
		font-weight: 900 !important;
		margin-bottom: 5px !important;
	}

	/*  MOBILE MEDIA QUERY'S */

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

	@media (max-width: 500px) {
		h1 {
			font-size: 6vw;
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
