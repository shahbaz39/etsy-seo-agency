import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        cream: {
          50: "#FDFBF7",
          100: "#FAF6EE",
          200: "#F4EBD9",
          300: "#E9DCC2",
        },
        charcoal: {
          50: "#F5F5F4",
          100: "#E7E5E4",
          200: "#D6D3D1",
          400: "#78716C",
          600: "#44403C",
          800: "#1C1917",
          900: "#0B0A09",
        },
        brand: {
          50: "#FFF5EB",
          100: "#FFE6CC",
          200: "#FFCC99",
          300: "#FFB066",
          400: "#FF9540",
          500: "#F76B1C",
          600: "#E25608",
          700: "#B44106",
          800: "#7A2D04",
        },
      },
      backgroundImage: {
        "warm-grad": "linear-gradient(135deg, #FFB066 0%, #F76B1C 50%, #E25608 100%)",
        "soft-grad": "linear-gradient(135deg, #FFF5EB 0%, #FFE6CC 100%)",
        "hero-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(247,107,28,0.18) 0%, rgba(247,107,28,0) 70%)",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(28,25,23,0.12)",
        glow: "0 20px 60px -20px rgba(247,107,28,0.45)",
        card: "0 1px 0 rgba(255,255,255,0.6) inset, 0 8px 24px -12px rgba(28,25,23,0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
