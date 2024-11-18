import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c3de9be1671bd9063a855df842a4f095@o4508313970475008.ingest.us.sentry.io/4508313975652352",
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      colorScheme: "system",
    }),
  ],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});
