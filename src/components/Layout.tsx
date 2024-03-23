import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="flex content-between w-full items-center justify-between px-4">
        <NavLink className="font-bold text-2xl m-3 uppercase" to="/">
          Home
        </NavLink>
        <h2 className="font-bold text-2xl m-3 uppercase">
          Hello from FreeToGame
        </h2>
      </nav>
      <Outlet />
    </>
  );
}
