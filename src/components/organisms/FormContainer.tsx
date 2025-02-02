import React from 'react';
import { Container } from '../ui/atoms/Container';
import { Tabs } from '../ui/molecules/Tabs';
import { FormTab2 } from './FormTab2';
import { FormTab1 } from './FormTab1';

export const FormContainer = () => {
    return (
        <Container className="mt-24 h-full">
            <div className="flex justify-center items-center my-[9px]">
                <Tabs tabs={['1', '2']} />
            </div>
            <FormTab1 />
            <FormTab2 />
        </Container>
    );
};
