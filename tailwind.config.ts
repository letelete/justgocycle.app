import type { Config } from 'tailwindcss';
import pluginTailwindCssAnimate from 'tailwindcss-animate';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      body: {
        DEFAULT: 'var(--c-body)',
        fg: {
          DEFAULT: 'var(--c-body-fg)',
          primary: 'var(--c-body-fg-primary)',
          secondary: 'var(--c-body-fg-secondary)',
          disabled: 'var(--c-body-fg-disabled)',
          destructive: 'var(--c-body-fg-destructive)',
        },
      },
      accent: {
        DEFAULT: 'var(--c-accent)',
        fg: {
          DEFAULT: 'var(--c-accent-fg)',
        },
      },
      debug: {
        DEFAULT: 'var(--c-debug-tool)',
        fg: {
          DEFAULT: 'var(--c-debug-tool-fg)',
        },
      },
    },
  },
  plugins: [pluginTailwindCssAnimate],
};

export default config;
