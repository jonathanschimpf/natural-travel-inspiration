<div class="about-container">
	<div class="image-and-self-credit-container">
		<img
			src="/assets/south_kaibab_day-hike.png"
			class="about-south_kaibab_image"
			alt="South Kaibab Day Hike"
		/>
		<p class="giving-yourself-credit">
			South Kaibab Trail @ Grand Canyon National Park. Arizona, USA. Photo by Jonathan Schimpf (me).
		</p>
	</div>

	<p class="about-writeup">
		<span class="natural-span">Natural Travel Inspiration</span> — we all live in cities or suburbs,
		work from businesses, offices or work from home. Having manmade structures be the main setting
		where many of us spend most of our time, we should get out and explore. Nature is beautiful and
		life is short, we should enjoy it while we can. I've lived and worked in and around a city for a
		long time, but in the evenings or on weekends I have always tried to get out and enjoy what was
		here before I was born. Many of my travels have revolved around it. So I made this web project
		as a way to inspire myself and others. It pulls random images from the
		<a
			class="unsplash-link"
			href="https://www.unsplash.com"
			rel="noreferrer"
			target="_blank"
			aria-label="Unsplash Link">Unsplash</a
		>
		API that were created by photographers from all over the world that contribute their images to that
		platform. Each random image presented credits them below it if you're curious. If you would prefer
		to be slightly more specific about a random image you can hit the form below the 'Random Natural
		Inspiration' button to search. No guarantees! This simple web project was the first time that I have
		built anything using
		<a
			class="svelte-link"
			href="https://kit.svelte.dev/"
			rel="noreferrer"
			target="_blank"
			aria-label="SvelteKit">SvelteKit</a
		>
		and I don't believe it will be the last. You can check out the GitHub repository
		<a
			class="natural-travel-repository"
			href="https://github.com/jonathanschimpf/natural-travel-inspiration"
			rel="noreferrer"
			target="_blank"
			aria-label="Natural Travel Inspiration Repository">here</a
		>.

		<br /> <br /> - Jonathan Schimpf
	</p>
</div>

<style>
	.giving-yourself-credit {
		font-size: 7px;
		color: rgb(147, 147, 147);
	}

	.image-and-self-credit-container {
		flex: 1 1 70%; /* Adjust based on desired width */
		max-width: 600px; /* Max width of image container */
		display: flex;
		flex-direction: column; /* Stack image and credit vertically */
		align-items: center; /* Center align the content */
	}

	.natural-span {
		color: rgb(0, 129, 34);
	}
	.about-container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 20px; /* Adjust the gap between image and text as needed */
		margin: 20px; /* Adjust the margin as needed */
	}

	a.unsplash-link,
	a.svelte-link,
	a.natural-travel-repository {
		text-decoration: none;
		color: rgb(2, 50, 127) !important;
	}

	a.unsplash-link:hover,
	a.svelte-link:hover,
	a.natural-travel-repository:hover {
		text-decoration: none;
		color: rgb(0, 129, 34) !important;
		cursor: pointer !important;
	}

	.about-south_kaibab_image {
		max-width: 600px;
		border-radius: 2%;
		margin-top: 1rem;
	}

	.about-writeup {
		flex: 1 1 30%; /* Adjusts the width of the write-up to be 45% of the container */
		max-width: 600px; /* You can set a max-width if you want */
		color: black;
		padding: 10px;
		font-size: 13px;
	}

	/* Adjust the media query to 500px for mobile viewports */
	@media (max-width: 700px) {
		.about-container {
			flex-direction: column;
		}

		.about-south_kaibab_image,
		.about-writeup {
			/* Adjust to take full width on smaller screens */
			flex: 1 0 100%;
			max-width: 100%;
			margin-top: 0;
		}
	}
</style>
