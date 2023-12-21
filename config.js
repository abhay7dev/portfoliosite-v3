const { env } = process;

// General
export const url = env.SITE_URL || "https://abhay7.dev";
export const year = new Date().getFullYear();

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

export const csp = `upgrade-insecure-requests;
                    default-src 'none';
                    child-src 'none';
                    frame-src 'none';
                    frame-ancestors 'none';
                    media-src 'self' *.xboxlive.com;
                    base-uri 'none';
                    object-src 'none';
                    manifest-src 'self';
                    img-src 'self' *.xboxlive.com https://avatars.githubusercontent.com https://textures.minecraft.net https://media.valorant-api.com;
                    connect-src 'self';
                    font-src 'self';
                    style-src 'self';
                    script-src 'self';
                    worker-src 'self';
                    form-action 'none';
                    `.replace(/\s/g, " ");