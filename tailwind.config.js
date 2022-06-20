/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        title: ['Roboto Condensed'],
        normal: ['Roboto'],
      },
      colors: {
        gray: {
          50: 'var(--color-gray-50)', // #F9FAFB
          100: 'var(--color-gray-100)', // #F3F4F6
          200: 'var(--color-gray-200)', // #E5E7EB
          300: 'var(--color-gray-300)', // #D1D5DB
          400: 'var(--color-gray-400)', // #9CA3AF
          DEFAULT: 'var(--color-gray)', // #6B7280
          600: 'var(--color-gray-600)', // #4B5563
          700: 'var(--color-gray)', // #374151
          800: 'var(--color-gray-800)', // #1F2937
          900: 'var(--color-gray-900)', // #111827
        },
      },
      screens: {
        xs: '480px', // Added xs
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set safelist in nuxt.config.js -> purgeCSS.safelist: ['btn', 'icon']
    },
  },
}
