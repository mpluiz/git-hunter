import * as Sentry from '@sentry/react'

export const SentryConfig = {
  dsn: import.meta.env.VITE_SENTRY_DNS,
  integrations: [new Sentry.BrowserTracing()],
  tracePropagationTargets: [import.meta.env.VITE_APP_URL],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0
}

export default SentryConfig
