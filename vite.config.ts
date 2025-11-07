import vue from '@vitejs/plugin-vue'
import { readFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import Markdown from 'vite-plugin-md'

// Read version from package.json
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf-8'))
const appVersion = pkg.version

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/] // allow .md as Vue SFC
    }),
    Markdown({
      frontmatter: true // exports frontmatter
    }),
    checker({
      typescript: true,
      vueTsc: {
        tsconfigPath: './tsconfig.app.json'
      }
    })
  ],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(appVersion)
  }
})
