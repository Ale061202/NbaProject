// Generated by https://quicktype.io

export interface PlayersResponse {
    _internal: Internal;
    league:    Player;
}

export interface Internal {
    pubDateTime:             string;
    igorPath:                string;
    xslt:                    string;
    xsltForceRecompile:      string;
    xsltInCache:             string;
    xsltCompileTimeMillis:   string;
    xsltTransformTimeMillis: string;
    consolidatedDomKey:      string;
    endToEndTimeMillis:      string;
}

export interface Player {
    standard:   Distintivos[];
    africa:     any[];
    Distintivos: Distintivos[];
    vegas:      Distintivos[];
    utah:       Distintivos[];
}

export interface Distintivos {
    firstName:             string;
    lastName:              string;
    temporaryDisplayName?: string;
    personId:              string;
    teamId:                string;
    jersey:                string;
    isActive:              boolean;
    pos:                   Pos;
    heightFeet:            string;
    heightInches:          string;
    heightMeters:          HeightMeters;
    weightPounds:          string;
    weightKilograms:       string;
    dateOfBirthUTC:        string;
    teamSitesOnly?:        TeamSitesOnly;
    teams:                 Team[];
    draft:                 Draft;
    nbaDebutYear:          string;
    yearsPro:              string;
    collegeName:           string;
    lastAffiliation:       string;
    country:               string;
    isallStar?:            boolean;
}

export interface Draft {
    teamId:     string;
    pickNum:    string;
    roundNum:   string;
    seasonYear: string;
}

export enum HeightMeters {
    Empty = "",
    The102 = "1.02",
    The178 = "1.78",
    The18 = "1.8",
    The183 = "1.83",
    The185 = "1.85",
    The188 = "1.88",
    The19 = "1.9",
    The193 = "1.93",
    The196 = "1.96",
    The198 = "1.98",
    The201 = "2.01",
    The203 = "2.03",
    The206 = "2.06",
    The208 = "2.08",
    The211 = "2.11",
    The213 = "2.13",
    The216 = "2.16",
    The218 = "2.18",
    The221 = "2.21",
}

export enum Pos {
    C = "C",
    CF = "C-F",
    Empty = "",
    F = "F",
    FC = "F-C",
    FG = "F-G",
    G = "G",
    GF = "G-F",
}

export interface TeamSitesOnly {
    playerCode:         string;
    posFull:            PosFull;
    displayAffiliation: string;
    freeAgentCode:      string;
}

export enum PosFull {
    Center = "Center",
    CenterForward = "Center-Forward",
    Empty = "",
    Forward = "Forward",
    ForwardCenter = "Forward-Center",
    ForwardGuard = "Forward-Guard",
    Guard = "Guard",
    GuardForward = "Guard-Forward",
}

export interface Team {
    teamId:      string;
    seasonStart: string;
    seasonEnd:   string;
}
