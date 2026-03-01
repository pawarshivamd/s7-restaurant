import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled', '@mui/lab', '@mui/x-date-pickers'],
          animation: ['framer-motion', 'gsap'],
          pdf: ['html2pdf.js', 'jspdf'],
          form: ['react-hook-form', '@hookform/resolvers', 'yup'],
          utils: ['dayjs']
        }
      }
    }
  }
})
