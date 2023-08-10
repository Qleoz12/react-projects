import { useState } from "react";
import { links } from "..";
import { NavLink } from "react-router-dom";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const baseLinkClass =
    "text-3xl border-b-8 hover:text-intense-orange hover:border-intense-orange text-intense-orange font-bold transition ease";

  // const baseLinkClass = "hover:border-b-8 hover:border-intense-orange hover:text-intense-orange font-bold text-3xl text-white"
  const linkClass = `${baseLinkClass} border-intense-orange `;

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="block md:hidden">
      <div className="items-center">
        <button onClick={toggleMenu}>Menu</button>
        <div
          className={`origin-top-right absolute pt-10  min-h-screen z-20 inset-x-0 top-24 sm:top-28 bottom-0 bg-[#44000099] ${
            isOpen ? "block " : "hidden"
          }`}
        >
          <span className="absolute h-full inset-x-0 bg-[#00000080] inset-y-0 " />
          <div
            className="py-16 absolute inset-x-0"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <ul className="mx-auto max-w-xs flex justify-center flex-col gap-8">
              {links.map(({ to, label }) => (
                <li key={label} className="">
                  <NavLink
                    to={to}
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className={({ isActive }) =>
                      isActive
                        ? linkClass
                        : `${baseLinkClass} text-white border-transparent`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col justify-center mt-7 gap-7">
              <li className="w-full bg-fire-red py-3">
                <NavLink
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className={`text-3xl hover:text-intense-orange font-bold transition ease flex max-w-xs mx-auto w-full text-white`}
                >
                  Pide aquí
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
