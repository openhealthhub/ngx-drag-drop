/// <reference types="vitest" />
import angular from '@analogjs/vite-plugin-angular';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    angular({
      tsconfig: 'projects/dnd/tsconfig.spec.json',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['projects/dnd/src/test-setup.ts'],
    include: ['projects/dnd/src/**/*.spec.ts'],
    coverage: {
      provider: 'v8',
      include: ['projects/dnd/src/lib/**/*.ts'],
      exclude: ['**/*.spec.ts'],
      reporter: ['text', 'json-summary', 'html'],
    },
  },
});
