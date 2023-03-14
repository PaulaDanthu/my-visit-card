import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "xmlhttprequest-ssl": "./node_modules/engine.io-client/lib/xmlhttprequest.js"
    }
  },
  plugins: [vue()],
})
