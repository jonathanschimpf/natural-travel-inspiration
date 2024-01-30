<!-- src/routes/+layout.svelte -->
<script>
	import Nav from '$lib/Nav.svelte';
	import '@picocss/pico/css/pico.min.css';
</script>

<Nav />
<slot />

<style>
	:global(body, html) {
		background-color: rgb(209, 209, 209) !important; /* More specific override */
		font-family: 'Futura', sans-serif; /* Futura OBVIOUSLY */
	}
	:global(a:focus) {
		background-color: rgba(255, 255, 255, 0.2); /* Light background on focus */
		outline: none;
	}
</style>
