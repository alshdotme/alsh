import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/edge'
import UnoCSS from 'unocss/astro'


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: 'https://www.alsh.me',
  integrations: [UnoCSS({
    injectReset: true // or a path to the reset file
  })]
});