<script>
	import { onMount } from 'svelte';
	import PhotoCard from '../components/PhotoCard.svelte';
	import { writable } from 'svelte/store';

	const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
	const seenPhotos = writable(new Set());
	const requestTimes = writable([]);

	let photo;
	let error = '';
	let searchTerm = '';

	const maxRequestsPerHour = 50;
	const oneHour = 3600 * 1000;

	function canMakeRequest() {
		const now = Date.now();
		$requestTimes = $requestTimes.filter((time) => now - time < oneHour);
		return $requestTimes.length < maxRequestsPerHour;
	}

	function recordRequestTime() {
		$requestTimes.push(Date.now());
	}

	async function fetchPhoto(query) {
		if (!canMakeRequest()) {
			error = 'Rate limit reached. Please wait.';
			return null;
		}

		// Trim whitespace and check if the term includes spaces
		const trimmedQuery = query.trim();
		const isPhraseSearch = trimmedQuery.includes(' ');
		const encodedQuery = isPhraseSearch
			? encodeURIComponent(`"${trimmedQuery}"`)
			: encodeURIComponent(trimmedQuery);

		const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=${encodedQuery}`;
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

	// Function to retrieve a unique photo
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

	// Function to handle search based on the searchTerm
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

	// Function to get a random keyword from an array
	function getRandomKeyword() {
		const keywords = ['mountain', 'hike', 'vista', 'cliff', 'forest', 'river'];
		return keywords[Math.floor(Math.random() * keywords.length)];
	}

	onMount(async () => {
		try {
			const initialPhoto = await fetchPhoto('nature');
			if (initialPhoto) {
				photo = initialPhoto;
			} else {
				error = 'Could not load initial photo.';
			}
		} catch (e) {
			error = 'There was an error during the initial photo fetch.';
			console.error(e);
		}
	});
</script>

<h1>Natural Travel Inspiration ⛰️</h1>
{#if error}
	<p>{error}</p>
{:else if photo}
	<PhotoCard {photo} {onDownload} />
{:else}
	<p>Loading...</p>
{/if}

<button on:click={getUniquePhoto}>Random Natural Inspiration</button>

<p>
	<span class="specific-smaller-down-arrow"> ⬇ </span>Search For A More Specific Random Image Below
</p>

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

	.specific-smaller-down-arrow {
		font-size: 11px;
	}

	p {
		padding-top: 1em;
		font-family: 'Futura', sans-serif;
		text-align: center;
		color: rgb(33, 33, 33);
		font-size: 12px;
	}

	button {
		max-width: 300px;
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
		background-color: rgb(209, 209, 209);
		color: #000 !important;
		border: 2px solid #000;
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
		flex: 1;
		height: 50px;
		box-sizing: border-box;
		margin: 0;
		padding: 1em 1em;
		border-radius: 4px;
		border: 1px solid #202020;
		outline: none;
		border: 2px solid #000;
		font-size: 14px;
	}

	.pico-form input[type='search'] {
		background-image: none;
		margin-right: 0.5rem;
		background-color: #535353;
		font-size: 14px;
	}

	.pico-form button {
		margin-left: 0.5rem;
	}

	.pico-form input[type='search']:focus,
	.pico-form button:focus {
		border-color: rgb(65, 65, 65);
		outline: 2px solid #000;
		font-size: 14px;
	}

	.pico-form input[type='search']:invalid {
		border: 2px solid #000 !important;
		outline: 2px solid #000 !important;
		border-color: rgb(65, 65, 65);
		box-shadow: none;
		font-size: 14px;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		border: 2px solid #000 !important;
		outline: 2px solid #000 !important;
		-webkit-box-shadow: 0 0 0 90px rgb(84, 84, 84) inset !important;
		font-weight: normal !important;
	}

	input:-webkit-autofill {
		border: 2px solid #000 !important;
		outline: 2px solid #000 !important;
		transition: background-color 5000s ease-in-out 0s;
		font-weight: normal !important;
	}
</style>
