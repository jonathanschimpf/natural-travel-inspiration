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
        <img src={photo?.urls?.regular || '/assets/fetching-image-element-placeholder.png'} 
             alt={photo?.alt_description || 'Placeholder Image'}
             class="photo-img" />
    </div>
    {#if photo}
        <div class="photo-information">
            {#if photo.location && photo.location.name}
                <p class="location">{photo.location.name}</p>
            {/if}
            <div class="caption">
                <span class="credit-photo-by">Photo by </span>
                <a class="credit-links"
                   href={createAttributionLink(photo.user.links.html)}
                   target="_blank"
                   rel="noopener noreferrer">
                    {photo.user.name}
                </a>
                <span class="credit-on"> on </span>
                <a class="credit-links"
                   href={createAttributionLink('https://unsplash.com')}
                   target="_blank"
                   rel="noopener noreferrer">
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
        max-width: 90vw;
        margin: auto;
        text-align: center;
        position: relative;
        border-radius: 2%;
        overflow: hidden;
        height: 600px; /* Set a fixed height to prevent layout shift */
    }

    .image-container {
        position: relative;
        height: 500px; /* Set a fixed height to prevent layout shift */
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .photo-img {
        max-height: 460px;
        width: 100%;
        object-fit: cover;
        border-radius: 25px;
        position: relative;
        z-index: 2; /* Ensure the image is above the spacer */
    }

    .photo-information {
        padding: 1rem;
        width: 100%;
    }

    .location {
        color: black;
        font-size: 15px;
        margin: 0;
        margin-top: -20px;
    }

    .credit-photo-by, .credit-on, .credit-links {
        font-size: 10px;
        color: rgb(135, 135, 135);
    }

    .credit-links:hover, .credit-links:focus {
        text-decoration: none;
        color: rgb(69, 69, 69);
        cursor: pointer !important;
    }

    .download-button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(209, 209, 209);
        border-radius: 2px;
        font-size: 8px;
        color: rgb(135, 135, 135);
        border: none;
        padding: 0.5em 1em;
        cursor: pointer;
        max-width: 45px;
        height: 12px;
        width: 100%;
        outline: 1px solid rgb(135, 135, 135);
        margin-top: 1rem; /* Add space above the download button */
    }

    .download-button:focus {
        outline: 1px solid rgb(135, 135, 135);
    }

    .download-button:hover {
        background-color: #e0e0e0;
    }

    /* Media queries for responsiveness and mobile styles */
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
