import {NavLink} from "react-router-dom"
import {EstrellaIcon} from "../../components/Icons"

export const Error404 = () => {
  return (
    <article className="flex flex-col mx-auto max-w-md py-36">
      <header className="flex flex-col justify-center">
        <header className="flex justify-center items-center gap-8">
          <div className="w-6 sm:w-8 fill-golden-yellow">
            <EstrellaIcon />
          </div>
          <div className="w-10 sm:w-12 fill-golden-yellow">
            <EstrellaIcon />
          </div>
          <div className="w-6 sm:w-8 fill-golden-yellow">
            <EstrellaIcon />
          </div>
        </header>
        <section className="flex justify-center font-ifc-insane-rodeo text-7xl sm:text-9xl text-fire-red">
          <span>(</span>
          <span>ERROR</span>
          <span>)</span>
        </section>
      </header>
      <section className="flex justify-center font-ifc-insane-rodeo-bold text-8xl sm:text-9xl text-chocolate-brown">
        <span>&lt;</span>
        <span className="mx-4">404</span>
        <span>&gt;</span>
      </section>
      <footer className="flex justify-center">
        <NavLink to="/" className={"bg-chocolate-brown px-6 py-2 font-ifc-insane-rodeo-bold text-2xl text-light-ivory rounded-full"}>
          Volver a la pagina principal
        </NavLink>
      </footer>
    </article>
  )
}
