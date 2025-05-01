/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/{src,components,modules}/**/*.{ts,tsx,js,jsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        "chart-1": "var(--chart-1)",
        "chart-2": "var(--chart-2)",
        "chart-3": "var(--chart-3)",
        "chart-4": "var(--chart-4)",
        "chart-5": "var(--chart-5)",
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
        },
        "sidebar-primary": {
          DEFAULT: "var(--sidebar-primary)",
          foreground: "var(--sidebar-primary-foreground)",
        },
        "sidebar-accent": {
          DEFAULT: "var(--sidebar-accent)",
          foreground: "var(--sidebar-accent-foreground)",
        },
        "sidebar-border": "var(--sidebar-border)",
        "sidebar-ring": "var(--sidebar-ring)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "calc(var(--radius) * 0.75)",
        md: "calc(var(--radius) * 1.25)",
        lg: "calc(var(--radius) * 1.5)",
        xl: "calc(var(--radius) * 1.75)",
        "2xl": "calc(var(--radius) * 2)",
        "3xl": "calc(var(--radius) * 2.25)",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)"],
      },
    },
  },
  plugins: [],
};
