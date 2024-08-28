import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: 'src/index.js',
      name: 'mini-store',
      fileName: (format) => `mini-store.${format}.js`,
    },
  },
});
