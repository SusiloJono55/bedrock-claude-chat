/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['M PLUS Rounded 1c'],
    },
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
      animation: {
        fastPulse: 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'header-chat': 'linear-gradient(95deg, rgba(255,253,250,1) 0%, rgba(200,227,233,1) 51%, rgba(254,250,245,1) 100%);',
      },
      colors: {
        'gray-background': '#E1E1E1',
        'accordion': '#93CECE',
        'pq-orange': '#FD7B03',
        'light-mint': '#E1ECEE',
        'text-white': '#FFFFFF',
        'aws-squid-ink': '#E1ECEE',
        'aws-sea-blue': '#FD7B03',
        'aws-sea-blue-hover': '#FD7B03',
        'aws-aqua': '#007faa',
        'aws-lab': '#38ef7d',
        'aws-mist': '#9ffcea',
        'aws-font-color': '#232F3E',
        'aws-font-color-white': '#ffffff',
        'aws-paper': '#ffffff',
        red: '#dc2626',
        'light-red': '#fee2e2',
        yellow: '#f59e0b',
        'light-yellow': '#fef9c3',
        'dark-gray': '#6b7280',
        gray: '#565656',
        'light-gray': '#e5e7eb',
      },
      screens: {
        // ml stands for 'mobile landscape'
        ml: {
          raw: '(min-width: 480px) and (max-width: 960px) and (max-height: 480px)',
        },
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar')],
};
