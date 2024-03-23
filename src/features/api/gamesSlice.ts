import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gamesApi = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://free-to-play-games-database.p.rapidapi.com/api",
    credentials: "same-origin",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "df09e834d3mshc036eda0cacdf9ep153915jsn9367ed4d464b",
      );
      headers.set(
        "X-RapidAPI-Host",
        "free-to-play-games-database.p.rapidapi.com",
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllGames: builder.query({
      query: () => "/games",
    }),
    getGameById: builder.query({
      query: (arg) => {
        return {
          url: "/game",
          params: {
            id: arg,
          },
        };
      },
    }),
  }),
});

export const { useGetAllGamesQuery, useGetGameByIdQuery } = gamesApi;
