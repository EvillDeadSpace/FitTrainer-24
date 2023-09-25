/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        primaryColor: '#00539C',
        secundaryColor: '#6d28d9',
        accentColor: '#c7c5c5',
        textColor: '#8f8686',
      },
      boxShadow: {
        pannelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula"]
  },
}