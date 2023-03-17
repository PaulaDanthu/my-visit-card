import { defineConfig } from 'vite'
import { splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  alias:{
    '@' : path.resolve(__dirname, '.src')
  },
  base: '/my-visit-card/',
  plugins: 
    [vue()],
    [splitVendorChunkPlugin()],
})
