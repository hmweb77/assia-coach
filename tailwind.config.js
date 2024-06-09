/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				publicSans: ["Public Sans", "sans-serif"],
			},
			colors: {
				primary: "#8B7EF8",
				darkPrimary: "#01182C",
				secondary: "#01182C",
				neutral: "#F7F8F9",
				textColor: "#01162C",
			},
			screens: {
				sm: "400px",
				md: "750px",
				lg: "1100px",
				xl: "1440px",
			},
			backgroundImage: {
				hero: 'url("./src/assets/heroBg.png")',
			},
		},
  },
  plugins: [],
};
