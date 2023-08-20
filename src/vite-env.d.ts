/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CLERK_API: string
    readonly VITE_APP_URL: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}