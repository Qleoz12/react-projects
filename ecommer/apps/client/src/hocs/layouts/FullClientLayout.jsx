import { Outlet } from "react-router-dom";
import { Navbar, Footer, WhatsAppIcon } from "../../components";

export const FullClientLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 sm:pt-28">
        <Outlet />
      </main>
      <aside className="fixed bottom-0 right-0 z-30 p-10">
        <div className=" w-20 fill-light-ivory right-8 top-8 bg-moss-green p-3 rounded-full">
          <WhatsAppIcon />
        </div>
      </aside>
      <Footer />
    </>
  );
};
