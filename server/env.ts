import { cleanEnv, num, str, bool } from "envalid";

const env = cleanEnv(process.env, {
  PORT: num({ default: 3000 }),
  SITE_NAME: str({ example: "Kutt" }),
  DEFAULT_DOMAIN: str({ example: "kutt.it" }),
  LINK_LENGTH: num({ default: 6 }),
  POSTGRESQL_ADDON_HOST: str({ default: "localhost" }),
  POSTGRESQL_ADDON_PORT: num({ default: 5432 }),
  POSTGRESQL_ADDON_DB: str({ default: "postgres" }),
  POSTGRESQL_ADDON_USER: str(),
  POSTGRESQL_ADDON_PASSWORD: str(),
  DB_SSL: bool({ default: false }),
  DB_POOL_MIN: num({ default: 2 }),
  DB_POOL_MAX: num({ default: 10 }),
  NEO4J_DB_URI: str({ default: "" }),
  NEO4J_DB_USERNAME: str({ default: "" }),
  NEO4J_DB_PASSWORD: str({ default: "" }),
  REDIS_HOST: str({ default: "127.0.0.1" }),
  REDIS_PORT: num({ default: 6379 }),
  REDIS_PASSWORD: str({ default: "" }),
  USER_LIMIT_PER_DAY: num({ default: 50 }),
  NON_USER_COOLDOWN: num({ default: 10 }),
  DEFAULT_MAX_STATS_PER_LINK: num({ default: 5000 }),
  CUSTOM_DOMAIN_USE_HTTPS: bool({ default: false }),
  JWT_SECRET: str(),
  ADMIN_EMAILS: str({ default: "" }),
  RECAPTCHA_SITE_KEY: str(),
  RECAPTCHA_SECRET_KEY: str(),
  GOOGLE_SAFE_BROWSING_KEY: str({ default: "" }),
  GOOGLE_ANALYTICS: str({ default: "" }),
  GOOGLE_ANALYTICS_UNIVERSAL: str({ default: "" }),
  MAIL_HOST: str(),
  MAIL_PORT: num(),
  MAIL_SECURE: bool({ default: false }),
  MAIL_USER: str(),
  MAIL_FROM: str({ default: "", example: "Kutt <support@kutt.it>" }),
  MAIL_PASSWORD: str(),
  REPORT_EMAIL: str({ default: "" }),
  CONTACT_EMAIL: str({ default: "" }),
  RAVEN_DSN: str({ default: "" }),
  APP_URL: str({ default: "http://localhost:3000" }),
  OIDC_CONNEXION_ENABLED: bool({ default: false }),
  OIDC_DISCOVERY_URL: str(),
  OIDC_CLIENT_ID: str(),
  OIDC_CLIENT_SECRET: str(),
  OIDC_BUTTON_LABEL: str(),
  OIDC_BUTTON_LOGO_URL: str()
});

export default env;
