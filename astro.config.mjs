import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  load: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
});