<script>
	import Nav from '$lib/Nav.svelte';
	import '@picocss/pico/css/pico.min.css';
</script>

<Nav />
<slot />

<style>
	:global(.download-button, textarea, select, button, input:focus) {
		outline: 0.5px solid rgb(69, 69, 69);
	}

	:global(.pico-form input[type='search']) {
		outline: 0.5px solid rgb(0, 0, 0);
	}

	:global(body, html) {
		background-color: rgb(209, 209, 209) !important; /* SPECIFIC OVERRIDE */
		font-family: 'Futura', sans-serif; /* Futura OBVIOUSLY */
	}
</style>
