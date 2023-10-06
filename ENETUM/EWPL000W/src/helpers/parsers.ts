

export function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

export function  stringUTCaStringFechaES ( fecha:string)  {

let arrayFecha = fecha.split(" ")
let fechaMovida = arrayFecha[1] + " " + arrayFecha[2] + " " + arrayFecha[5] + " "+ arrayFecha[3]
let nuevaFecha = new Date(Date.parse(fechaMovida))

return(
[   
    padTo2Digits(nuevaFecha.getDate()),    
    padTo2Digits(nuevaFecha.getMonth() + 1),
    nuevaFecha.getFullYear(),
  ].join('/') +
  ' ' +
  [
    padTo2Digits(nuevaFecha.getHours()),
    padTo2Digits(nuevaFecha.getMinutes()),
    padTo2Digits(nuevaFecha.getSeconds()),
  ].join(':')
);

}