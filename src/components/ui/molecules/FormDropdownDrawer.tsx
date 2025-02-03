import { TimesIcon } from '@/assets/icons/TimesIcon';
import { Button } from '../atoms/Button';
import { Drawer } from '../atoms/Drawer';
import { SearchBar } from '../atoms/SearchBar';
import { CountryPrefixList } from './CountryPrefixList';
import { HeaderContainer } from '../atoms/HeaderContainer';

export interface FormDropdownDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const FormDropdownDrawer: React.FC<FormDropdownDrawerProps> = ({ isOpen, onClose }) => {
    return (
        <Drawer
            header={
                <HeaderContainer className="flex items-center justify-between space-x-2 py-2 pl-6 pr-2">
                    <SearchBar getSearchResults={(query) => console.log(query)} />
                    <Button variant="icon" icon={<TimesIcon />} onClick={onClose} />
                </HeaderContainer>
            }
            isOpen={isOpen}
        >
            <CountryPrefixList onChange={({ prefix, name }) => console.log(prefix, name)} />
        </Drawer>
    );
};
