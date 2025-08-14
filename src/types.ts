export interface PlayerProfile {
  avatar: string;
  player_id: number;
  url: string;
  username: string;
  title?: string;
  followers: number;
  country: string;
  last_online: number;
  joined: number;
  status: string;
  is_streamer: boolean;
  league: string;
}

export interface PlayerStats {
  chess_blitz?: {
    last: {
      rating: number;
      date: number;
      rd: number;
    };
    best?: {
      rating: number;
      date: number;
      game: string;
    };
    record: {
      win: number;
      loss: number;
      draw: number;
    };
  };
  chess_bullet?: {
    last: {
      rating: number;
      date: number;
      rd: number;
    };
    best?: {
      rating: number;
      date: number;
      game: string;
    };
    record: {
      win: number;
      loss: number;
      draw: number;
    };
  };
  chess_rapid?: {
    last: {
      rating: number;
      date: number;
      rd: number;
    };
    best?: {
      rating: number;
      date: number;
      game: string;
    };
    record: {
      win: number;
      loss: number;
      draw: number;
    };
  };
  fide?: number;
  tactics?: {
    highest: {
      rating: number;
      date: number;
    };
    lowest: {
      rating: number;
      date: number;
    };
  };
  puzzle_rush?: {
    best: {
      score: number;
      date: number;
    };
  };
}

export interface GamePlayer {
  rating: number;
  result: string;
  username: string;
  "@id": string;
  uuid: string;
}

export interface PlayerGame {
  url: string;
  pgn: string;
  fen: string;
  start_time?: number; // This field doesn't appear in the raw response
  time_control: string;
  end_time: number;
  rated: boolean;
  accuracies?: {
    white: number;
    black: number;
  };
  tcn: string;
  uuid: string;
  initial_setup: string;
  time_class: string;
  rules: string;
  eco?: string;
  white: GamePlayer;
  black: GamePlayer;
}

export interface PlayerGames {
  games: PlayerGame[];
}

export interface PlayerMonthlyArchives {
  archives: string[];
}

export interface PlayerGamesToMove {
  games: PlayerGame[];
}

export interface PlayerClub {
  "@id": string;
  name: string;
  club_id: number;
  url: string;
  icon: string;
  country: string;
  average_daily_rating: number;
  members_count: number;
  created: number;
  last_activity: number;
  visibility: string;
  join_request: string;
  rules: string;
  description: string;
}

export interface PlayerClubs {
  clubs: PlayerClub[];
}

export interface PlayerTeamMatch {
  "@id": string;
  name: string;
  url: string;
  players: {
    username: string;
    board: number;
  }[];
  board_scores: {
    board: number;
    player_white: {
      username: string;
      rating: number;
    };
    player_black: {
      username: string;
      rating: number;
    };
    result: string;
  }[];
}

export interface PlayerTeamMatches {
  team_matches: PlayerTeamMatch[];
}

export interface PlayerTournament {
  "@id": string;
  name: string;
  url: string;
  status: string;
  players: {
    username: string;
    points: number;
    rank: number;
    is_winner: boolean;
  }[];
}

export interface PlayerTournaments {
  tournaments: PlayerTournament[];
}
