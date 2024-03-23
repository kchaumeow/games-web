import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  console.log(Number.isFinite("0"));
  return (
    <div className="flex flex-col min-h-[100vh]">
      <nav className="flex content-between w-full items-center justify-between px-4 bg-[#1C1E22] z-20">
        <NavLink className="font-bold text-2xl m-3 uppercase" to="/">
          Home
        </NavLink>
        <h2 className="font-bold text-2xl m-3 uppercase">
          Hello from FreeToGame
        </h2>
      </nav>
      <main className="flex flex-col place-items-center grow bg-[#272B30] pb-5">
        <Outlet />
      </main>
      <footer className="bg-[#1C1E22] w-full flex justify-between items-center p-4 text-gray-600 ">
        <div>@FREETOGAME All rights reserved 2024</div>
        <div>Author's Telegram @BugiardoElGagito</div>
      </footer>
    </div>
  );
}
