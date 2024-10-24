import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        mobile1: "350px",
        mobile2: "400px",
        mobile3: "450px",
        mobile4: "500px",
        tablet1: "550px",
        tablet2: "800px",
        tablet25: "870px",
        tablet3: "900px",
        tablet4: "950px",
        desktop1:"1200px",
        desktop2:"1600px",
        desktop3:"1800px",
        tv1: "2100px",
        tv3:"2400px",
        tv2: "2700px",
        sml: "500px",
        "3xl": "2560px",
        "6xl":"2900px",
        "4xl": "3440px",
        "5xl": "3840px",
        "7xl":"4000px"
      },
      fontFamily: {
        rp1: ["readyplayer", "monospace"],
        outfit: ["Outfit", "sans-serif"],
        nico: ["Nico","sans-serif"]
      },
      colors: {
        customGray: "#1e2025",
        customBlue: "#59CAFA",
        customYellow: "DDDBD2",
        customBluish: "#000912",
        customDark: "#121317",
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
      borderImage:{
        "silvery": 'linear-gradient(148.38deg, #7DECFF 1.01%, #111922 51.14%, #76BEF8 97.42%)'

      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        oppositeUpDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "bg-glitch": {
          "0%": { backgroundPosition: "0 2px" },
          "70%": { backgroundColor: "#1e2025" },
          "98%": { backgroundPosition: "0 2px" },
          "99%": { backgroundPosition: "0 1px" },
          "100%": {
            backgroundPosition: "0 3px",
            backgroundColor: "#2c2f36",
          },
        },
        "text-glow": {
          "66%": {
            textShadow:
              "-1px 1px 0 #E123FF, 1px -1px 0 #4D7FFF, 0 0 9px rgba(255,255,255,1)",
          },
          "68%": {
            textShadow:
              "-2px 2px 0 #E123FF, 2px -2px 0 #4D7FFF, 0 0 9px rgba(255,255,255,1)",
          },
          "70%": {
            opacity: "1",
            textShadow:
              "-1px 1px 0 #E123FF, 1px -1px 0 #4D7FFF, 0 0 9px rgba(255,255,255,1)",
          },
          "71%": { opacity: ".6" },
          "72%": { opacity: "1" },
          "79%": { opacity: "1" },
          "80%": { opacity: ".6" },
          "81%": { opacity: "1" },
          "83%": { opacity: "1" },
          "84%": { opacity: ".6" },
          "85%": {
            opacity: "1",
            textShadow:
              "-1px 1px 0 #E123FF, 1px -1px 0 #4D7FFF, 0 0 9px rgba(255,255,255,1)",
          },
          "100%": {
            textShadow:
              "-1px 1px 0 #E123FF, 1px -1px 0 #4D7FFF, 0 0 14px rgba(255,255,255,1)",
          },
        },
        "rotate-pattern": {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(0deg)" },
        },
        rocketzoom: {
          "0%": { transform: "translate(0,0)" },
          "30%": { transform: "translate(0,0)" },
          "45%": { transform: "translate(3rem, -3rem)" },
          "50%": { transform: "translate(3rem, 6rem)" },
          "60%": { transform: "translate(-3rem, 6rem)" },
          "65%": { transform: "translate(-3rem, 3rem)" },
          "80%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(0,0)" },
        },
      },
      clipPath: {
        "custom-ellipse": "ellipse(100% 50% at 50% 100%)",
      },
      animation: {
        upDown: "upDown 3s ease-in-out infinite",
        oppositeUpDown: "oppositeUpDown 3s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bg-glitch": "bg-glitch 5s infinite alternate",
        "text-glow": "text-glow 2s infinite alternate ease-in-out",
        "rotate-pattern": "rotate-pattern 8s 1 ease-in-out",
        rocketzoom: "rocketzoom 0.8s ease-in-out",
      },
      backgroundImage: {
        "nav-gradient": "linear-gradient(to top, transparent 0%, #070710aa 30%, #000009 70%)",
        "blue-metall": "linear-gradient(77deg, #59CAFA 11.6%, #A4D8E1 25.31%, #88C3D4 48.06%, #59CAFA 55.72%, #59CAFA 77.23%, #6DB0C1 85.34%, #59CAFA 91.31%)",
        "silver-lustre":'linear-gradient(137.95deg, #7A96AC 2.28%, #EAEFF3 19.8%, #C2D4E1 32.94%, #FFFFFF 50.16%, #D4DEE5 62.15%, #ABBDC8 78.69%, #BCCAD7 95.24%)',
        "golden-lustre":'linear-gradient(135.34deg, #8C421D 15.43%, #FBE67B 38.47%, #FCFBE7 53.36%, #F7D14E 69.97%, #D4A041 86.26%)',
        "silvery-text":"linear-gradient(137.95deg, #7A96AC 2.28%, #EAEFF3 19.8%, #C2D4E1 32.94%, #FFFFFF 50.16%, #D4DEE5 62.15%, #ABBDC8 78.69%, #BCCAD7 95.24%)"
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
