import { FormContainer } from '@/components/organisms/FormContainer';
import { Header } from '@/components/ui/molecules/Header';

export default function Home() {
    return (
        <div className="flex flex-col h-screen justify-center items-center font-[family-name:var(--font-hanken-grotesk)] text-darkBlue">
            <Header />
            <FormContainer />
        </div>
    );
}
