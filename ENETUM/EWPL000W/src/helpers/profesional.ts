import { getCookie } from "./Cookie";

enum ROL {
  CIUDADANO, PROFESIONAL
}

const isProfesional = ():boolean =>{
  return getCookie('pc_profesional')==='true';
};

const getRol = ():ROL =>{
  return isProfesional() ? ROL.PROFESIONAL : ROL.CIUDADANO;
};

export {isProfesional, getRol, ROL};