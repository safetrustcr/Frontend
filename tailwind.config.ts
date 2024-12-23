import type { Config } from 'tailwindcss';
import withMT from '@material-tailwind/react/utils/withMT';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'default-color': '#003075',
        'custom-dark': '#1A1D26',
        'custom-orange': '#F97316',
        'custom-grey': '#656464',
      },
      backgroundColor: {
        dark: {
          background: '#121212',
          surface: '#1E1E1E',
          surface2: '#242424',
          surface3: '#2A2A2A',
        },
        light: {
          primary: '#FFFFFF',
          secondary: '#F7FAFC',
          card: '#FFFFFF',
        },
      },
      textColor: {
        dark: {
          primary: '#FFFFFF',
          secondary: '#CBD5E0',
        },
        light: {
          primary: '#1A1D26',
          secondary: '#4A5568',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default withMT(config);
