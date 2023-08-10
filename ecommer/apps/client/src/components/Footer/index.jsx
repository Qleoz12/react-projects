import { links } from "../Navbar"
import {WhatsAppIcon, FacebookIcon, InstagramIcon, TiktokIcon, ToroIcon, MensajeIcon} from '../Icons'
import { BackgroundImage } from '../BackgroundImage.jsx'

export const Footer = () => {
  return (
    <footer>
      <BackgroundImage image={"/assets/background-maderado.png"} className={"bg-cover"} >
        <aside className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:justify-between mx-auto max-w-5xl text-white py-14 sm:px-12 gap-8">
            <section className="flex flex-row sm:flex-1 sm:flex-col justify-between gap-6 sm:gap-0 px-12 sm:px-0">
              <nav>
                <h3 className="font-bold text-lg">Explorar</h3>
                <ul className="text-sm pb-3">
                  <li>
                    Pedidos en línea
                  </li>
                  {links.map(({label, to}) => (
                    <li key={label}>
                      {label}
                    </li>
                  ))}
                </ul>
              </nav>
              <aside className="text-right sm:text-left">
                <h3 className="font-bold text-lg">Horarios</h3>
                <ul className="text-sm pb-3">
                  <li>
                    <span>De domingo a domingo</span>
                  </li>
                  <li>
                    <span>11:30 am - 8:30</span>
                  </li>
                </ul>
                <h3 className="font-bold text-lg">Domicilios</h3>
                <ul className="text-sm">
                  <li>
                    <span>
                      601 519 09 99
                    </span>
                  </li>
                  <li>
                    <span>
                      300 599 99 00
                    </span>
                  </li>
                </ul>
              </aside>
            </section>
            <section className="flex sm:flex-1 justify-center flex-col">
              <div className="flex justify-center mb-3">
                <div className="fill-white w-32">
                  <ToroIcon />
                </div>
              </div>
              <div className="flex gap-3 justify-center py-4">
                <div className="w-8 fill-chocolate-brown bg-white px-1 pb-0 pt-2">
                  <FacebookIcon />
                </div>
                <div className="w-8 fill-chocolate-brown bg-white p-1.5">
                  <InstagramIcon />
                </div>
                <div className="w-8 fill-chocolate-brown bg-white p-1.5">
                  <WhatsAppIcon />
                </div>
                <div className="w-8 fill-chocolate-brown text-transparent bg-white p-0.5">
                  <TiktokIcon />
                </div>
              </div>
              <article className="text-sm">
                <strong className="flex justify-center text-center">Todos los derechos reservados 2023 &copy;</strong>
                <span className="flex justify-center">Diseñado por<strong className="ml-1">ZamHungry</strong></span>
              </article>
            </section>
            <section className="flex sm:flex-1 flex-col justify-center lg:justify-end items-end">
              <div className="flex sm:flex-col md:flex-row sm:justify-center bg-fire-red lg:w-60 py-2 sm:px-4 px-14 gap-10 sm:gap-0  mb-5 sm:w-auto">
                <div className="hidden md:inline-flex fill-white w-32 h-auto">
                  <MensajeIcon />
                </div>
                <div>
                  <h3 className="flex-1 font-bold text-lg sm:text-center md:text-right">Somos todo oídos</h3>
                  <span className="flex flex-1 text-sm sm:text-center md:text-right">¿Tienes alguna sugerencia, queja o reclamo?</span>
                </div>
              </div>
              <aside className="px-12 sm:px-0">
                <h3 className="font-bold text-lg text-center sm:text-right pb-3">Trabaja con nosotros</h3>
                <div className="flex sm:flex-col justify-between gap-10 sm:items-end">
                  <h3 className="font-bold flex-1 text-lg sm:text-right">Términos y condiciones</h3>
                  <span className="text-sm flex-1 block sm:text-right w-auto md:w-[200px]">Aviso legal, politica de privacidad y politica de cookies</span>
                </div>
              </aside>
            </section>
          </div>
        </aside>
      </BackgroundImage>
    </footer>
  )
}
