export type GameSm = {
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  platform: string;
  publisher: string;
  release_date: string;
  short_description: string;
  thumbnail: string;
  title: string;
};

export type GameBG = {
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  platform: string;
  publisher: string;
  release_date: string;
  short_description: string;
  thumbnail: string;
  title: string;
  status: string;
  description: string;
  minimum_system_requirements: Requirements;
  screenshots: Screenshot[];
};

type Requirements = {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
};

type Screenshot = {
  id: number;
  image: string;
};
