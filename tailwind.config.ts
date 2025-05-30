import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kdamthmorpro: ['var(--font-kdam)'],
      },
      colors: {
        youth: "#246476",
        notion: "#7DAE41",
      }
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
