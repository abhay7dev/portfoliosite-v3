import { GITHUB } from "../config.js";

export default async (req, res) => {
    const data = await (await fetch(`https://api.github.com/users/${GITHUB.USERNAME}/repos`, {
        headers: {
            "User-Agent": "EpicGamer007",
            "Authorization": "bearer " + GITHUB.TOKEN,
        }
    })).json();
    
    res.data.projects = (data.filter(proj => proj.topics.includes("portfolio-project"))).map(proj => {
        return {
            name: proj.name,
            url: proj.html_url,
            lang: proj.language,
            stars: proj.stargazers_count,
            desc: proj.description
        }
    });
    
    return res.render("projects");
}