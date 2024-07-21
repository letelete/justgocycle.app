import pluginTailwindCssAnimate from 'tailwindcss-animate';
import defaultTheme from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      body: {
        DEFAULT: 'hsla(var(--color-body), <alpha-value>)',
        foreground: {
          DEFAULT: 'hsla(var(--color-body-foreground))',
          primary: 'hsla(var(--color-body-foreground-primary))',
          secondary: 'hsla(var(--color-body-foreground-secondary))',
          disabled: 'hsla(var(--color-body-foreground-disabled))',
          decorative: 'hsla(var(--color-body-foreground-decorative))',
          destructive: 'hsla(var(--color-body-foreground-destructive))',
        },
      },
      accent: {
        DEFAULT: 'hsla(var(--color-accent), <alpha-value>)',
        foreground: {
          DEFAULT: 'hsla(var(--color-accent-foreground), <alpha-value>)',
        },
      },
      destructive: {
        DEFAULT: 'hsla(var(--color-destructive), <alpha-value>)',
        foreground: {
          DEFAULT: 'hsla(var(--color-destructive-foreground), <alpha-value>)',
        },
      },
      debug: {
        DEFAULT: 'hsla(var(--color-debug-tool), <alpha-value>)',
        foreground: {
          DEFAULT: 'hsla(var(--color-debug-tool-foreground), <alpha-value>)',
        },
      },
    },
  },
  plugins: [pluginTailwindCssAnimate],
} as const satisfies Config;

export default config;
