import { fileURLToPath, URL } from 'node:url'

import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import Components from 'unplugin-vue-components/vite'
import path, { resolve, dirname } from 'node:path'
import { nodePolyfills } from 'vite-plugin-node-polyfills'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VitePWA({
      base: '/',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],

      manifest: {
        name: 'Paritex | Cyprus',
        short_name: 'Cyprus',
        start_url: '/?utm_source=pwa',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        "icons": [
          {
            "src": "android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "android-chrome-maskable-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "android-chrome-maskable-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "apple-touch-icon-60x60.png",
            "sizes": "60x60",
            "type": "image/png"
          },
          {
            "src": "apple-touch-icon-76x76.png",
            "sizes": "76x76",
            "type": "image/png"
          },
          {
            "src": "apple-touch-icon-120x120.png",
            "sizes": "120x120",
            "type": "image/png"
          },
          {
            "src": "apple-touch-icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "apple-touch-icon-180x180.png",
            "sizes": "180x180",
            "type": "image/png"
          },
          {
            "src": "apple-touch-icon.png",
            "sizes": "180x180",
            "type": "image/png"
          },
          {
            "src": "favicon-16x16.png",
            "sizes": "16x16",
            "type": "image/png"
          },
          {
            "src": "favicon-32x32.png",
            "sizes": "32x32",
            "type": "image/png"
          },
          {
            "src": "msapplication-icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "mstile-150x150.png",
            "sizes": "150x150",
            "type": "image/png"
          }
        ]
      }
    }),
    Pages(),
    Components({
      dirs: ['src/components', 'src/layouts'],
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'), // provide a path to the folder where you'll store translation data (see below)
    })
  ],
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "tailwind-config": path.resolve(__dirname, "./tailwind.config.js"),
    }
  },
  optimizeDeps: {
    include: [
      '@vueuse/core',
      '@vueuse/head',
      'axios',
      "tailwind-config"
    ]
  }
})
