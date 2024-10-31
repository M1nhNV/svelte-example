import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-node';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    globals: true,
    include: ['test/unit/**/*.spec.ts']
  },
  kit: {
    adapter: adapter()
  }
});
