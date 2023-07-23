export default class MinecraftSkin {
    constructor(name) {
        this.name = name;
    }

    async init() {
        let uuid = await fetch(`https://api.mojang.com/users/profiles/minecraft/${this.name}`);
        if(uuid.status != 200) throw new Error("Failed to Initialize Minecraft Skin Object: " + data.errors.message);
        uuid = (await uuid.json()).id;
        
        const skin = await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`);
        if(skin.status != 200) throw new Error("Failed to Initialize Minecraft Skin Object: " + data.errors.message);
        this.skin = JSON.parse(atob((await skin.json()).properties[0].value)).textures.SKIN.url;
        
        return this;
    }

    get url() {
        this.#initCheck();
        return this.skin;
    }

    #initCheck() {
        if(!this.skin) throw new Error("Minecraft Skin Object not Initialized. Did you remember to run '.init()'?.");
    }
}