const { env } = process;

// Essentials
export const root = new URL("./", import.meta.url).pathname;
export const NODE_ENV = env.NODE_ENV || "production";
export const PORT = env.PORT || 8080;
export const SERVER_TIME_ZONE = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Valorant Stuff
export const Valorant = {
    NAME: env.VALORANT_NAME || "MisterChief7",
    TAG: env.VALORANT_TAG || "00000",
    API_KEY: env.VALORANT_API_KEY || ""
}

// Xbox Stuff
export const XboxLive = {
    EMAIL: env.XBOX_LIVE_EMAIL,
    PASSWORD: env.XBOX_LIVE_PASSWORD
}

// Minecraft Stuff
export const MINECRAFT_JAVA_USERNAME = env.MINECRAFT_JAVA_USERNAME || "MisterChief007";

// GitHub
export const GITHUB = {
    USERNAME: env.GITHUB_USERNAME || "EpicGamer007",
    TOKEN: env.GITHUB_TOKEN || "",
}