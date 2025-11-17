/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string
  readonly VITE_SITE_NAME: string
  readonly VITE_SITE_DESCRIPTION: string
  readonly VITE_GA_MEASUREMENT_ID: string
  readonly VITE_ENABLE_ANALYTICS: string
  readonly VITE_DOMAINS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
