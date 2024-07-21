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
          solid: 'var(--c-body-fg-solid)',
          primary: 'var(--c-body-fg-primary)',
          secondary: 'var(--c-body-fg-secondary)',
          disabled: 'var(--c-body-fg-disabled)',
          destructive: 'var(--c-body-fg-destructive)',
        },
      },
      accent: {
        DEFAULT: 'var(--c-accent)',
        fg: {
          solid: 'var(--c-accent-fg-solid)',
        },
      },
    },
  },
  plugins: [pluginTailwindCssAnimate],
};

export default config;
