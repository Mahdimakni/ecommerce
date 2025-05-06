import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  test: {
    setupFiles: ['./test/setup.js'],
    environment: 'jsdom',
  },
};

