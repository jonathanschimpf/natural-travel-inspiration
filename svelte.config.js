import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			prerender: {
				default: true
			}
		}),
		paths: {
			base: '/natural-travel-inspiration'
		}
	},
	preprocess: preprocess()
};

export default config;
