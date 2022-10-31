import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from '@astrojs/svelte';

// https://astro.build/config
import image from '@astrojs/image';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],

  // vite: {
  //   resolve: {
  //     alias: {
  //       '@/': `${path.resolve(__dirname, 'src')}/`,
  //     },
  //   },
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         // path to your scss variables
  //         additionalData: `@import "@/styles/index.scss";`,
  //       },
  //     },
  //   },
  // },
});
