export default class MinecraftSkin {
    constructor(username, uuid = "") {
        this.username = username;
        this.uuid = uuid;
    }

    async init() {
        if(!this.uuid) this.#fetchuuid();
        return this;
    }

    get url() {
        this.#initCheck();
        this.#fetchskin();
        return this.skin;
    }

    async #fetchuuid() {
        let uuidData = await fetch(`https://api.mojang.com/users/profiles/minecraft/${this.username}`);
        if(uuidData.status != 200) throw new Error("Failed to Initialize Minecraft Skin Object: " + data.errors.message);
        this.uuid = (await uuidData.json()).id;
    }
    async #fetchskin() {
        const skin = await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${this.uuid}`);
        if(skin.status != 200) throw new Error("Failed to Initialize Minecraft Skin Object: " + data.errors.message);
        this.skin = (JSON.parse(atob((await skin.json()).properties[0].value)).textures.SKIN.url).replace("http:", "https:");
    }

    #initCheck() {
        if(!this.uuid) throw new Error("Minecraft Skin Object not Initialized. Did you remember to run '.init()'?.");
    }
}