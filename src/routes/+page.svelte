<script>
	import { onMount } from 'svelte';
	import PhotoCard from '../components/PhotoCard.svelte';
	import { writable } from 'svelte/store';

	// PUBLIC ACCESS KEY FROM THE Unsplash COMPANY AND KEPT PRIVATE IN ENVIRONMENT VARIABLES
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
		'SDoMyyylpnc',
		'3Kv48NS4WUU',
		'3Ltn2aWVNcM',
		'vgazHbc0XWg',
		'8UVZHt8AUoQ',
		'Ed_DchxFfrU',
		'uilVSfUGnWk',
		'dSxAggoqPAk',
		'F_moKY91WYc',
		'2ZjJ7T6EeOg',
		'mLXmJb3In8Q',
		'T69h1_YfR-w',
		'kIR55P1eXJI',
		'mFbrMEVKCkc',
		'UFnHt94r91w',
		'pt7QzB4ZLWw',
		'6xh7H5tWj9c',
		'bnUXhIyf0i0',
		'WJkc3xZjSXw',
		'5S6_c_yCIwE',
		'd4feocYfzAM',
		'nTRDnDdDYk8',
		'Rr3B0LH7W3k',
		'7NBO76G5JsE',
		'0D8_tYHIy0o',
		'lsGWd4KgCD4',
		'JiuVoQd-ZLk',
		'qzgN45hseN0',
		'ZeNABWS-k4Q',
		'Dm-qxdynoEc',
		'__0Yg6-lvP8',
		'qd-dvtbS45Q',
		'4ooRozrZdLM',
		'wKjIeK4QSnk',
		'4QWR5geRC9I',
		'PjjMG6VyHs4',
		'TMNyU2MFTGw',
		'lIat5Z-N3JA',
		'QMnYC8WVFM8',
		'SBiVq9eWEtQ',
		'uaO9cd5BQPc',
		'sp-p7uuT0tw',
		'sp-p7uuT0tw',
		'Yh6K2eTr_FY',
		'GzcI_rMNclY',
		'CtxRK04XMKs',
		'mppuJZUzhI0',
		'AqXqL_V9qpM',
		'6csuZQ9oZcI',
		'TRhGEGdw-YY',
		'NQSWvyVRIJk',
		'FMWXjhIkmO0',
		'VHUbeZMH6Yg',
		'uJnUhGtI_Pk',
		'hry9juw-x5k',
		'50bzI1F6urA',
		'J2jtcRbiL-4',
		'zK049OFP4uI',
		'enXOyujvTXQ',
		'z_HDrTQxNEI',
		'z_HDrTQxNEI',
		'zXVk8mNl9M0',
		'a0nbRUHimZw',
		'a0nbRUHimZw',
		'S9miGKjxmb4',
		'uyNMxCFYMvo',
		'gzMvo6cR6J0',
		'b4l3Mn4pRKk',
		'D4TooCIEyF4',
		'2JuKK2ticlk',
		'buF62ewDLcQ',
		'Fz77XHwFYg0',
		'WVEBqXRGcy8',
		'xY_6ZENqcfo',
		'TBl1-EKYFjs',
		'KYTT8L5JLDs',
		'XAmgFP_GvVA',
		'5VDFTgpwV2g',
		'whDrFMucHkc',
		'G8rRItjrwkA',
		'HkNKkRoiGk8',
		'igX2deuD9lc',
		'xg8z_KhSorQ',
		'5G2G59V6IXg',
		'LMq1gYdygxo',
		'Qdi8UvGd1Ww',
		'-BZc9Ee1qo0',
		'RkBTPqPEGDo',
		'RhjVGxILcqE',
		'UnKqaCtnHwE',
		'9YubwxAIpw0',
		'Kvc5x3Bvfd4',
		'jwTvCQQJXh0',
		'0Kyp7uO-3RQ',
		'3okHTqD9yUA',
		'i9Q9bc-WgfE',
		'a47qPRbHx7g',
		'3LwMyv3FiUE',
		'KRAazAqquaQ',
		'OsMWWAL0saQ',
		'a2zdgkDzFo8',
		'9pvTSsNV2T4',
		'hfLsVDvnKwY',
		'-KdfxdUEVv0',
		'XxDJ6bgq7Pw',
		'P3DxOe-OJGA',
		'-IZ2sgQKIhM',
		'uzwTVzXqZcg',
		'HgQOh4s_M-U',
		'ap6baZcbAho',
		'T7s_TnKO-dk',
		'FO7bKvgETgQ',
		'NWleDEFmYDg',
		'gcOMSDzWvR8',
		'Ke-ENe3ByiQ',
		'4-KqFyHKRdo',
		'oj8XzDDpK40',
		'e6f8IaRQY7M',
		'hnw3Al47-KE',
		'ipH70OUZDrk',
		'1awcLzy32Dg',
		'FAn-NWH8Bzw',
		'd6kSvT2xZQo',
		'DuiPYwz3CBA',
		'gd3t5Dtbwkw',
		'JoH60FhTp50',
		'SvdVrpLiocU',
		'gMqBIvJfP0E',
		'htNpsGOMQL8',
		'2WBVLTKNo1k',
		'hom1seYgTQQ',
		'cfKC0UOZHJo',
		'eGD69I3ODC4',
		'02a4DSekRVg',
		'G_1V58E0TyM',
		'5P91SF0zNsI',
		'NrN5Rvl89Lo',
		'cOMpDHi3fsM',
		'8jQFXXSTvbw',
		'tSZZ2NBj1eE',
		'-rSka4Bw-EU',
		'TsMXK2W9hV0',
		'J4aLKW3T0FE',
		'ntA_kfsJQjw',
		'REKXJ7JhwiI',
		'SqBK8g4g_ug',
		'zAQoZwidDbs',
		'Jzery_MafWQ',
		'H8vhhepiiaU',
		'A0P3qTZcjJw',
		'RaEFRWLy9ME',
		'KT3WlrL_bsg',
		'RtTxZBbJe6A',
		'baTtO8UODDo',
		'3MNzGlQM7qs',
		'yrBbY1ljUYc',
		'zqIOvV-D3JQ',
		'IbLZjKcelpM',
		'RsRpw1rvkJs',
		'sTVYoJHXKv8',
		'hji142JdgRw',
		'iiLQN9P6Irc',
		'ZRdSZeVKBaE',
		'Ceuh97A6OYM',
		'HG5QX-GXV5A',
		'DD1fSz2HF1s',
		'AHWrFYvRBuk',
		'8Ogfqvw15Rg',
		'8bsvwFWVcvE',
		'VS1uBhwf8a4',
		'tNDvFkxkBHo',
		'ofuctQNpnk4',
		'C7jBZEGciCU',
		'6YmzwamGzCg',
		'Sl1GrFYrQ1E',
		'IfTKequW2Mk',
		'ln5drpv_ImI',
		'JjYhagSxnOU',
		'KMn4VEeEPR8',
		'jeIRRRu6dbE',
		'L_uyuJzJAxc',
		'qb14VmiCjBA',
		'uOtPQtKI_A8',
		'HDd-NQ_AMNQ',
		'cbPh8sfpP70',
		'50HS3AzJsvQ',
		'iuqmGmst5Po',
		'jp0Qlyv389g',
		'1rQs3661lq4',
		'lsoogGC_5dg',
		'VyqvPLMSZrc',
		'kGSapVfg8Kw',
		'C6gxT-N56ns',
		'eCqA-col90Q',
		'4igCpD-Lnfg',
		'1sim8ojvCbE',
		'8H5kNkYmJYQ',
		'4r_tHA3gsUY',
		'Kl8S7XbWbzM',
		'_3DI_vx2ygg',
		'mBQIfKlvowM',
		'b_wN4QemTzU',
		'BXasVMRGsuo',
		'odxB5oIG_iA',
		'pBgnT4KH8d4',
		's7fVceSaiiw',
		'EwKXn5CapA4',
		'BvijLrkWcHA',
		'KHrwWI5rdo8',
		'S_IV6KqGeso',
		'PmPZkRQYTyI',
		'zhqD0tw1peA',
		'jUCQRQeRs3k',
		'dGmUuyZo_c4',
		'qWJcROZIeec',
		'2tvkoVK8prc',
		'pRRSpbCFUOM',
		'TkBhnAUm74M',
		'VV2_XVEjg5w',
		'oWRVjFQIwAY',
		'3nQ1BT_rC3U',
		'm6FGop1tliQ',
		'upldea-3F4w',
		'bIybKPVJW8M',
		'2cwEJy-0hfw',
		'lX9NstRMiDU',
		'741MfdrVr_I',
		'cf2QWjRd4IE',
		'y1qOT82fd8k',
		'D9gWibH5_kY',
		'Eek6SLvyNYU',
		'lsDJyu_uJhw',
		'uCqu7KVacG8',
		'W-CuqaebiNY',
		'PT4xBct05I0',
		'rVbl6qgDPa8',
		'jp0Qlyv389g'
	]);
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
	const RETRY_DELAY = 1000; // WAIT1 SECOND BEFORE TRYING AGAIN

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
	<span class="smaller-down-arrow"> ⬇ </span>Search For A More Specific Random Image Below<br/>
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
	/* .placeholder {
		display: block;
		z-index: 1;
	} */
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
		margin-top: 25px;
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
		font-weight: normal !important;
	}

	input:-webkit-autofill {
		border: 2px solid #3a3a3a !important;
		outline: 2px solid #3a3a3a !important;
		transition: background-color 5000s ease-in-out 0s;
		font-weight: normal !important;
	}


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

	/*  Mobile Media Query's */

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
