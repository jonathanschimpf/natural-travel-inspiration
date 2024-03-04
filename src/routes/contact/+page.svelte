<script>
	import { fade } from 'svelte/transition';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faDev,
		faLinkedin,
		faGithub,
		faInstagram,
		faThreads
	} from '@fortawesome/free-brands-svg-icons';
	import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="contact-centered"
in:fade={{ delay: 100, duration: 1000 }}>
	<h6 class="contact-title">Thanks for checking this out. <br /> You should go outside.</h6>
</div>

<div in:fade={{ delay: 100, duration: 1000 }}>
	<div class="icon-row new-line">
		<div class="icon-col">
			<a
				href="https://jonathanschimpf.dev/"
				rel="noreferrer"
				target="_blank"
				class="button responsive-icon black-out-icon"
				aria-label="DEV"
			>
				<FontAwesomeIcon icon={faDev} size="2x" />
			</a>
		</div>

		<div class="icon-col">
			<a
				href="https://github.com/jonathanschimpf"
				rel="noreferrer"
				target="_blank"
				class="button responsive-icon black-out-icon"
				aria-label="LinkedIn"
			>
				<FontAwesomeIcon icon={faGithub} size="2x" />
			</a>
		</div>

		<div class="icon-col">
			<a
				href="https://jonathanschimpf.com/"
				rel="noreferrer"
				target="_blank"
				class="button responsive-icon black-out-icon"
				aria-label="Tumblr Account To React App"
			>
				<FontAwesomeIcon icon={faCameraRetro} size="2x" />
			</a>
		</div>
	</div>

	<div class="icon-row">
		<div class="icon-col">
			<a
				href="https://www.linkedin.com/in/jonathan-schimpf/"
				rel="noreferrer"
				target="_blank"
				class="button responsive-icon linkedin-icon"
				aria-label="LinkedIn"
			>
				<FontAwesomeIcon icon={faLinkedin} size="2x" />
			</a>
		</div>

		<div class="icon-col">
			<a
				href="https://www.instagram.com/schimpfstagram/"
				rel="noreferrer"
				target="_blank"
				class="button responsive-icon instagram-icon"
				aria-label="Instagram [schimpfstagram]"
			>
				<FontAwesomeIcon icon={faInstagram} size="2x" />
			</a>
		</div>

		<div class="icon-col">
			<a
				href="https://www.threads.net/@schimpfstagram"
				rel="noreferrer"
				target="_blank"
				class="button responsive-icon threads-icon"
				aria-label="Threads [schimpfstagram]"
			>
				<FontAwesomeIcon icon={faThreads} size="2x" />
			</a>
		</div>
	</div>
</div>

<style>
	.icon-row {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: nowrap;
		margin-top: 1rem;
	}

	.icon-col {
		padding: 0.5rem;
		flex: 0 0 auto;
	}

	.new-line {
		white-space: pre-line;
	}

	.responsive-icon {
		display: inline-block;
		margin: 0 5px;
		color: inherit;
		text-decoration: none;
		flex: none;
	}
	.black-out-icon {
		color: black;
	}
	.instagram-icon {
		color: rgb(193, 44, 71);
	}

	.threads-icon {
		color: rgb(131 58 180);
	}

	.linkedin-icon {
		color: rgb(0, 119, 181);
	}

	.responsive-icon:hover {
		opacity: 0.5;
		cursor: pointer;
	}

	@media (max-width: 450px) {
		.responsive-icon {
			font-size: 16.1px;
		}
	}

	h6 {
		font-family: 'Futura', sans-serif; /* Futura OBVIOUSLY */
	}

	.contact-title {
		color: black;
		font-weight: 500;
	}
	.contact-centered {
		text-align: center;
		margin-top: 10vh;
	}
</style>
