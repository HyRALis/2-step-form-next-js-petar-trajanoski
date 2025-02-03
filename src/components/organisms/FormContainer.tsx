'use client';

import React from 'react';
import { Container } from '../ui/atoms/Container';
import { Tabs } from '../ui/molecules/Tabs';
import { FormTab2 } from './FormTab2';
// import { FormTab1 } from './FormTab1';

export const FormContainer = () => {
    return (
        <Container className="pt-24 mb-6 h-full overflow-auto">
            <div className="flex justify-center items-center my-[9px]">
                <Tabs tabs={['1', '2']} />
            </div>
            {/* <SearchBar getSearchResults={logQueryString} /> */}
            {/* <FormTab1 /> */}
            <FormTab2 />
        </Container>
    );
};
