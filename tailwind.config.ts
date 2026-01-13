import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
				heading: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
				mono: ['SF Mono', 'ui-monospace', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					'300': '#c4b5fa',
					'400': '#b39df8',
					'500': '#9f82f7',
					'600': '#8a6bf6',
					'700': '#7654f5',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cursor: {
					'purple': '#9b87f5',
					'dark': '#0c0c0f',
					'darker': '#08080a',
					'gray': '#1e1e26',
					'light-gray': '#2e2e36',
				},
				dark: {
					'50': '#f6f6f7',
					'100': '#e3e3e6',
					'200': '#c7c8cd',
					'300': '#a1a2ac',
					'400': '#7d7e8c',
					'500': '#636472',
					'600': '#4d4d59',
					'700': '#3d3d47',
					'800': '#27272e',
					'900': '#18181c',
					'950': '#111114',
				},
				tech: {
					'50': '#eef2ff',
					'100': '#e0e7ff',
					'200': '#c7d2fe',
					'300': '#a5b4fc',
					'400': '#818cf8',
					'500': '#6366f1',
					'600': '#4f46e5',
					'700': '#4338ca',
					'800': '#3730a3',
					'900': '#312e81',
					'950': '#1e1b4b',
				},
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-down': {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				"float-slow": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"pulse-subtle": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.7" }
				},
				"rotate-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" }
				},
				"skill-pop": {
					"0%": { transform: "scale(0.8)", opacity: "0.5" },
					"70%": { transform: "scale(1.1)" },
					"100%": { transform: "scale(1)", opacity: "1" }
				},
				"gradient-x": {
					"0%, 100%": {
						"background-position": "0% 50%"
					},
					"50%": {
						"background-position": "100% 50%"
					}
				},
				"blur-in": {
					"0%": {
						filter: "blur(12px)",
						opacity: "0"
					},
					"100%": {
						filter: "blur(0px)",
						opacity: "1"
					}
				},
				"glow-pulse": {
					"0%, 100%": {
						boxShadow: "0 0 5px 0 rgba(155, 135, 245, 0.2)"
					},
					"50%": {
						boxShadow: "0 0 20px 0 rgba(155, 135, 245, 0.4)"
					}
				},
				"float-character": {
					"0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
					"25%": { transform: "translateY(-10px) rotate(-2deg)" },
					"75%": { transform: "translateY(10px) rotate(2deg)" }
				},
				"path-glow": {
					"0%, 100%": {
						opacity: "0.7",
						boxShadow: "0 0 5px 0 rgba(155, 135, 245, 0.7)"
					},
					"50%": {
						opacity: "1",
						boxShadow: "0 0 20px 0 rgba(155, 135, 245, 1)"
					}
				},
				"path-progress": {
					"0%": { width: "0%", opacity: "0" },
					"100%": { width: "100%", opacity: "1" }
				},
				"character-appear": {
					"0%": { opacity: "0", transform: "scale(0.8) translateY(20px)" },
					"100%": { opacity: "1", transform: "scale(1) translateY(0)" }
				},
				"breathe": {
					"0%, 100%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.05)" }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 0.7s ease-out',
				'fade-down': 'fade-down 0.7s ease-out',
				'fade-in': 'fade-in 1s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'float': 'float 5s ease-in-out infinite',
				"float-slow": "float-slow 5s ease-in-out infinite",
				"pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
				"rotate-slow": "rotate-slow 12s linear infinite",
				"skill-pop": "skill-pop 0.6s forwards",
				"gradient-x": "gradient-x 10s ease infinite",
				"blur-in": "blur-in 0.7s forwards",
				"glow-pulse": "glow-pulse 3s infinite",
				"float-character": "float-character 6s ease-in-out infinite",
				"path-glow": "path-glow 3s infinite",
				"path-progress": "path-progress 1.5s ease-out forwards",
				"character-appear": "character-appear 1s ease-out forwards",
				"breathe": "breathe 4s ease-in-out infinite"
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'tech-pattern': "url('/public/tech-pattern.svg')",
				'dots-pattern': 'radial-gradient(rgba(155, 135, 245, 0.1) 1px, transparent 1px)',
				'grid-pattern': 'linear-gradient(to right, rgba(155, 135, 245, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(155, 135, 245, 0.05) 1px, transparent 1px)',
				"dark-gradient": "linear-gradient(135deg, rgba(17, 17, 20, 0.9) 0%, rgba(10, 10, 12, 0.95) 100%)",
				"glow-conic": "conic-gradient(from 180deg at 50% 50%, #9b87f5 0deg, #1A1F2C 360deg)",
				"grid-pattern-dark": "linear-gradient(to right, rgba(155, 135, 245, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(155, 135, 245, 0.1) 1px, transparent 1px)",
				"darker-gradient": "linear-gradient(180deg, #111114 0%, #0a0a0c 100%)",
				"card-gradient": "linear-gradient(145deg, rgba(27, 27, 31, 0.6) 0%, rgba(18, 18, 22, 0.8) 100%)",
				"cursor-gradient": "linear-gradient(135deg, rgba(12, 12, 15, 0.9) 0%, rgba(8, 8, 10, 0.95) 100%)",
				"cursor-glow": "radial-gradient(circle at 50% 50%, rgba(155, 135, 245, 0.15), transparent 70%)",
				"path-pattern": "repeating-linear-gradient(90deg, rgba(155, 135, 245, 0.2) 0px, rgba(155, 135, 245, 0.2) 5px, transparent 5px, transparent 10px)"
			},
			backgroundSize: {
				'dots-sm': '20px 20px',
				'grid-sm': '20px 20px',
			},
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
