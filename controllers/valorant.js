import { Valorant } from "../config.js";
import ValorantPlayer, { mapData, titleData } from "../services/valorant-player.js";

const player = await new ValorantPlayer(Valorant.NAME, Valorant.TAG, Valorant.API_KEY).init();

export default async (req, res) => {
    
    res.data.player = {
        name: player.name,
        card: player.card,
        level: player.level,
        title: undefined,
    };

    const rankDetails = (await player.rankDetails()).data;

    res.data.rankDetails = {
        current: {
            rank: rankDetails.current_data.rank,
            icon: rankDetails.current_data.images.large,
            season: rankDetails.current_data.season
        },
        peak: {
            rank: rankDetails.highest_rank.patched_tier,
            season: rankDetails.highest_rank.season
        },
    }

    const latestRankedGame = ((await player.latestRankedGame()).data)[0];
    const map = await mapData(latestRankedGame.metadata.map);
    res.data.player.title = await titleData(latestRankedGame.players.all_players.filter(p => p.puuid == player.puuid)[0].player_title);
    res.data.latestGame = {
        map,
        date: new Date(latestRankedGame.metadata.game_start * 1000).toLocaleString("en-US", { timeZone: "America/Los_Angeles" }).split(", ")[0],
        players: {
            red: latestRankedGame.players.red.map((player) => { return { 
                name: player.name, 
                level: player.level, 
                card: player.assets.card.wide,
                agent: {
                    name: player.character,
                    card: player.assets.agent.small,
                },
                stats: { kills: player.stats.kills, deaths: player.stats.deaths, assists: player.stats.assists },  
            }}),
            blue: latestRankedGame.players.blue.map((player) => { return { 
                name: player.name, 
                level: player.level, 
                card: player.assets.card.wide,
                agent: {
                    name: player.character,
                    card: player.assets.agent.small,
                },
                stats: { kills: player.stats.kills, deaths: player.stats.deaths, assists: player.stats.assists },  
            }}),
        },
        redWins: latestRankedGame.teams.red.rounds_won,
        blueWins: latestRankedGame.teams.blue.rounds_won,
        result: latestRankedGame.teams.red.rounds_won == latestRankedGame.teams.red.rounds_lost ? "draw" : ( latestRankedGame.teams.red.has_won ? "red" : "blue"),
    };

    return res.render("valorant");
}