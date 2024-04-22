'use client'

import { i18n, Locale } from '.'
import { dictionary } from './dictionaries'

export const getDictionaryUseClient = (locale: Locale) => {
  return dictionary[locale] ?? dictionary[i18n.defaultLocale as Locale]
}
