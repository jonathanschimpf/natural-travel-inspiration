<script>
	import Nav from '$lib/Nav.svelte';
	import '@picocss/pico/css/pico.min.css';
</script>

<Nav />
<slot />

<style>
	/* APPLY A NATURAL BOX LAYOUT MODEL TO ALL ELEMENTS */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(body, html) {
		height: 100%;
		margin: 0;
	}

	:global(.download-button, textarea, select, input:focus) {
		outline: 0.5px solid #3a3a3a;
	}

	:global(.pico-form input[type='search']) {
		outline: 0.5px solid #3a3a3a;
	}

	:global(.pico-form:focus) {
		outline: 2px solid whitesmoke !important;
	}
	:global(body, html) {
		background-color: rgb(209, 209, 209) !important; /* SPECIFIC OVERRIDE */
		font-family: 'Futura', sans-serif; /* Futura OBVIOUSLY */
	}
</style>
