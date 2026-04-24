// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
// const Sentry = require("@sentry/node");
import * as Sentry from "@sentry/node";
Sentry.init({
  dsn: "https://005a032214e849384fa2393b0f0895a4@o4511274532405248.ingest.de.sentry.io/4511274541776976",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});