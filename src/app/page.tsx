import { FormContainer } from '@/components/organisms/FormContainer';
import { FocusTrap } from '@/components/ui/atoms/FocusTrap';
import { Header } from '@/components/ui/molecules/Header';

export default function Home() {
    return (
        <FocusTrap isActive>
            <div className="flex flex-col h-screen justify-center items-center font-[family-name:var(--font-hanken-grotesk)] text-darkBlue overflow-hidden">
                <Header />
                <FormContainer />
            </div>
        </FocusTrap>
    );
}
