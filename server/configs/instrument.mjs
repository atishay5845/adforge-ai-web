// import "dotenv/config";
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://c309abccfa4bd76a5edfdefefbba12dd@o4511274532405248.ingest.de.sentry.io/4511723430805584",
  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
});