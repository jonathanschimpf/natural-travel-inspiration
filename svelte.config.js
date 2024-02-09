import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
  kit: {
   // `adapter-static` builds a completely static website.
    adapter: adapter({
      // `pages` and `assets` are where the built files will be written
      pages: 'build',
      assets: 'build',
      prerender: {
        // This crawls the sitemap.xml to know what to prerender
        default: true,
      },
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/natural-travel-inspiration' : '',
    },

    // NUNYA
  },

  preprocess: preprocess(),
};

export default config;
