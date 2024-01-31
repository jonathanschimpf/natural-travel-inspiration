<script>
	export let photo;
</script>

<div class="photo-card">
	<img src={photo.urls.regular} alt={photo.alt_description || 'Photo'} />
	<div class="location-container">
		{#if photo.location?.title || photo.location?.name}
			<p class="location">{photo.location.title || photo.location.name}</p>
		{:else}
			<div class="unknown-location">
				<p class="location">Location Unknown</p>
				<p class="ask-photographer">
					<span class="smaller-down-arrow">⬇️</span> Ask The Photographer Below <span class="smaller-down-arrow">⬇️</span>
				</p>
			</div>
		{/if}
	</div>
	<div class="caption">
		<a class="credit-links" href={photo.user.links.html} target="_blank" rel="noopener noreferrer">
			Photo by {photo.user.name}
		</a>
		<span class="credit-on"> on </span>
		<a class="credit-links" href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
	</div>
</div>

<style>
	.photo-card {
		max-width: 90vw;
		margin: 1rem auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.photo-card img {
		width: auto;
		height: 460px;
		display: block;
		border-radius: 4px;
		border-radius: 2%;
	}

	.location-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-end; /* Align content to the bottom */
		height: 4.5rem; /* Height of two lines of text, adjust as needed */
	}

	.unknown-location {
		text-align: center;
	}

	.caption {
		text-align: center;
		font-weight: 500;
		padding: 0.5rem 0;
	}

	.location {
		color: black;
		font-size: 15px;
		margin: 0;
	}

	.ask-photographer {
		font-size: 0.75rem; /* Smaller font size for the 'ask' prompt */
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
</style>
