export default {
  darkMode: "class",
  content:[ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        // BACKGROUND
        bg: {
          light: "#F8FAFC",
          dark: "#332f44ff",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#111827",
        },
        card: {
          light: "#FFFFFF",
          dark: "rgba(14, 12, 12, 0.03)",
        },

        // TEXT
        text: {
          primaryLight: "#111827",
          primaryDark: "#F9FAFB",
          secondaryLight: "#4B5563",
          secondaryDark: "#9CA3AF",
          muted: "#6B7280",
        },

        // BORDERS
        border: {
          light: "#E5E7EB",
          dark: "rgba(255,255,255,0.1)",
        },

        // ACCENTS
        primary: "#3B82F6",
        income: "#22C55E",
        expense: "#EF4444",
        warning: "#F59E0B",
      },
    },
    keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      gradientMove: {
        "0%": { backgroundPosition: "0% 50%" },
        "100%": { backgroundPosition: "200% 50%" },
      },
      animation: {
      gradient: "gradientMove 3s linear infinite",
      },
      },

      animation: {
        fadeUp: "fadeUp 0.6s ease forwards",
      },
    
  },
  plugins: [],
};