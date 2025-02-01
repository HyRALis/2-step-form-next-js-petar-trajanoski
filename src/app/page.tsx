import { Button } from '@/components/ui/atoms/Button';
import { Container } from '@/components/ui/atoms/Container';
import { Heading } from '@/components/ui/atoms/Heading';
import { Paragraph } from '@/components/ui/atoms/Paragraph';
import { Header } from '@/components/ui/molecules/Header';
import { Input } from '@/components/ui/molecules/Input';
import { Tabs } from '@/components/ui/molecules/Tabs';

export default function Home() {
    return (
        <div className="flex flex-col h-screen justify-center items-center font-[family-name:var(--font-hanken-grotesk)] text-darkBlue">
            <Header />
            <Container className="mt-[96px] h-full">
                <div className="flex justify-center items-center my-[9px]">
                    <Tabs tabs={['1', '2']} />
                </div>
                <div className="flex flex-col py-[24px] space-y-[16px]">
                    <Heading text="Some introductions" />
                    <Input label="First Name" errorMessage="This field is required" placeholder="Your first name" />
                    <Input label="Last Name" placeholder="Your last name" />
                </div>
                <div className="flex flex-col py-[24px] space-y-[8px]">
                    <Button variant="primary" className="w-full" size="md" text="Continue" />
                    <Button variant="transparent" className="w-full" size="md" text="Already have an account?" />
                </div>
                <Paragraph text="Version 0.1.0" className="text-center mt-[24px]" />
            </Container>
        </div>
    );
}
