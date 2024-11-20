import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginRewriteAll from 'vite-plugin-rewrite-all'; //to allow dots in the token parameters

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),pluginRewriteAll()],
})

// export default {
  //to allow dots in the token parameters
//   plugins: [pluginRewriteAll()] 
// }