import { MINECRAFT_JAVA_USERNAME } from "../config.js";
import MinecraftSkin from "../services/minecraft-skin.js";

const Skin = new MinecraftSkin(MINECRAFT_JAVA_USERNAME);
await Skin.init();

export default (req, res) => {
    return res.json({ "skin": Skin.url });
}