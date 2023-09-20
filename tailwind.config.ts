import { type Config } from "tailwindcss";
import tailwindforms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        ball: {
          "0%, 100%": {
            transform: "rotate(-30deg)",
          },
          "50%": {
            transform: "rotate(30deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out",
        ball: "ball 1s ease-in-out once",
      },
    },
  },
  plugins: [tailwindforms],
} satisfies Config;
