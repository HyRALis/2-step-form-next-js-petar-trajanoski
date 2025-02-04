import type { Metadata } from "next";
import { EB_Garamond, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import { tailwindMerge } from '@/utils/tailwindMerge';
import { UserProvider } from '@/context/MainContext';
import { Analytics } from '@vercel/analytics/next';

const ebGaramond = EB_Garamond({
    variable: '--font-eb-garamond',
    subsets: ['latin']
});

const hkGrotesk = Hanken_Grotesk({
    variable: '--font-hanken-grotesk',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: '2 Step Form ',
    description: 'Crated for interview purposes, hope you like it! :)'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={tailwindMerge([`${ebGaramond.variable}`, `${hkGrotesk.variable}`, 'antialiased'])}>
                <Analytics />
                <UserProvider>{children}</UserProvider>
            </body>
        </html>
    );
}
