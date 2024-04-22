import createMiddleware from 'next-intl/middleware'

import { i18n } from './i18n'

export default createMiddleware(i18n)

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
