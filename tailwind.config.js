/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#3A81C4",
        primary_10: "#1D4062",
        on_primary: "#ffffff",
        on_primary_v: "#BDD5EB",
        on_surface: "#222A32",
        on_surface_v: "#55697F",
        outline: "#99A9BA",
        outline_v: "#CCD4DC",
        alternative: "#CC0720",
        on_alternative: "#ffffff",
        error: "#B3261E",
        primary_container: "#BDD5EB",
        on_primary_container: "#132B41",
        surface_container: "#EDF0F3",

        secondary_08: "#4A6A89",
        surface_bg: "#F9FAFB",

        secondary_container: "#C7D4E1",
        on_secondary_container: "#1D2A37",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
