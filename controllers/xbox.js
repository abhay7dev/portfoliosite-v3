import { XboxLive } from "../config.js";
import XboxLiveClient from "../services/xbl-client.js";

const xblClient = await new XboxLiveClient(XboxLive.EMAIL, XboxLive.PASSWORD).init();

export default async (req, res) => {
    
    // res.data.screenshots = (await xblClient.screenshots()).values.map(value => value.contentLocators[0].uri);
    res.data.clips = (await xblClient.gameClips()).values.map(value => { 
        return {
            url: value.contentLocators[0].uri,
            thumb: value.contentLocators[1].uri  
        } 
    });

    return res.render("xbox");
}