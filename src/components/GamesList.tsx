import GameCardSm from "./GameCardSm.tsx";
import { GameSm } from "../types.ts";

export default function GamesList({ games }: { games: GameSm[] }) {
  return (
    <div className="flex flex-wrap gap-10 justify-center mt-2 h-full">
      {games.map((game: GameSm) => (
        <GameCardSm key={game.id} game={game} />
      ))}
    </div>
  );
}
