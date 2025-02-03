'use client';

import React from 'react';
import { Container } from '../ui/atoms/Container';
import { Tabs } from '../ui/molecules/Tabs';
import { FormTab2 } from './FormTab2';
import { useUserContext } from '@/context/MainContext';
import { FormTab1 } from './FormTab1';

export const FormContainer = () => {
    const {
        user: { tab }
    } = useUserContext();

    return (
        <Container className="pt-24 mb-6 h-full overflow-auto">
            <div className="flex justify-center items-center my-[9px]">
                <Tabs tabs={[1, 2]} />
            </div>
            {tab === 1 ? <FormTab1 /> : <FormTab2 />}
        </Container>
    );
};
