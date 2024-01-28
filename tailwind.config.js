/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        bodyColor:'#0A192F',
        textGreen:'#64ffda',
        textLigth:'#ccd6f6',
        textDark:'#8892b0',
        hoverColor:'rgba(100,255,218,0.1)'
      },

      maxWidth:{
         "container":"1280px",
         "container-smaill":"1124px",
      },

      fontFamily:{
         Montserrat:['Montserrat','sans-serif'],
         Exo:['Exo','sans-serif']
      }
    },
  },
  plugins: [],
};
