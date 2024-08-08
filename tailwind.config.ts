import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F7B32B',
        danger: '#FF6B6C',
        success: '#53DD6C',
        warning: '#CD5334',
        rich: '#031926',
        ghost: '#fefefe'
      }
    },
  },
  plugins: [],
};
export default config;
