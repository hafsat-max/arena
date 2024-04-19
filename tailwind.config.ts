import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary:'#101928',
        bg: "#292424",
        red: "#F56630",
        orange:'#CC400C',
        blue:'#1671D9',
        'btn-sec':'#EB5017',
        'grey100':'#F0F2F5',
        'grey200':'#475367'
      },
      fontSize:{
        '16':'clamp(14px,1vw,16px)',
        '36':'clamp(24px,2vw,32px)',
        '60':'clamp(36px,7vw,60px)'
      },
      gap: {
        '.5':'0.5px',
        "24p": "clamp(16px,1.5vw,24px)",
        '32p':'clamp(16px,2vw,32px)',
        '113':'clamp(2rem,7vw,7.063rem)'
      },
      lineHeight:{
        '145':'145%'
      }
    },
  },
  plugins: [],
};
export default config;
