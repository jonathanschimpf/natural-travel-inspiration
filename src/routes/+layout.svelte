<!-- src/routes/+layout.svelte! -->
<script context="module">
	export const prerender = true;
</script>

<script>
	import Nav from '$lib/Nav.svelte';
	import '@picocss/pico/css/pico.min.css';
</script>

<Nav />
<slot />

<style>
	:global(.download-button:focus) {
		outline: 0.5px solid rgb(69, 69, 69) !important;
	}
	:global(textarea:focus) {
		outline: 0.5px solid rgb(0, 0, 0) !important;
	}
	:global(select:focus) {
		outline: 0.5px solid rgb(0, 0, 0) !important;
	}
	:global(button:focus) {
		outline: 0.5px solid rgb(0, 0, 0) !important;
	}
	:global(input:focus) {
		outline: 0.5px solid rgb(0, 0, 0) !important;
	}

	:global(.pico-form input[type='search']) {
		outline: 0.5px solid rgb(0, 0, 0) !important;
	}

	:global(body, html) {
		background-color: rgb(209, 209, 209) !important; /* More specific override */
		font-family: 'Futura', sans-serif; /* Futura OBVIOUSLY */
	}
</style>
