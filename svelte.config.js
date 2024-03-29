import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/natural-travel-inspiration' : ''
		}
	},
	preprocess: preprocess()
};

export default config;
