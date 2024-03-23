import { GameBG } from "../types.ts";
import { Link } from "react-router-dom";
import ListItem from "./ListItem.tsx";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function GameCardBg({ game }: { game: GameBG }) {
  return (
    <div className="shadow-2xl bg-[#1C1E22] rounded-md w-365 border-neutral-700 border content-center flex flex-col p-4 sm:w-[90%] md:w-[80%] lg:w-[70%] font-bold">
      <div className="flex gap-10">
        <div className="flex flex-col gap-6 items-center">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="rounded-sm shadow-2xl hidden md:block"
            width={500}
          />
          <Link
            className="bg-blue-500 px-2 py-1 rounded-sm w-1/2 text-white w-full text-center hover:bg-blue-600 transition-colors duration-300 text-2xl"
            target="_blank"
            to={game.game_url}
          >
            Play
          </Link>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="border-b-4 border-gray-400 pb-2 justify-between flex">
            <h2 className="text-3xl text-ellipsis uppercase">{game.title}</h2>
            <div
              className={
                "w-fit py-1 px-2 rounded " +
                (game.status === "Live" ? "bg-green-600" : "bg-red-600")
              }
            >
              {game.status}
            </div>
          </div>
          <ListItem characteristic={"Genre"} value={game.genre} />
          <ListItem characteristic={"Developer"} value={game.developer} />
          <ListItem characteristic={"Release date"} value={game.release_date} />
          <ListItem characteristic={"Publisher"} value={game.publisher} />
          <ListItem characteristic={"Platform"} value={game.platform} />
          <div className="border-t-2 border-gray-400 pt-2">
            <h4 className="text-xl text-ellipsis">About {game.title}</h4>
          </div>
          <div className="text-gray-400 text-md text-justify pr-2 font-medium ">
            {game.description}
          </div>

          {game.minimum_system_requirements && (
            <div className="border border-gray-400 p-2 rounded my-3 ">
              <h4 className="text-xl">Minimal requirements</h4>
              <ListItem
                characteristic={"OS"}
                value={game.minimum_system_requirements.os}
              />
              <ListItem
                characteristic={"Processor"}
                value={game.minimum_system_requirements.processor}
              />
              <ListItem
                characteristic={"Memory"}
                value={game.minimum_system_requirements.memory}
              />
              <ListItem
                characteristic={"Graphics"}
                value={game.minimum_system_requirements.graphics}
              />
              <ListItem
                characteristic={"Storage"}
                value={
                  game.minimum_system_requirements.storage === "?"
                    ? "No"
                    : game.minimum_system_requirements.storage
                }
              />
            </div>
          )}
          <div className="content-center flex"></div>
        </div>
      </div>

      {game.screenshots && (
        <>
          <h4 className="text-2xl text-center pb-2 text-blue-500">
            Screenshots
          </h4>
          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              {game.screenshots.map((screenshot, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="bg-[#272B30]">
                      <CardContent className="flex aspect-video items-center justify-center p-px">
                        <img src={screenshot.image} className="rounded" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#272B30]" />
            <CarouselNext className="bg-[#272B30]" />
          </Carousel>
        </>
      )}
    </div>
  );
}
