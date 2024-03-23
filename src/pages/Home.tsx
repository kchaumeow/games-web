import { LoaderCircle } from "lucide-react";
import { useGetAllGamesQuery } from "../features/api/gamesSlice.ts";
import Error from "../components/Error.tsx";
import GamesList from "../components/GamesList.tsx";

export default function Home() {
  const {
    data: games,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllGamesQuery("");
  return (
    <main className="flex flex-col items-center w-full h-full">
      <div className="flex flex-col w-full h-full font-bold place-content-center">
        {isLoading && <LoaderCircle className="animate-spin h-40 w-[90%]" />}
        {isError && <Error error={error} />}
        {isSuccess && <GamesList games={games} />}
      </div>
    </main>
  );
}
