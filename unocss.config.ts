import axios from 'axios'
import { ProxyAgent } from 'proxy-agent'
import {
  defineConfig,
  mergeDeep,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { Theme } from 'unocss/preset-uno'

export default defineConfig({
  transformers: [
    transformerDirectives(),
    transformerCompileClass(),
    transformerVariantGroup(),
  ],

  extendTheme(theme: Theme) {
    return mergeDeep(theme, {
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        keyframes: {
          'accordion-down': `from { height: 0; } to { height: var(--radix-accordion-content-height); }`,
          'accordion-up': `from { height: var(--radix-accordion-content-height); } to { height: 0; }`,
        },
      },
    })
  },
  preflights: [],
  presets: [
    presetUno(),
    presetWebFonts({
      customFetch: (url: string) =>
        axios.get(url, { httpsAgent: new ProxyAgent() }).then((it) => it.data),
      provider: 'google',
      fonts: {
        sans: 'Inter',
        mono: ['Jetbrains Mono'],
      },
    }),
    // icons find: https://icones.js.org/
    // iconify: https://icon-sets.iconify.design/
    // docs: https://github.com/unocss/unocss/blob/main/packages/preset-icons/README.md
    presetIcons({
      prefix: 'i-',
      scale: 1.2,
      cdn: 'https://esm.sh/',
      extraProperties: {
        flex: 'none',
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})
