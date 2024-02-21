import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          10: "#7E7E7E",
          20: "#DEDFE2",
          30: "#ECECEC",
          40: "#E8E8E8",
          50: "#838383"
        },
        green: {
          10: "#3BB77E",
          20: "#BCE3C9",
          30: "#253D4E",
          40: "#3BB77E",
        },
       
      },
      backgroundImage: {
       
      },
    },
  },
  plugins: [],
};
export default config;
