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
                darkBlue4: 'var(--darkBlue4)'
            }
        }
    },
    plugins: []
} satisfies Config;
