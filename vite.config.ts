import { join } from 'path'
import { partytownVite } from '@builder.io/partytown/utils'
import { qwikCity } from '@builder.io/qwik-city/vite'
import { qwikReact } from '@builder.io/qwik-react/vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import unoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
  return {
    plugins: [
      unoCSS(),
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      qwikReact(),
      partytownVite({ dest: join(__dirname, 'dist', '~partytown') }),
    ],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  }
})
