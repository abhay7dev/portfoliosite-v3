import { XboxLive } from "../config.js";
import XboxLiveClient from "../services/xbl-client.js";

const xblClient = await new XboxLiveClient(XboxLive.EMAIL, XboxLive.PASSWORD).init();

export default async (req, res) => {
    
    /* res.data. */

    return res.render("xbox");
}