const defaultLocale = 'en-US'
const langs = [defaultLocale, 'pt-BR', 'fr', 'de'] as const
const locales = langs as unknown as string[]

export const i18n = { defaultLocale, locales, localeDetection: true }

export type Locale = (typeof langs)[number]

export interface LanguageRootProps {
  params: { lang: Locale }
}

export interface LanguageProps {
  lang: Locale
}
