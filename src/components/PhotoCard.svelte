<script>
	export let photo;
	export let onDownload;
	let loaded = false; // Tracks if the photo is loaded

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
</script>

<div class="photo-card {loaded ? 'loaded' : ''}">
	<div class="image-container">
		{#if photo && photo.urls && photo.urls.regular}
			<img src={photo.urls.regular} alt={photo.alt_description || 'Unsplash Photo'} />
		{/if}
	</div>
	{#if photo}
		<div class="photo-information">
			{#if photo.location && photo.location.name}
				<p class="location">{photo.location.name}</p>
			{/if}
			<div class="caption">
				<span class="credit-photo-by">Photo by </span>
				<a
					class="credit-links"
					href={createAttributionLink(photo.user.links.html)}
					target="_blank"
					rel="noopener noreferrer"
				>
					{photo.user.name}
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
		<button class="download-button" on:click={triggerDownload}>Download</button>
	{/if}
</div>

<style>
	.photo-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 95vw;
		margin: auto;
		text-align: center;
		position: relative;
		border-radius: 2%;
		overflow: hidden;
	}

	.image-container {
		position: relative;
		min-height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.image-container img {
		max-height: 460px;
		object-fit: cover;
		border-radius: 25px;
		position: relative;
		z-index: 1;
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
		color: black;
		font-size: 15px;
		margin: 0;
		margin-top: 20px;
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
		border-radius: 2px !important;
		font-size: 8px;
		color: rgb(135, 135, 135);
		border: none;
		padding: 0.5em 1em;
		cursor: pointer;
		max-width: 45px;
		height: 12px;
		width: 100%;
		outline: 1px solid rgb(135, 135, 135);
	}

	.download-button:focus {
		outline: 1px solid rgb(135, 135, 135);
	}

	.download-button:hover {
		background-color: #e0e0e0;
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