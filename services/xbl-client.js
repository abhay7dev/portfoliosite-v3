import { authenticate } from '@xboxreplay/xboxlive-auth';
import XboxLiveAPI from "@xboxreplay/xboxlive-api";

import { scheduleJob } from "node-schedule";

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
        
        const updateAuthJob = scheduleJob(new Date(info.expires_on), async () => {
            return await this.init();
        });

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
        if(!this.init) throw new Error("Xbox Live Client not Initialized. Did you remember to run '.init()'?.");
    }

};