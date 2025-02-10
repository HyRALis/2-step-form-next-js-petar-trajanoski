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
                slideInFromBottom: 'slideInFromBottom 0.2s ease-in-out',
                slideOutToBottom: 'slideOutToBottom 0.2s ease-in-out',
                slideInFromLeft: 'slideInFromLeft 0.8s ease-in-out',
                slideOutToLeft: 'slideOutToLeft 0.8s ease-in-out',
                slideInFromRight: 'slideInFromRight 0.8s ease-in-out',
                slideOutToRight: 'slideOutToRight 0.8s ease-in-out'
            },
            keyframes: {
                slideInFromBottom: {
                    '0%': { transform: 'translateY(100%)', opacity: '0%' },
                    '100%': { transform: 'translateY(0)', opacity: '100%' }
                },
                slideOutToBottom: {
                    '0%': { transform: 'translateY(0)', opacity: '0%' },
                    '100%': { transform: 'translateY(100%)', opacity: '100%' }
                },
                slideInFromLeft: {
                    '0%': { display: 'none', transform: 'translateX(calc(-100% - 2rem))' },
                    '100%': { display: 'flex', transform: 'translateX(0)' }
                },
                slideInFromRight: {
                    '0%': { display: 'none', transform: 'translateX(0%)' },
                    '100%': { display: 'flex', transform: 'translateX(calc(-100% - 2rem))' }
                },
                slideOutToLeft: {
                    '0%': { display: 'flex', transform: 'translateX(0)', opacity: '100%' },
                    '100%': { display: 'none', transform: 'translateX(-100%)', opacity: '0%' }
                },
                slideOutToRight: {
                    '0%': { display: 'flex', transform: 'translateX(0)', opacity: '100%' },
                    '100%': { display: '', transform: 'translateX(100%)', opacity: '0%' }
                }
            }
        }
    },
    plugins: []
} satisfies Config;
