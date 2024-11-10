import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      components: '/src/components',  //こうしないと動きませんでした
    },
  },
  plugins: [react()],
});