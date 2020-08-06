const { parsed: localEnv } = require("dotenv").config();

module.exports = {
  publicRuntimeConfig: {
    CONTACT_EMAIL: localEnv && localEnv.CONTACT_EMAIL,
    NEXT_PUBLIC_SITE_NAME: localEnv && localEnv.NEXT_PUBLIC_SITE_NAME,
    NEXT_PUBLIC_DEFAULT_DOMAIN: localEnv && localEnv.NEXT_PUBLIC_DEFAULT_DOMAIN,
    RECAPTCHA_SITE_KEY: localEnv && localEnv.RECAPTCHA_SITE_KEY,
    GOOGLE_ANALYTICS: localEnv && localEnv.GOOGLE_ANALYTICS,
    REPORT_EMAIL: localEnv && localEnv.REPORT_EMAIL,
  }
};
