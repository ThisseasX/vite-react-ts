import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      components: '/src/components',
      store: '/src/store',
      models: '/src/models',
      api: '/src/api',
      mocks: '/src/mocks',
      core: '/src/core',
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
