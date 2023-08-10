import { NavLink } from "react-router-dom"
import { ToroIcon } from "../Icons"
import { DropdownExit } from "./DropdownBubble"

export const Navigator = () => {
  return (
    <div className="fixed z-30 w-full bg-light-ivory">
      <div className="mx-auto pr-10">
        <nav className="flex justify-between">
          <div className="h-24 sm:h-28 md:h-28 flex items-center">
            <NavLink to="/admin/">
              <img className="w-36 sm:w-60" src="/assets/LOGO-PW.png" alt="Logo" />
            </NavLink>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-chocolate-brown text-xl font-bold">Admin</span>
            <button type="button" className="flex items-center gap-1">
              <div className="fill-light-ivory bg-fire-red rounded-full p-2 w-16">
                <ToroIcon />
              </div>
              <DropdownExit />
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}
