import { Link } from "react-router-dom";
import { GameSm } from "../types.ts";

export default function GameCardSm({ game }: { game: GameSm }) {
  return (
    <Link
      to={`/games/${game.id}`}
      rel="noopener noreferrer"
      className="shadow-2xl hover:scale-110
       transition duration-300 bg-gray-700 rounded-md w-365 border-neutral-700 border content-center items-center flex flex-col text-gray-400 hover:text-white"
    >
      <img src={game.thumbnail} alt={game.title} className="rounded-t-md" />
      <div className="flex w-[90%] justify-between m-4 items-center">
        <p className="text-md whitespace-nowrap text-ellipsis w-200">
          {game.title}
        </p>
        <Link
          className="bg-blue-500 px-2 py-1 rounded-md text-white hover:bg-blue-600 transition duration-300"
          to={`/games/${game.id}`}
          target="_blank"
        >
          Play
        </Link>
      </div>
    </Link>
  );
}
