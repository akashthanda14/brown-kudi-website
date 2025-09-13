import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk for core dependencies
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor';
          }
          // Router chunk
          if (id.includes('node_modules/react-router')) {
            return 'router';
          }
          // Animation libraries
          if (id.includes('node_modules/framer-motion') || 
              id.includes('node_modules/gsap') || 
              id.includes('node_modules/aos')) {
            return 'animations';
          }
          // Swiper components
          if (id.includes('node_modules/swiper')) {
            return 'swiper';
          }
          // Icons and UI libraries
          if (id.includes('node_modules/lucide-react') || 
              id.includes('node_modules/react-icons')) {
            return 'icons';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
