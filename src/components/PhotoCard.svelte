<script>
	import { fade } from 'svelte/transition';
	export let photo;
	export let onDownload;
	let loaded = false; // TRACKS IF THE PHOTO IS LOADED

	const utmSource = 'Natural Travel Inspiration';
	const utmMedium = 'referral';

	function triggerDownload() {
		console.log('Triggering download for photo:', photo);
		if (onDownload && typeof onDownload === 'function') {
			const filename = `unsplash_image_${photo.id}.jpg`;
			console.log('Filename:', filename);
			onDownload(photo, filename);
		} else {
			console.error('Download function not provided!');
		}
	}

	function createAttributionLink(url) {
		return `${url}?utm_source=${utmSource}&utm_medium=${utmMedium}`;
	}

	// When the photo object changes, check if it's loaded
	$: if (photo && photo.urls && photo.urls.regular) {
		loaded = true;
	}
	// REMOVING OUTLINE ON THE DOWNLOAD BUTTON

	let buttonElement;

	// FUNCTION TO REMOVE FOCUS FROM BUTTON
	// IMMEDIATELY AFTER CLICK/PRESS
	function removeFocus() {
		if (buttonElement) {
			buttonElement.blur();
		}
	}

	let key = 0;

	// WHEN THE PHOTO OBJECT CHANGES, CHECK IF IT IS LOADED
	// ..AND UPDATE THE KEY — TO TRIGGER THE FADE-IN.TRANSITION
	$: if (photo && photo.urls && photo.urls.regular) {
		loaded = true;
		key = photo.id; // THIS CAN BE ANY UNIQUE VALUE THAT CHANGES WITH EACH PHOTO
	}
</script>

<div class="photo-card {loaded ? 'loaded' : ''}" in:fade={{ delay: 500, duration: 500 }}>
	<div class="image-container">
		{#if photo && photo.urls && photo.urls.regular}
			{#each [photo] as { id, urls, alt_description, user } (key)}
				<!-- Keyed each block -->
				<div class="photo-card {loaded ? 'loaded' : ''}">
					<div class="image-container">
						<img
							class="the-actual-fetched-image"
							in:fade={{ delay: 250, duration: 500 }}
							src={urls.regular}
							alt={alt_description || 'Unsplash Photo'}
						/>
					</div>
					<div class="photo-information" in:fade={{ delay: 500, duration: 500 }}>
						{#if photo.location && photo.location.name}
							<p class="location">{photo.location.name}</p>
						{/if}
						<div class="caption">
							<span class="credit-photo-by">Photo by </span>
							<a
								class="credit-links"
								href={createAttributionLink(user.links.html)}
								target="_blank"
								rel="noopener noreferrer"
							>
								{user.name}
							</a>
							<span class="credit-on"> on </span>
							<a
								class="credit-links"
								href={createAttributionLink('https://unsplash.com')}
								target="_blank"
								rel="noopener noreferrer"
							>
								Unsplash
							</a>
						</div>
					</div>
					<button
						class="download-button"
						on:click={triggerDownload}
						bind:this={buttonElement}
						on:mouseup={removeFocus}
						in:fade={{ delay: 500, duration: 500 }}
					>
						Download
					</button>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style>
	.photo-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		position: relative;
		overflow: hidden;
		max-width: 98.5vw;
		margin: auto;
		padding: 2vh;
		border-radius: 34px;
	}

	.image-container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 34px;
	}

	.the-actual-fetched-image {
		max-height: 60vh;
		width: 100%;
		object-fit: contain;
		border-radius: 34px;
	}

	@media (max-width: 1024px) {
		.the-actual-fetched-image {
			margin-top: 1vh;
			max-height: 45vh;
			object-fit: contain;
			border-radius: 34px;
		}
	}

	.photo-information,
	.caption,
	.location,
	.credit-links,
	.credit-on,
	.credit-photo-by,
	.download-button {
		transition: opacity 0.5s ease-out;
		opacity: 0;
	}

	.photo-card.loaded .photo-information,
	.photo-card.loaded .caption,
	.photo-card.loaded .location,
	.photo-card.loaded .credit-links,
	.photo-card.loaded .credit-on,
	.photo-card.loaded .credit-photo-by,
	.photo-card.loaded .download-button {
		opacity: 1;
	}

	.location {
		color: #3a3a3a;
		font-size: 15px;
		margin: 0;
		margin-top: 15px;
	}

	.credit-links {
		font-size: 10px;
		color: rgb(135, 135, 135);
	}

	a,
	.credit-on,
	.credit-photo-by {
		font-size: 10px;
		color: rgb(135, 135, 135);
	}

	.credit-links:hover,
	.credit-links:focus {
		text-decoration: none;
		color: rgb(69, 69, 69);
		cursor: pointer;
	}

	.download-button {
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
		background-color: rgb(209, 209, 209);
		border-radius: 5px;
		font-size: 7px;
		color: rgb(129, 129, 129);
		border: none;
		padding: 0.1em 0.1em;
		padding-top: 0.3em;
		cursor: pointer;
		max-width: 40px;
		height: 16px;
		width: 100%;
		outline: 1px solid rgb(180, 180, 180);
	}

	.download-button:focus {
		outline: 2px solid whitesmoke;
	}

	.download-button:hover {
		background-color: #e2e2e291;
		border-color: #3a3a3a;
	}

	/* RESET HOVER STYLES FOR
	 MOBILE DEVICES BECAUSE REASONS */
	@media (hover: none) {
		.download-button:hover {
			background-color: rgb(209, 209, 209);
			color: rgb(135, 135, 135);
			border-color: transparent;
		}

		.download-button:active {
			background-color: rgb(209, 209, 209);
			color: rgb(135, 135, 135);
			border-color: transparent;
		}
	}
</style>