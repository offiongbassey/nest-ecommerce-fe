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
          50: "#838383",
          60: "#ADADAD",
          70: "#B6B6B6",
          80: "#E9ECEF",
          90: "#F2F3F4",
          91: "#F4F6FA"
        },
        green: {
          10: "#3BB77E",
          20: "#BCE3C9",
          30: "#253D4E",
          40: "#3BB77E",
          50: "#DEF9EC"
        },
        pink: {
          10: "#F74B81", 
        },
        blue: {
          10: "#67BCEE"
        },
        orange: {
          10: "#F59758"
        }
       
      },
      backgroundImage: {
       "daily-best": "url('/daily-best-banner.png')",
       "footer-banner": "url('/footer-banner.png')"
      },
    },
  },
  plugins: [],
};
export default config;
