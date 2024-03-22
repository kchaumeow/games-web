import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const gamesApi = createApi({
  reducerPath: "games",
  
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.freetogame.com/api/games",
    mode: "no-cors",
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'df09e834d3mshc036eda0cacdf9ep153915jsn9367ed4d464b');
      headers.set('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com');
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAllGames: builder.query({
      query: () => "",
    })
  })
})

export const {useGetAllGamesQuery} = gamesApi;