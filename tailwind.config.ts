import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  purge: {
    safelist: [
      "bg-gray-400",
      "bg-blue-400",
      "bg-teal-400",
      "bg-red-400",
      "bg-gray-100",
      "bg-blue-100",
      "bg-teal-100",
      "bg-red-100",
      "border-gray-500",
      "border-red-500",
      "border-teal-500",
      "border-blue-500",
    ],
  },
  plugins: [],
};
export default config;
