import { GameBG } from "../types.ts";
import { Link } from "react-router-dom";

export default function GameCardBg({ game }: { game: GameBG }) {
  return (
    <div className="shadow-2xl bg-gray-700 rounded-md w-365 border-neutral-700 border content-center flex gap-10 p-4 sm:w-[90%] md:w-[80%] lg:w-[70%] font-bold">
      <div className="flex flex-col gap-6 items-center">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="rounded-md shadow-2xl hidden md:block"
          width={500}
        />
        <Link
          className="bg-blue-500 px-2 py-1 rounded-md text-white w-full text-center hover:bg-blue-600 transition-colors duration-300 text-2xl"
          target="_blank"
          to={game.game_url}
        >
          Play
        </Link>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="border-b-4 border-gray-400 pb-2">
          <h2 className="text-3xl text-ellipsis uppercase">{game.title}</h2>
        </div>
        <p className="text-xl font-medium">
          Genre: <span className="text-blue-400">{game.genre}</span>
        </p>
        <p className="text-xl font-medium">
          Developer: <span className="text-blue-400">{game.developer}</span>
        </p>
        <p className="text-xl font-medium">
          Release date:{" "}
          <span className="text-blue-400">{game.release_date}</span>
        </p>
        <p className="text-xl font-medium">
          Publisher: <span className="text-blue-400">{game.publisher}</span>
        </p>
        <p className="text-gray-400 italic text-md font-medium">
          {game.short_description}
        </p>
        <div></div>
        <div className="border-t-2 border-gray-400 pt-2">
          <h4 className="text-xl text-ellipsis">About {game.title}</h4>
        </div>
        <div className="text-gray-400 text-sm text-justify pr-2 font-medium ">
          {game.description}
        </div>
      </div>
    </div>
  );
}
