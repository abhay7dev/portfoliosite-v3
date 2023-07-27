import { MINECRAFT_JAVA_USERNAME } from "../config.js";
import MinecraftSkin from "../services/minecraft-skin.js";

const Skin = new MinecraftSkin(MINECRAFT_JAVA_USERNAME);
await Skin.init();

export default (req, res) => {
    res.data.skin = Skin.url;
    res.data.username = Skin.username;
    return res.render("minecraft");
}