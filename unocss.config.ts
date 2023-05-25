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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
