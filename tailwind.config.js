/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        wii: "FOT-RodinNTLG Pro, sans-serif",
      },
      cursor: {
        wii: "url(/wii_assets/cursor.png), auto",
      },
      backgroundImage: {
        wiiFooter: "url(/wii_assets/footer.svg)",
      },
      animation: {
        flash: "flash 2s infinite",
      },
      keyframes: {
        flash: {
          "0%, 50%": { opacity: "0.7" },
          "51%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
