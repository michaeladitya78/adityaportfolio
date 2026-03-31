import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

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
			// REFINED MODERNISM TYPOGRAPHY SYSTEM
			fontFamily: {
				// Headings: Outfit (loaded first, takes priority)
				display: ['Outfit', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
				// Body: Plus Jakarta Sans (loaded first)
				body: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
				// Serif for editorial headings
				serif: ['Instrument Serif', 'Georgia', 'serif'],
				// System font stack (default sans)
				sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
				// Code
				mono: ['JetBrains Mono', 'SF Mono', 'ui-monospace', 'Consolas', 'monospace'],
			},

			// DEEP SLATE + WARM AMBER COLOR PALETTE
			colors: {
				// Shadcn base colors (keep for compatibility)
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',

				// Brand Primary - Deep Slate/Blue
				primary: {
					DEFAULT: '#627D98',
					50: '#F0F4F8',
					100: '#D9E2EC',
					200: '#BCCCDC',
					300: '#9FB3C8',
					400: '#829AB1',
					500: '#627D98',
					600: '#486581',
					700: '#334E68',
					800: '#243B53',
					900: '#102A43',
					foreground: '#FFFFFF',
				},

				// Brand Accent - Warm Amber
				accent: {
					DEFAULT: '#F59E0B',
					50: '#FFFBEB',
					100: '#FEF3C7',
					200: '#FDE68A',
					300: '#FCD34D',
					400: '#FBBF24',
					500: '#F59E0B',
					600: '#D97706',
					700: '#B45309',
					800: '#92400E',
					900: '#78350F',
					foreground: '#0F172A',
				},

				// Neutral Grays (Slate)
				gray: {
					50: '#F8FAFC',
					100: '#F1F5F9',
					200: '#E2E8F0',
					300: '#CBD5E1',
					400: '#94A3B8',
					500: '#64748B',
					600: '#475569',
					700: '#334155',
					800: '#1E293B',
					900: '#0F172A',
				},

				// Semantic colors
				success: {
					DEFAULT: '#10B981',
					light: '#D1FAE5',
				},
				warning: {
					DEFAULT: '#F59E0B',
					light: '#FEF3C7',
				},
				error: {
					DEFAULT: '#EF4444',
					light: '#FEE2E2',
				},
				info: {
					DEFAULT: '#3B82F6',
					light: '#DBEAFE',
				},

				// Shadcn compatibility
				secondary: {
					DEFAULT: '#627D98',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#EF4444',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#F1F5F9',
					foreground: '#64748B'
				},
				popover: {
					DEFAULT: '#FFFFFF',
					foreground: '#0F172A'
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#0F172A'
				},
			},

			// PROFESSIONAL ANIMATIONS
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-down': {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'marquee-diagonal': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-50%)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-in-out',
				'fade-up': 'fade-up 0.7s ease-out',
				'fade-down': 'fade-down 0.7s ease-out',
				'float': 'float 5s ease-in-out infinite',
				'float-slow': 'float 8s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'marquee-diagonal': 'marquee-diagonal 30s linear infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
			},
			backgroundSize: {
				'shimmer': '200% 100%',
			},
		}
	},
	plugins: [
		tailwindcssAnimate,
		typography,
	],
} satisfies Config;
