import { Container } from '@/components/ui/atoms/Container';
import { Heading } from '@/components/ui/atoms/Heading';
import { Header } from '@/components/ui/molecules/Header';
import { Tabs } from '@/components/ui/molecules/Tabs';

export default function Home() {
    return (
        <div className="flex flex-col h-screen justify-center items-center font-[family-name:var(--font-hanken-grotesk)]">
            <Header hasArrow />
            <Container className="mt-[96px] h-full">
                <div className="flex justify-center items-center my-[9px]">
                    <Tabs tabs={['1', '2']} />
                </div>
                <div className="flex items-center py-[24px] spacе-y-[24px]">
                    <Heading text="Some introductions" />
                </div>
            </Container>
        </div>
    );
}
