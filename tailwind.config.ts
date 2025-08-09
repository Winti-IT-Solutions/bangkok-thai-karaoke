import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#012169", // Blau der Thai-Flagge
          red: "#DA291C",
          white: "#FFFFFF"
        },
      },
    },
  },
  plugins: [],
};
export default config;
