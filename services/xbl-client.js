import { authenticate } from '@xboxreplay/xboxlive-auth';
import XboxLiveAPI from "@xboxreplay/xboxlive-api";

export default class XboxLiveClient {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    async init() {
        const info = await authenticate(this.email, this.password);
        this.userXuid = info.xuid;
        this.authorization = {
            userHash: info.user_hash,
            XSTSToken: info.xsts_token
        };
        this.init = true;
        return this;
    }

    async screenshots() {
        this.#initCheck();
        // (await screenshots()).values.forEach((value) => console.log(value.contentLocators[0].uri));
        return await XboxLiveAPI.getPlayerScreenshotsFromMediaHub(this.userXuid, this.authorization);
    }

    async gameClips() {
        this.#initCheck();
        // (await xbl.gameClips()).values.forEach((value) => console.log(value.contentLocators[0].uri))
        return await XboxLiveAPI.getPlayerGameClipsFromMediaHub(this.userXuid, this.authorization);
    }

    #initCheck() {
        if(!this.init) throw new Error("Valorant Character Object not Initialized. Did you remember to run '.init()'?.");
    }

};