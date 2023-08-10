import { NavLink } from "react-router-dom";
import { ChevronDown } from "../Icons"
import { useEffect, useRef, useState } from "react"
import styles from './style.module.css'

export const DropdownExit = () => {
  const [isOpen, setIsOpen] = useState(false);
  const refComponente = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (refComponente.current && !refComponente.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
      <div className="dropdown items-center">
      <div
        className='w-9 h-9 flex justify-center items-center'
        onClick={toggleMenu}
      >
        {isOpen ?
          <div className="absolute stroke-chocolate-brown stroke-2 w-8">
            <ChevronDown />
          </div>
          :
          <div className="stroke-chocolate-brown stroke-2 w-8">
            <ChevronDown />
          </div>
        }
      </div>
      {isOpen && (
        <div className="absolute inset-0 bg-inherit hover:cursor-pointer h-24">
          <div
            ref={refComponente}
            className={`origin-top-right absolute right-0 bottom-0 w-56`}
          >
            <div className={`relative rounded-l-lg rounded-br-lg bg-white shadow-xs`}>
              <div className={`${styles.triangle} absolute -top-6 bg-white right-0 text-white`}>Hola</div>
              <div
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <NavLink
                  to="/admin/login"
                  className="text-chocolate-brown block px-2 py-1 text-lg font-bold hover:bg-gray-100 transition hover:text-black"
                >
                  Cerrar sesión
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
