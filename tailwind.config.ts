import type { Config } from "tailwindcss";

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: 'var(--primary)',
                primaryDark: 'var(--primaryDark)',
                primaryLight: 'var(--primaryLight)',
                primaryLighter: 'var(--primaryLighter)',
                secondary: 'var(--secondary)',
                danger: 'var(--danger)',
                darkBlue: 'var(--darkBlue)',
                darkBlue12: 'var(--darkBlue12)',
                darkBlue4: 'var(--darkBlue4)',
                lightGray: 'var(--lightGray)'
            },
            animation: {
                slideInFromLeft: 'slideInFromLeft 0.2s ease-out',
                slideOutToLeft: 'slideOutToLeft 0.2s ease-out',
                slideInFromRight: 'slideInFromRight 0.2s ease-out',
                slideOutToRight: 'slideOutToRight 0.2s ease-out'
            },
            keyframes: {
                slideInFromLeft: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0%' },
                    '100%': { transform: 'translateX(0)', opacity: '100%' }
                },
                slideInFromRight: {
                    '0%': { transform: 'translateX(100%)', opacity: '0%' },
                    '100%': { transform: 'translateX(0)', opacity: '100%' }
                },
                slideOutToLeft: {
                    '0%': { transform: 'translateX(0)', opacity: '100%' },
                    '100%': { transform: 'translateX(-100%)', opacity: '0%' }
                },
                slideOutToRight: {
                    '0%': { transform: 'translateX(0)', opacity: '100%' },
                    '100%': { transform: 'translateX(100%)', opacity: '0%' }
                }
            }
        }
    },
    plugins: []
} satisfies Config;
