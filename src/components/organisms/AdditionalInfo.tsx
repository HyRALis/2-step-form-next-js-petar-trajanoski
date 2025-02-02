'use client';

import React from 'react';

import { Paragraph } from '../ui/atoms/Paragraph';
import { TosDrawer } from '../ui/molecules/MarkdownDrawer';
import { tosMarkdownString } from '@/utils/tosMarkdownString';
import { privacyPolicyMarkdownString } from '@/utils/privacyPolicyMarkdownString';

export const AdditionalInfo = () => {
    const [isOpenTos, setIsOpenTos] = React.useState(false);
    const [isOpenPrivacy, setIsOpenPrivacy] = React.useState(false);

    return (
        <>
            <Paragraph>
                By clicking `Continue` you agree to our{' '}
                <span className="text-primary font-bold text-xs cursor-pointer" onClick={() => setIsOpenTos(true)}>
                    terms and conditions
                </span>{' '}
                and{' '}
                <span className="text-primary font-bold text-xs cursor-pointer" onClick={() => setIsOpenPrivacy(true)}>
                    privacy policy
                </span>
            </Paragraph>
            <TosDrawer isOpen={isOpenTos} onClose={() => setIsOpenTos(false)} markdownText={tosMarkdownString} />
            <TosDrawer
                isOpen={isOpenPrivacy}
                onClose={() => setIsOpenPrivacy(false)}
                markdownText={privacyPolicyMarkdownString}
            />
        </>
    );
};
