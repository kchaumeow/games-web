import { LoaderCircle } from "lucide-react";
import { useGetAllGamesQuery } from "../features/api/gamesSlice.ts";
import Error from "../components/Error.tsx";
import GamesList from "../components/GamesList.tsx";
import { useState } from "react";
import Filters from "@/components/Filters.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "../../@/components/ui/button.tsx";

export default function Home() {
  const [platform, setPlatform] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [queries, setQueries] = useState({
    "sort-by": "",
  });
  const {
    data: games,
    isLoading,
    isError,
    error,
  } = useGetAllGamesQuery(queries);
  if (isLoading)
    return <LoaderCircle className="animate-spin h-40 w-40 mx-auto my-auto" />;
  if (isError) {
    return <Error error={error} />;
  }
  return (
    <div className="flex flex-col w-full h-full font-bold place-content-center">
      <div className="w-1/2 md:w-1/4 mx-auto mt-5 flex flex-col gap-3 place-items-center">
        <Input
          className="bg-gray-800 border-neutral-700"
          type="text"
          placeholder="Platform"
          onChange={(e) => setPlatform(e.target.value.toLowerCase())}
        />
        <Input
          className="bg-gray-800 border-neutral-700"
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value.toLowerCase())}
        />
        <Button
          className="bg-blue-600 md:w-1/4 w-1/2"
          onClick={() => setQueries((old) => ({ ...old, platform, category }))}
        >
          Search
        </Button>
      </div>
      <Filters
        value={queries["sort-by"]}
        onChange={(value: string) =>
          setQueries((old) => ({ ...old, "sort-by": value }))
        }
      />
      <GamesList games={games} />
    </div>
  );
}
