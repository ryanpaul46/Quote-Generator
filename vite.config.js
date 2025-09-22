import { defineConfig } from "vite";

export default defineConfig({
    base: "Quote-Generator",
    server: {
      proxy: {
        '/api': {
          target: 'https://api.api-ninjas.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
});