import { CheckmarkCircle } from '@/assets/icons/CheckmarkCircle';
import React from 'react';
import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';
import Link from 'next/link';

export const ConfirmationScreen = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center font-[family-name:var(--font-hanken-grotesk)] text-darkBlue">
            <div className="flex flex-col justify-center items-center text-primary min-h-max space-y-2">
                <CheckmarkCircle />
                <Heading className="text-2xl" text="Congratulations" />
                <Paragraph className="text-base">Welcome to your own 25</Paragraph>
                <Link href={'/'} className="text-primary font-bold text-xs cursor-pointer">
                    Back to start
                </Link>
            </div>
        </div>
    );
};
