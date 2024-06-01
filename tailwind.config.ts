import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        sideOn: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0%)" },
        },
        sideOff: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(100%)" },
        },
      },
      animation: {
        sideOn: "sideOn 0.8s ease-in-out",
        sideOff: "sideOff 0.8s ease-in-out",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
