// Essentials
export const root = new URL("./", import.meta.url).pathname;
export const NODE_ENV = process.env.NODE_ENV || "production";
export const PORT = process.env.PORT || 8080;
export const SERVER_TIME_ZONE = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Valorant Stuff
export const Valorant = {
    NAME: process.env.VALORANT_NAME || "MisterChief7",
    VALORANT_TAG: process.env.VALORANT_TAG || "00000",
    VALORANT_API_KEY: process.env.VALORANT_API_KEY || ""
}

export const XboxLive = {
    EMAIL: process.env.XBOX_LIVE_EMAIL,
    PASSWORD: process.env.XBOX_LIVE_PASSWORD
}