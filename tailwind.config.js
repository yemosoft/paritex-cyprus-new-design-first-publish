const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const { parseColor } = require("tailwindcss/lib/util/color");
const defaultTheme = require('tailwindcss/defaultTheme')

/** Converts HEX color to RGB */
const toRGB = (value) => {
  return parseColor(value).color.join(" ");
};

/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,vue}",
    'node_modules/preline/dist/*.js',


  ],
  darkMode: 'class',
  theme: {
    extend: {
      
    },
    container: {
      center: true,
    },

  },
  plugins: [
    require("@tailwindcss/forms"),

    //require("daisyui"),
    require('preline/plugin')
  ],

};
