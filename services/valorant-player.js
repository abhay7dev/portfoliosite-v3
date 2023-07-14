export default class ValorantPlayer {
    constructor(name, tag, apiKey = "") {
        this.name = name;
        this.tag = tag;
        this.apiKey = apiKey;
    }
    async init() {
        const data = await this.basicInfo();
        if(data.status == 200) this.init = true;
        else throw new Error("Failed to Initialize Valorant Character Object: " + data.errors.message);
        return this;
    }
    async basicInfo() {
        const data = await (await this.#request(`/v1/account/${this.name}/${this.tag}?force=true`)).json();
        this.#setData(data);
        return data;
    }

    async rankDetails() {
        this.#initCheck();
        return await (await this.#request(`/v2/by-puuid/mmr/${this.affinity}/${this.puuid}`)).json();
    }
    async latestRankedGame() {
        this.#initCheck();
        return await (await this.#request(`/v3/by-puuid/matches/${this.affinity}/${this.puuid}?mode=competitive&size=1`)).json();
    }

    #initCheck() {
        if(!this.init) throw new Error("Valorant Character Object not Initialized. Did you remember to run '.init()'?.");
    }
    #setData(info) {
        if(info.status == 200) {
            this.puuid      = info.data.puuid;
            this.affinity   = info.data.region;
            this.level      = info.data.account_level;
            this.card       = info.data.card;
        }
    }
    #request(path) {
        return fetch(`https://api.henrikdev.xyz/valorant${path}`, {
            headers: { "Authorization": this.apiKey }
        });
    }
};