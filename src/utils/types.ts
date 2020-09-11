export type TClub = {
    code: string;
    country: string;
    name: string;
};

export type TData = {
    name: string;
    clubs: TClub[];
};

export type TMatches = {
    date: string;
    team1: string;
    team2: string;
    score: { ft: [] };
};

export type TRound = {
    name: string;
    matches: TMatches[];
};

export type TMatchDetails = {
    name: string;
    rounds: TRound[];
};

export type TTeamData = {
    name: string;
    matchesPlayed?: number;
    win?: number;
    loss?: number;
    draw?: number;
    goalsFor?: number;
    goalsAgains?: number;
    goalsDifference?: number;
    points?: number;
}