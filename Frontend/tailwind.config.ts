import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#9E1B11',
                'primary-light': '#b52317',
                'background-light': '#E2E8F0',
                'background-dark': '#0F172A',
                'surface-dark': '#121212',
                'border-dark': '#1e293b',
            },
            fontFamily: {
                display: ['var(--font-space-grotesk)', 'sans-serif'],
                mono: ['var(--font-jetbrains-mono)', 'monospace'],
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(to bottom, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.95))',
                'scanlines': 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2))',
            },
            backgroundSize: {
                'scanlines': '100% 4px',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
    plugins: [],
}
export default config;
