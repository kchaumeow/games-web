import { useParams } from "react-router-dom";
import { useGetGameByIdQuery } from "../features/api/gamesSlice.ts";
import { LoaderCircle } from "lucide-react";
import GameCardBg from "../components/GameCardBg.tsx";

export default function Game() {
  const { id } = useParams();
  const {
    data: game,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetGameByIdQuery(id);
  return (
    <div className="flex flex-col w-full font-bol place-items-center mt-10">
      {isError && (
        <>
          <h2 className="text-blue-500 text-2xl">Error</h2>
          <div>Something went wrong</div>
          <div>{JSON.stringify(error)}</div>
        </>
      )}
      {isLoading && (
        <LoaderCircle className="animate-spin h-40 w-40 mx-auto my-auto" />
      )}
      {isSuccess && <GameCardBg game={game} />}
    </div>
  );
}
