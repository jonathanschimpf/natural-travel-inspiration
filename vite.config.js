import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const production = process.env.NODE_ENV === 'production';

export default defineConfig({
	base: production ? '/natural-travel-inspiration/' : '/',
	plugins: [sveltekit()]
});
