import React from "react";
import { Modal } from "@mui/material";
import { Button, ButtonDelete } from "../buttons";

export const ModalDelete = ({ openDelete, handleDelete, setOpenDelete }) => {
  const handleClose = () => setOpenDelete(false);
  return (
    <Modal
      open={openDelete}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="bg-light-ivory w-[820px] rounded-[40px]  mx-auto absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
        <div className=" py-10 px-20">
          <h2 className="font-bold text-5xl text-center mb-6 text-chocolate-brown">
            ¿Deseas eliminar este elemento?
          </h2>
          <footer className="flex justify-center gap-4">
            <Button
              onClick={handleDelete}
              className={"border-fire-red bg-fire-red text-white px-9"}
            >
              Eliminar
            </Button>
            <ButtonDelete onClick={handleClose} className="">
              Cancelar
            </ButtonDelete>
          </footer>
        </div>
      </div>
    </Modal>
  );
};
