<script>
	export let photo;
	export let onDownload;
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
</script>

<div class="photo-card">
	<div class="image-container">
		<img src={photo.urls.regular} alt={photo.alt_description || 'Unsplash Photo'} />
	</div>
	<div class="photo-information">
		{#if photo.location.name}
			<p class="location">{photo.location.name}</p>
		{:else}
			<div class="unknown-location">
				<p class="location ask-photographer">
					Location Unknown — <span class="smaller-down-arrow"> ⬇ </span>Ask The Photographer Below
				</p>
			</div>
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
</div>

<style>
	.photo-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 90vw;
		margin: auto;
		text-align: center;
		position: relative;
		border-radius: 2%;
		overflow: hidden;
		height: 600px;
	}

	.image-container {
		height: 500px; 
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.image-container img {
		max-width: 100%;
		max-height: 460px; 
		object-fit: cover;
		border-radius: 15px !important;
	}

	
	.photo-information {
		padding: 1rem; 
		width: 100%; 
	}

	.photo-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 90vw;
		margin: 1rem auto;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.photo-card img {
		width: auto;
		max-width: 100%;
		max-height: 460px;
		object-fit: cover;
		margin: auto;
		border-radius: 2%;
	}

	.photo-information {
		color: white;
		padding: 10px;
		text-align: center;
	}

	.unknown-location {
		text-align: center;
	}

	.caption {
		text-align: center;
		font-weight: 500;
	}

	.location {
		color: black;
		font-size: 15px;
		margin: 0;
		margin-top: -20px;
	}

	.ask-photographer {
		font-size: 0.75rem;
		margin: 0;
		color: black;
	}

	.smaller-down-arrow {
		font-size: 9px;
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
		cursor: pointer !important;
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
