import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ApiProvider} from "@reduxjs/toolkit/query/react";
import {gamesApi, useGetAllGamesQuery} from "./features/api/gamesSlice";

function App() {
  const {data, isLoading, isSuccess, isError, error} = useGetAllGamesQuery();
  console.error(error);
  const [count, setCount] = useState(0);
  return (
    <div className="text-center text-5xl font-bold h-screen items-center ">
      Hello World!
      <div className="bg-cyan-950 rounded-2xl text-2xl p-4 mx-auto w-1/6 mt-3">
        <p className="m-4 text-3xl text-red-300">Counts: {count}</p>
        <button className="text-red-500 bg-amber-200 px-8 py-2 rounded-xl"
                onClick={() => setCount((count) => count + 1)}>Click!
        </button>
      </div>
      {isLoading && (<p>Loading...</p>)}
      {isError && (<p>There is an error</p>)}
      {isSuccess && (<div>{JSON.stringify(data)}</div>)}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={gamesApi}>
      <App/>
    </ApiProvider>
  
  </React.StrictMode>,
)
