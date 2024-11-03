/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: [
        'vite.config.ts',
        'src/**/*.test.*',
        'src/**/*.stories.*',
        'src/setupTest.ts',
        '.storybook/**/*.ts',
      ],
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: resolve(__dirname, 'src/setupTest.ts'),
  },
  build: {
    lib: {
      entry: {
        colors: resolve(__dirname, 'src/colors/index.ts'),
        fonts: resolve(__dirname, 'src/fonts/index.ts'),
        components: resolve(__dirname, 'src/components/index.ts'),
        hooks: resolve(__dirname, 'src/hooks/index.ts'),
        icons: resolve(__dirname, 'src/icons/index.ts'),
      },
      formats: [
        'es',
        'cjs',
      ],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
      ],
    },
  },
})
