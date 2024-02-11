/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#292323", // Use your custom primary color
        secondary: "#ff6900", // Use your custom secondary color
      },
      backgroundColor: {
        primary: "#292323", // Use your custom primary background color
        secondary: "#ff6900", // Use your custom secondary background color
      },
    },
  },
  plugins: [],
};
