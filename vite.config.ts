import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import checker from 'vite-plugin-checker';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const isRootPreview = process.env.NETLIFY === 'true' || process.env.CF_PAGES === '1';
  const base = isRootPreview ? '/' : '/music/';

  return {
    base: base,
    plugins: [
      checker({
        typescript: true,
      }),
    ],
    server: {
      allowedHosts: true,
      host: true,
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          post: resolve(__dirname, 'post/index.html'),
        },
      },
    },
  };
});
