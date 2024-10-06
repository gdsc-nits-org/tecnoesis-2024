import { transform } from "next/dist/build/swc"
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "mobile1":"350px",
        'mobile2': '400px',
        "mobile3":'450px',
        "mobile4":'500px',
        "tablet1":"550px",
        "tablet2":"800px",
        "tablet25":"870px",
        "tablet3":"900px",
        "tablet4":"950px",
        "tv1" : "2100px",
        "tv2" : "2700px",
      },
      fontFamily: {
        rp1: ["readyplayer", 'monospace'],
        outfit: ['Outfit', 'sans-serif']
      },
      colors: {
        customGray: '#1e2025',
        customDark: '#121317',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'bg-glitch': {
          '0%': { backgroundPosition: '0 2px' },
          '70%': { backgroundColor: '#1e2025' },
          '98%': { backgroundPosition: '0 2px' },
          '99%': { backgroundPosition: '0 1px' },
          '100%': {
            backgroundPosition: '0 3px',
            backgroundColor: '#2c2f36',
          },
        },
        'text-glow': {
          '66%': { textShadow: '-1px 1px 0 #E123FF, 1px -1px 0 #4D7FFF, 0 0 9px rgba(255,255,255,1)' },
          '68%': { textShadow: '-2px 2px 0 #E123FF, 2px -2px 0 #4D7FFF, 0 0 9px rgba(255,255,255,1)' },
          '70%': {
            opacity: '1',
            textShadow: '-1px 1px 0 #E123FF, 1px -1px 0 #4D7FFF, 0 0 9px rgba(255,255,255,1)',
          },
          '71%': { opacity: '.6' },
          '72%': { opacity: '1' },
          '79%': { opacity: '1' },
          '80%': { opacity: '.6' },
          '81%': { opacity: '1' },
          '83%': { opacity: '1' },
          '84%': { opacity: '.6' },
          '85%': {
            opacity: '1',
            textShadow: '-1px 1px 0 #E123FF, 1px -1px 0 #4D7FFF, 0 0 9px rgba(255,255,255,1)',
          },
          '100%': { textShadow: '-1px 1px 0 #E123FF, 1px -1px 0 #4D7FFF, 0 0 14px rgba(255,255,255,1)' },
        },
        'rotate-pattern': {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(0deg)' },
        },
        'rocketzoom':{
          '0%': { transform: 'translate(0,0)' },
          '30%': { transform: 'translate(0,0)' },
          '45%': { transform: 'translate(3rem, -3rem)' },
          '50%':{ transform: 'translate(3rem, 6rem)'},
          '60%':{ transform: 'translate(-3rem, 6rem)'},
          '65%':{ transform: 'translate(-3rem, 3rem)'},
          '80%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(0,0)' },
        }
      },
      clipPath: {
        'custom-ellipse': 'ellipse(100% 50% at 50% 100%)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'bg-glitch': 'bg-glitch 5s infinite alternate',
        'text-glow': 'text-glow 2s infinite alternate ease-in-out',
        'rotate-pattern': 'rotate-pattern 8s 1 ease-in-out',
        'rocketzoom' : 'rocketzoom 0.5s ease-in-out',
      },
      backgroundImage:{
        'nav-gradient' : 'linear-gradient(to top, transparent 0%, #070710 50%)',
      },
       backgroundImage: {
        'blue-metall': 'linear-gradient(77deg, #59CAFA 11.6%, #A4D8E1 25.31%, #88C3D4 48.06%, #59CAFA 55.72%, #59CAFA 77.23%, #6DB0C1 85.34%, #59CAFA 91.31%)',
      },
    
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
