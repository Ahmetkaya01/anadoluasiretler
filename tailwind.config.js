/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef7f6",
          100: "#d7ebe8",
          200: "#aed8d2",
          300: "#7fbbb3",
          400: "#539b95",
          500: "#357c77",
          600: "#27635f",
          700: "#214f4c",
          800: "#1f403e",
          900: "#1b3635",
        },
        noble: {
          50: "#eff4ff",
          100: "#dbe6ff",
          200: "#bfd1ff",
          300: "#93b1ff",
          400: "#5f86ff",
          500: "#3a61ff",
          600: "#1f43f0",
          700: "#1c36dc",
          800: "#1e30b2",
          900: "#1f318b",
        },
        accent: {
          gold: "#d6b067",
          amber: "#c8963e",
          cream: "#f8f2e6",
        },
        slateBrand: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
          600: "#475569",
          100: "#e2e8f0",
          50: "#f8fafc",
        },
      },
      boxShadow: {
        soft: "0 10px 30px -15px rgba(15, 23, 42, 0.25)",
        card: "0 18px 50px -24px rgba(15, 23, 42, 0.35)",
      },
      backgroundImage: {
        heroGlow:
          "radial-gradient(1200px 400px at 10% 0%, rgba(31,67,240,0.18), transparent 60%), radial-gradient(700px 300px at 90% 10%, rgba(214,176,103,0.2), transparent 60%)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
