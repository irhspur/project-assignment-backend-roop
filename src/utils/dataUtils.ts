import { TRound, TTeamData } from "./types";

export const getTeams = (rounds: TRound[]) => {
    const teams = new Set<string>();
    rounds.forEach(round => round.matches.forEach(match => {
        teams.add(match.team1);
        teams.add(match.team2);
    }))
    return Array.from(teams);
}

export const formatTeamwiseMatches = (rounds: TRound[]) => {
    const formattedData: { [key: string]: TTeamData } = {}
    rounds.forEach(round => round.matches.forEach(match => {
        const stats = calculateStats(match.score)
        formattedData[match.team1] = (formattedData[match.team1] || { name: match.team1, win: stats.team1.win || 0, loss: stats.team1.loss })
    }))
    return formattedData;
}

export const calculateStats = (score: { ft: [] }) => {

    const [team1Score = 0, team2Score = 0] = score.ft

    if (team1Score > team2Score) {
        return { team1: { win: 1 }, team2: { loss: 1 } }
    } else {
        return { team2: { win: 1 }, team1: { loss: 1 } }
    }

}