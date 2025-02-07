/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';

import Markdown from 'react-markdown';

import { Drawer } from '../atoms/Drawer';
import { Button } from '../atoms/Button';
import { TimesIcon } from '@/assets/icons/TimesIcon';
import { HeaderContainer } from '../atoms/HeaderContainer';
import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';

export interface TosDrawerProps {
    markdownText: string;
    isOpen: boolean;
    onClose: () => void;
}

export const TosDrawer: React.FC<TosDrawerProps> = ({ isOpen, onClose, markdownText }) => {
    return (
        <Drawer
            isOpen={isOpen}
            setIsOpen={onClose}
            header={
                <HeaderContainer className="flex-row-reverse">
                    <Button variant="icon" icon={<TimesIcon />} onClick={() => onClose()} />
                </HeaderContainer>
            }
        >
            <div className=" flex flex-col mt-[72px] h-full px-2 max-w-full overflow-auto">
                <Markdown
                    components={{
                        h3: ({ node, ...props }) => (
                            <Heading className="mb-4" text={props.children as string} {...props} />
                        ),
                        p: ({ node, ...props }) => (
                            <Paragraph className="mb-4 last-of-type:mb-0" {...props}>
                                {props.children}
                            </Paragraph>
                        )
                    }}
                >
                    {markdownText}
                </Markdown>
            </div>
        </Drawer>
    );
};
