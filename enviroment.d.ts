declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_VALIDATE_NUMBER_ACCESS_KEY: string;
        }
    }
}

export {};
