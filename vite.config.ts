import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(
      {
        babel: {
          /*Using react compiler for auto memoization and performance enhancement */
          plugins: [["babel-plugin-react-compiler"]],
        },
      }
    )],
})
