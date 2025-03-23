import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      },
      animation: {
        'ray1': 'ray1 15s ease-in-out infinite',
        'ray2': 'ray2 15s ease-in-out infinite',
        'ray3': 'ray3 15s ease-in-out infinite',
        'ray4': 'ray4 15s ease-in-out infinite',
        'ray5': 'ray5 15s ease-in-out infinite',
      },
      keyframes: {
        ray1: {
          '0%, 100%': { opacity: '0', transform: 'rotate(0deg)' },
          '5%, 60%': { opacity: '1', transform: 'rotate(110deg)' },
          '65%': { opacity: '0', transform: 'rotate(120deg)' },
        },
        ray2: {
          '0%, 100%': { opacity: '0', transform: 'rotate(0deg)' },
          '10%, 70%': { opacity: '0.5', transform: 'rotate(40deg)' },
          '75%': { opacity: '0', transform: 'rotate(50deg)' },
        },
        ray3: {
          '0%, 100%': { opacity: '0', transform: 'rotate(0deg)' },
          '20%, 80%': { opacity: '0.7', transform: 'rotate(80deg)' },
          '85%': { opacity: '0', transform: 'rotate(90deg)' },
        },
        ray4: {
          '0%, 100%': { opacity: '0', transform: 'rotate(0deg)' },
          '30%, 90%': { opacity: '0.9', transform: 'rotate(150deg)' },
          '95%': { opacity: '0', transform: 'rotate(160deg)' },
        },
        ray5: {
          '0%, 100%': { opacity: '0', transform: 'rotate(0deg)' },
          '40%, 95%': { opacity: '1', transform: 'rotate(-120deg)' },
          '96%': { opacity: '0', transform: 'rotate(-110deg)' },
        },
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
