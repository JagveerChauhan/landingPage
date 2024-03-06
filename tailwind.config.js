import DefaultTheme from 'tailwindcss/defaultTheme';

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'white': '#ffffff',
        'black': '#000',
        'blue':'#0E8AFA',
        'dark-blue' : '#001726',
        'light-blue' : '#F1F5FF',
      },
      fontFamily: {
        "DM Sans": ["DM Sans", ...DefaultTheme.fontFamily.sans],
        "Manrope": ["Manrope", ...DefaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
