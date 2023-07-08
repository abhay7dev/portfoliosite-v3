export const root = new URL("./", import.meta.url).pathname;
export const NODE_ENV = process.env.NODE_ENV ?? "development";
export const PORT = process.env.PORT || 8080;
export const SERVER_TIME_ZONE = Intl.DateTimeFormat().resolvedOptions().timeZone;