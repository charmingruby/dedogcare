'server-only'

import { i18n, Locale } from '.'
import { dictionary } from './dictionaries'

export const getDictionaryServerOnly = (locale: Locale) => {
  return dictionary[locale] ?? dictionary[i18n.defaultLocale as Locale]
}
