import { useState } from "react";
import { Header } from "../Header"
import { Button } from "../buttons"
import { Modal } from "@mui/material";

export const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false)
  const handleClick = () => setOpen(true)

  return (
    <section id="dashboard">
      <Header title={"dashboard"}>
        <Button onClick={handleClick} className={"border-fire-red text-fire-red"}>
          Calendario
        </Button>

      </Header>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-light-ivory w-[820px] rounded-[40px]  mx-auto absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
          <div className=" py-10 px-20">
            <h2 className="text-5xl font-ifc-insane-rodeo-bold text-center mb-6 text-fire-red">Historial * Calendario</h2>
            </div>
          </div>
      </Modal>
    </section>
  )
}
