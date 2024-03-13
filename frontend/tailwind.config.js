/** @type {import('tailwindcss').Config} */

import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "lang-orange": "#F15A22",
        "nav-bar-black": "#010101",
        "body-gray": "#171717",
        "hacks-nav-black": "#202020",
        "hacks-bg-black": "#212121"
      },
      fontFamily: {
        "audiowide": ["audiowide", "regular"]
      },
      spacing: {
        '-16': '-4rem',
        '-20': '-5rem',
        '-24': '-6rem',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
