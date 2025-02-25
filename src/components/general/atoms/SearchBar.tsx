/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React from 'react';

import { CircleTimesIcon } from '@/assets/icons/CircleTimesIcon';
import { SearchIcon } from '@/assets/icons/SearchIcon';

import { Button } from './Button';

export interface SearchBarProps {
    getSearchResults: (query: string) => void;
}

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(({ getSearchResults }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const [searchQuery, setSearchQuery] = React.useState('');

    React.useEffect(() => {
      getSearchResults(searchQuery);
    }, [searchQuery]);

    const onInputFocus = React.useCallback(() => {
        if (containerRef.current) {
            containerRef.current.classList.add('border-primary');
        }
    }, [containerRef.current]);

    const onInputFocusOut = React.useCallback(() => {
        if (containerRef.current) {
            containerRef.current.classList.remove('border-primary');
        }
    }, [containerRef.current]);

    return (
        <div
            ref={containerRef}
            className="flex items-center justify-between py-4 px-6 w-full rounded-full border-2 border-darkBlue12 focus:border-primary bg-transparent transition-all duration-200 ease-in-out"
        >
            <input
                ref={ref}
                value={searchQuery}
                placeholder="Search"
                className="w-full placeholder:text-light bg-transparent focus:border-none outline-none"
                onFocus={onInputFocus}
                onBlur={onInputFocusOut}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
            {searchQuery ? (
                <Button
                    className="p-0 hover:text-primary"
                    variant="icon"
                    size="xs"
                    icon={<CircleTimesIcon />}
                    onClick={() => setSearchQuery('')}
                />
            ) : (
                <SearchIcon />
            )}
        </div>
    );
});

SearchBar.displayName = 'SearchBar';
