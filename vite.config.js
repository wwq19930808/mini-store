import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'mini-store',
      fileName: (format) => `mini-store.${format}.js`,
    },
  },
});
