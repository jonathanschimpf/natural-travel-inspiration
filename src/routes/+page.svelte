<script>
	import { onMount } from 'svelte';
	import PhotoCard from '../components/PhotoCard.svelte';
	import { writable } from 'svelte/store';

	// PUBLIC ACCESS KEY FROM THE Unsplash COMPANY AND KEPT PRIVATEIN ENVIRONMENT VARIABLES
	const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
	// THIS STORE MAINTAINS A SET OF PHOTO IDs THAT HAVE BEEN SEEN BY THE IP
	const seenPhotos = writable(new Set());
	// Unsplash PHOTO IDs THAT ARE BLACKLISTED
	// BECAUSE THEY ARE NOT A GREAT
	// FIT FOR THIS PROJECT — WORK IN PROGRESS
	const blacklist = new Set([
		'UOkZT4JT8fw',
		'parczv2B-ZM',
		'xRr9Lz3xfYs',
		'uYoVf9I6ANI',
		'mmzuZhihp30',
		'jqgsM3B9Fpo',
		'tMzCrBkM99Y',
		'IicyiaPYGGI',
		'jAjvbh7vw9g',
		'6c5ZTHnUUzA',
		'OdBFUurPHjo',
		'PSFfI7vbS3c',
		'9JxubXPaidg',
		'uNliRqlmBdg',
		'jnJ89cuXMcs',
		'F6Da4r2x5to',
		'z8ct_Q3oCqM',
		'RwHv7LgeC7s',
		'2JwQoi-RBiI',
		'3W9buupDI2k',
		'10TSKDfW8X8',
		'TkrRvwxjb_8',
		'fsJB3KT2rj8',
		'bBiuSdck8tU',
		'h6zMgghzZr0',
		'7AcMUSYRZpU',
		'jin4W1HqgL4',
		'El-egS_h_N4',
		'MMJx78V7xS8',
		'h5eLbyHzAcE',
		'ITfHPUy0x9k',
		's0vFLLZzOrs',
		'v4e3JI7DDHI',
		'vngzm4P2BTs',
		'koy6FlCCy5s',
		'sx6n_hgSmOc',
		'9Z1KRIfpBTM',
		'JP23z_-dA74',
		'jt6QxZwSOCQ',
		'8mCMQSq41gQ',
		'Dqzsti6Fonc',
		'KhsuK_wq-o4',
		'rCFAY4WrbUY',
		'4rDCa5hBlCs',
		'hPxKmyCZ-Bs',
		'KMYCSLP8uiU',
		'jWv1ILisuSc',
		'OOE4xAnBhKo',
		'rleYWWVY4Pc',
		'GVnUVP8cs1o',
		'T8-kfC8W4b8',
		'yjEt-n0qUl8',
		'LNYdZutqsi0',
		'd2aXuZD2kUc',
		'OS0D-aJ54CY',
		'6ArTTluciuA',
		'6loxuv3aXkg',
		'XxvXRmsH860',
		'qPPWNeFVLFQ',
		'pmhoQj3Ce1E',
		'6-C0VRsagUw',
		'8SXaMMWCTGc',
		'h5wvMCdOV3w',
		'CoIqQVwEGY0',
		'I3jSS2YfmcU',
		'0uO6qhd6Bi8',
		'gofWd3XkKo0',
		'NliTYm_jD5o',
		'zPCj7SKoub8',
		'gvb84QdErNs',
		'-N_UwPdUs7E',
		'choc7LYd98I',
		'Tw_rTjWMuGo',
		'WgT_B4mN0BA',
		'yZNGVL_fWj8',
		'pT8mKX61STI',
		'NjT4O7WYmwk',
		'wQImoykAwGs',
		'cS6YoRIAK2w',
		'_EMkxLdko9k',
		'vzVGHfxZIZ8',
		'F5zoQfoWtbM',
		'U86FnrpRR0k',
		'fG4PYBDmAkI',
		'9Gs0qk9Z3WU',
		'h3ki3bbJWk0',
		'xjhgZCuvg3k',
		'fMIsAL72P3U',
		'5-jtsfuaLBw',
		'AnKC9klnyKk',
		'Ee0894MAyok',
		'gyIRjKPXupE',
		'jFCViYFYcus',
		'eOpewngf68w',
		'Rfflri94rs8',
		'Lh2qwkppkf8',
		'RdouF_LXaYI',
		'049M_crau5k',
		'IVbFRSEYGuA',
		'sNVE_h_7naU',
		'7KLa-xLbSXA',
		'poXhq_-eANA',
		'utoPXPPr5zc',
		'jCL98LGaeoE',
		'rFn64K0YQrI',
		'vpkCTrnV2eE',
		'JiphyElpixM',
		'ciHYaPb8lUA',
		'c1Jp-fo53U8',
		'WK4lhYGRIzw',
		'JWa5jZ1LkJY',
		'MPKFmy_Xc_A',
		'NEqEC7qa9FM',
		'vUNQaTtZeOo',
		'c4cWawGBFv8',
		'rckx2mE9rOw',
		'cCthPLHmrzI',
		'dhw3LSuWyks',
		'3U3Qegatt2o',
		'QsWG0kjPQRY',
		'42MaenKbPe0',
		'9K9ipjhDdks',
		'sFLVTqNzG2I',
		'7ne3hNnojvU',
		'j6dqEl13is4',
		'hpTH5b6mo2s',
		'19SC2oaVZW0',
		'u4fWwlBhHJ8',
		'ugnrXk1129g',
		'Yl9YFBtZFcQ',
		'SaWeuWtLQqE',
		'NP_GHS5Bb-s',
		'yu2Ay7LQmnY',
		'_ReQ6GSqSaM',
		'wxZBV8GiPlc',
		'1OtUkD_8svc',
		'PXXtq6bp6cs',
		'qN8AMtHZ2nY',
		'J2xHOsMNIn0',
		'SDoMyyylpnc',
		'SDoMyyylpnc'
	]);
	// HOLDS THE CURRENT PHOTO OBJECT
	let photo;
	// STORES VARIOUS ERROR MESSSAGES
	let error = '';
	// SEARCH TERM ENTERED BY THE USER!
	let searchTerm = '';

	// FETCHES A RANDOM PHOTO FROM THE Unsplash API
	// BASED ON the getRandomKeyword FUNCTION BELOW
	async function fetchPhoto(query) {
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

	const MAX_ATTEMPTS = 20; // TRY 20 TIMES TO FIND A NON-BLACKLISTED ID (PHOTO)
	const RETRY_DELAY = 1000; // WAIT1 SECOND BEFORE TRYING AGAIN

	async function getUniquePhoto() {
		let attempts = 0;
		let found = false;

		while (!found && attempts < MAX_ATTEMPTS) {
			attempts++;
			const randomKeyword = getRandomKeyword();
			const potentialPhoto = await fetchPhoto(randomKeyword);

			if (potentialPhoto && !blacklist.has(potentialPhoto.id)) {
				if (!$seenPhotos.has(potentialPhoto.id)) {
					photo = potentialPhoto;
					$seenPhotos.add(potentialPhoto.id);
					found = true;
				}
			} // This closing brace ends the outer if statement

			// WHILE LOOP WILL CONTINUE UNTIL NON BLACKLISTED ID IS FOUND
		}

		if (!found) {
			// ANOTHER ATTEMPT SCHEDULING
			setTimeout(getUniquePhoto, RETRY_DELAY);
		}
	}

	async function handleSearch() {
		if (searchTerm.trim()) {
			const searchPhoto = await fetchPhoto(searchTerm);
			if (searchPhoto && !$seenPhotos.has(searchPhoto.id) && !blacklist.has(searchPhoto.id)) {
				photo = searchPhoto;
				$seenPhotos.add(searchPhoto.id);
			}
			searchTerm = '';
		}
	}

	function getRandomKeyword() {
		const keywords = ['mountain', 'hike', 'vista', 'cliff', 'forest', 'river'];
		return keywords[Math.floor(Math.random() * keywords.length)];
	}

	onMount(async () => {
		let success = false;
		let attempts = 0;
		while (!success && attempts < MAX_ATTEMPTS) {
			attempts++;
			try {
				const initialPhoto = await fetchPhoto('nature');
				if (initialPhoto && !blacklist.has(initialPhoto.id)) {
					photo = initialPhoto;
					seenPhotos.update((set) => {
						set.add(initialPhoto.id);
						return set;
					});
					success = true;
				} else {
					//FETCH AGAIN AFTER A DELAY IF THE PHOTO WAS ON THE BLACKLIST
					await new Promise((r) => setTimeout(r, RETRY_DELAY));
				}
			} catch (e) {
				error = 'Whoops! Refresh your browser, please.';
				console.error(e);
			}
		}
		if (!success) {
			// IF ONLY BLACKLISTED PHOTOS ARE FOUND AFTER MANY ATTEMPTS DISPLAY A MESSAGE
			error = 'Please try again. Refresh your browser!';
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

<p class="click-below-message">
	More <span class="smaller-down-arrow"> ⬇ </span>
</p>

<button on:click={getUniquePhoto}>Random Natural Inspiration</button>

<p class="click-below-message-longer">
	<span class="smaller-down-arrow"> ⬇ </span>Search For A More Specific Random Image Below
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

	@media (max-width: 525px) {
		.pico-form {
			max-width: 400px !important;
		}
	}

	@media (max-width: 425px) {
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
		button {
			max-width: 250px !important;
		}
	}

	@media (max-width: 325px) {
		button {
			max-width: 200px !important;
			font-size: 12px !important;
		}
	}

	h1 {
		font-family: 'Futura', sans-serif;
		text-align: center;
		color: rgb(33, 33, 33);
		font-weight: 900 !important;
		margin-bottom: -10px;
	}

	.smaller-down-arrow {
		font-size: 8px;
	}

	.click-below-message {
		margin-top: -30px;
	}
	@media (max-width: 525px) {
		.click-below-message {
			font-size: 10px;
		}
	}

	@media (max-width: 525px) {
		.smaller-down-arrow {
			font-size: 8px;
		}
	}

	@media (max-width: 525px) {
		.click-below-message-longer {
			font-size: 11px;
		}
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

	button:hover {
		background-color: rgb(209, 209, 209);
		color: #000000;
		border-color: #000000;
	}

	/* RESET HOVER STYLES FOR
	 MOBILE DEVICES BECAUSE REASONS */
	@media (hover: none) {
		button:hover {
			background-color: #000000;
			color: #fff;
			border-color: transparent;
		}

		button:active {
			background-color: rgb(209, 209, 209);
			color: #000000;
			border-color: #000000;
		}
	}

	.pico-form {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		margin: 2em auto;
		max-width: 500px;
		font-size: 14px;
		padding-bottom: 5em;
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
