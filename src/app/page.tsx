import { FormContainer } from '@/components/features/forms/organisms/FormContainer';
import { Header } from '@/components/general/molecules/Header';

export default function Home() {
    return (
        <div className="flex flex-col flex-grow-0 flex-shrink-0 h-screen justify-center items-center font-[family-name:var(--font-hanken-grotesk)] text-darkBlue overflow-hidden">
            <Header />
            <FormContainer />
        </div>
    );
}
