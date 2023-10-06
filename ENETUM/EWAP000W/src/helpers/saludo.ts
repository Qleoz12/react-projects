export const saludar = (saludo : string, nombre:string):string =>  {
  return `${saludo}, ${capitalizeName(nombre)} `;
}

function capitalizeName(name: string ) : string{
  return name.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
}
