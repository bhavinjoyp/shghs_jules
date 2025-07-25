import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sh-red': 'var(--sh-red)',
        'sh-gold': 'var(--sh-gold)',
        'sh-navy': 'var(--sh-navy)',
        'sh-white': 'var(--sh-white)',
        'sh-emerald': 'var(--sh-emerald)',
        'sh-beige': 'var(--sh-beige)',
        'sh-burgundy': 'var(--sh-burgundy)',
      },
      fontFamily: {
        serif: ['var(--font-serif)'],
        sans: ['var(--font-sans)'],
        'serif-alt': ['var(--font-serif-alt)'],
      },
      fontSize: {
        'xxs': 'var(--fs-xxs)',
        'xs': 'var(--fs-xs)',
        'sm': 'var(--fs-sm)',
        'md': 'var(--fs-md)',
        'lg': 'var(--fs-lg)',
        'xl': 'var(--fs-xl)',
        'xxl': 'var(--fs-xxl)',
      },
      spacing: {
        '0': 'var(--sp-0)',
        '1': 'var(--sp-1)',
        '2': 'var(--sp-2)',
        '3': 'var(--sp-3)',
        '4': 'var(--sp-4)',
        '5': 'var(--sp-5)',
        '6': 'var(--sp-6)',
        '8': 'var(--sp-8)',
        '10': 'var(--sp-10)',
        '12': 'var(--sp-12)',
        '16': 'var(--sp-16)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
      },
      boxShadow: {
        '1': 'var(--elev-1)',
        '2': 'var(--elev-2)',
        '3': 'var(--elev-3)',
      }
    },
  },
  plugins: [],
}
export default config
