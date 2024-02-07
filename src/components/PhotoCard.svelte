<script>
	export let photo;
	export let onDownload;

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
</script>

<div class="photo-card">
	<div class="image-container">
		<!-- Image display -->
		<img src={photo.urls.regular} alt={photo.alt_description || 'Unsplash Photo'} />
	</div>

	<!-- Photo information section -->
	<div class="photo-information">
		<!-- Location container -->
		{#if photo.location.name}
			<p class="location">{photo.location.name}</p>
		{:else}
			<!-- Unknown location display -->
			<div class="unknown-location">
				<p class="location">Location Unknown</p>
				<p class="ask-photographer">
					<span class="smaller-down-arrow">⬇</span> Ask The Photographer Below
					<span class="smaller-down-arrow">⬇</span>
				</p>
			</div>
		{/if}

		<!-- Caption with credit links -->
		<div class="caption">
			<a
				class="credit-links"
				href={photo.user.links.html}
				target="_blank"
				rel="noopener noreferrer"
			>
				Photo by {photo.user.name}
			</a>
			<span class="credit-on"> on </span>
			<a class="credit-links" href="https://unsplash.com" target="_blank" rel="noopener noreferrer"
				>Unsplash</a
			>
		</div>
	</div>

	<!-- Download button -->
	<button class="download-button" on:click={triggerDownload}>Download</button>
</div>

<style>
	.photo-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 90vw;
		margin: 1rem auto;
		text-align: center;
		position: relative;
		border-radius: 2%;
		overflow: hidden;
	}

	.image-container {
		min-height: 500px; /* Adjust as needed */
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.image-container img {
		max-width: 100%;
		max-height: 460px; /* Adjust as needed */
		object-fit: cover;
	}

	/* Adjustments for photo information section */
	.photo-information {
		padding: 1rem; /* Adjust padding as needed */
		width: 100%; /* Ensure it takes full width */
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

	.location-container,
	.caption {
		margin: 5px 0;
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
	.credit-on {
		font-size: 10px;
		color: rgb(135, 135, 135);
	}

	.credit-links:hover {
		text-decoration: none;
		color: rgb(69, 69, 69);
		cursor: pointer !important;
	}

	.download-button {
		background-color: rgb(209, 209, 209);
		font-size: 10px;
		color: rgb(135, 135, 135);
		border: none;
		padding: 0.5em 1em;
		cursor: pointer;
		max-width: 150px;
		width: 100%;
		text-align: center;
		outline: 1px solid rgb(135, 135, 135);
	}

	.download-button:focus {
		outline: 1px solid rgb(135, 135, 135);
	}

	.download-button:hover {
		background-color: #e0e0e0;
	}
</style>
