<script>
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';
</script>

<div class="about-container"
in:fade={{ delay: 100, duration: 500 }}>
	<div class="image-and-self-credit-container">
		<img
			src={`${base}/assets/south_kaibab_day-hike.png`}
			class="about-south_kaibab_image"
			alt="South Kaibab Day Hike"
			in:fade={{ delay: 100, duration: 500 }}
		/>
		<p class="giving-yourself-credit">
			South Kaibab Trail @ Grand Canyon National Park. Arizona, USA. Photo by
			<a
				class="link-to-my-dev-page-tiny"
				href="https://jonathanschimpf.dev"
				rel="noreferrer"
				target="_blank"
				aria-label="JonathanSchimpf.dev">Jonathan Schimpf (me)</a
			>.
		</p>
	</div>

	<p class="about-writeup"
	in:fade={{ delay: 100, duration: 500 }}>
		<span class="natural-span">Natural Travel Inspiration</span> — We all live in cities or suburbs
		and we work from businesses, offices or work from home. Having manmade structures be the main
		setting where many of us spend most of our time, exploring natural features is good for us all. Given the
		beauty of nature and the shortness of our lifetimes, we should enjoy it while we can. I've lived
		and worked in + around a city for a long time, but in the evenings or on weekends I have
		always sought out opportunities to get out and enjoy what was here before I was born. Many of my
		travels have revolved around it. So I made this web project as a way to inspire myself and
		others. It pulls random images from the
		<a
			class="unsplash-link"
			href="https://www.unsplash.com"
			rel="noreferrer"
			target="_blank"
			aria-label="Unsplash Link">Unsplash<span class="copyright-span">©</span></a
		>
		API that were created by photographers from all over the world that contribute their images to that
		platform. Each random image presented credits them below it if you're curious. This simple web project was the first time that I have
		built anything using
		<a
			class="svelte-link"
			href="https://kit.svelte.dev/"
			rel="noreferrer"
			target="_blank"
			aria-label="SvelteKit">SvelteKit</a
		>
		 (a powerful and flexible framework for building web applications) and I don't believe it will be the last. I really enjoy it. You can check out the GitHub repository
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
		font-size: 8px;
		color: rgb(147, 147, 147);
	}

	@media (max-width: 700px) {
		.giving-yourself-credit {
			font-size: 7px;
		}
	}

	.link-to-my-dev-page-tiny {
		text-decoration: none;
		color: rgb(138, 138, 138);
	}

	.link-to-my-dev-page-tiny:hover {
		text-decoration: none;
		color: rgb(91, 91, 91) !important;
		cursor: pointer !important;
	}
	.image-and-self-credit-container {
		flex: 1 1 70%;
		max-width: 600px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.natural-span {
		color: rgb(0, 129, 34);
	}
	.about-container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 20px;
		margin: 20px;
	}

	a.unsplash-link,
	a.svelte-link,
	a.natural-travel-repository {
		text-decoration: none;
		color: rgb(0, 129, 34);
	}

	a.unsplash-link:hover,
	a.svelte-link:hover,
	a.natural-travel-repository:hover {
		text-decoration: none;
		color: rgb(12, 161, 254) !important;
		cursor: pointer !important;
	}

	.about-south_kaibab_image {
		max-width: 600px;
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 2%;
		margin-top: 1rem;
	}

	.about-writeup {
		flex: 1 1 30%;
		max-width: 600px;
		color: black;
		padding: 10px;
		font-size: 13px;
	}

	.copyright-span {
		font-size: 8px;
		line-height: 1.5;
		display: inline-block;
		vertical-align: middle;
		position: relative;
		top: -0.7em;
	}

	@media (max-width: 700px) {
		.about-container {
			flex-direction: column;
		}

		.about-south_kaibab_image,
		.about-writeup {
			flex: 1 0 100%;
			max-width: 100%;
			margin-top: 0;
		}
	}
</style>
