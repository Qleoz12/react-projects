class GreetDTO {
    codigoUsuarioModificacion: string;
    descripcionEs: string;
    descripcionEu: string;
    fechaAlta: string;
    fechaBaja: string;
    fechaFinVigencia: string;
    fechaFinVigenciaString: string;
    fechaInicioVigencia: string;
    fechaInicioVigenciaString: string;
    idDestacado: number;
    idDestacadoExterno: number;
    orden: number;
    perfil: string;
    tipoEnlace: string;
    urlEnlaceEs: string;
    urlEnlaceEu: string;
    urlImagenEs: string;
    urlImagenEu: string;

    //utils
    description?: string;
    url?: string;
    link?:string ="#"

    constructor({
      codigoUsuarioModificacion,
      descripcionEs,
      descripcionEu,
      fechaAlta,
      fechaBaja,
      fechaFinVigencia,
      fechaFinVigenciaString,
      fechaInicioVigencia,
      fechaInicioVigenciaString,
      idDestacado,
      idDestacadoExterno,
      orden,
      perfil,
      tipoEnlace,
      urlEnlaceEs,
      urlEnlaceEu,
      urlImagenEs,
      urlImagenEu,
    }: {
      codigoUsuarioModificacion: string;
      descripcionEs: string;
      descripcionEu: string;
      fechaAlta: string;
      fechaBaja: string;
      fechaFinVigencia: string;
      fechaFinVigenciaString: string;
      fechaInicioVigencia: string;
      fechaInicioVigenciaString: string;
      idDestacado: number;
      idDestacadoExterno: number;
      orden: number;
      perfil: string;
      tipoEnlace: string;
      urlEnlaceEs: string;
      urlEnlaceEu: string;
      urlImagenEs: string;
      urlImagenEu: string;
    }) {
      this.codigoUsuarioModificacion = codigoUsuarioModificacion;
      this.descripcionEs = descripcionEs;
      this.descripcionEu = descripcionEu;
      this.fechaAlta = fechaAlta;
      this.fechaBaja = fechaBaja;
      this.fechaFinVigencia = fechaFinVigencia;
      this.fechaFinVigenciaString = fechaFinVigenciaString;
      this.fechaInicioVigencia = fechaInicioVigencia;
      this.fechaInicioVigenciaString = fechaInicioVigenciaString;
      this.idDestacado = idDestacado;
      this.idDestacadoExterno = idDestacadoExterno;
      this.orden = orden;
      this.perfil = perfil;
      this.tipoEnlace = tipoEnlace;
      this.urlEnlaceEs = urlEnlaceEs;
      this.urlEnlaceEu = urlEnlaceEu;
      this.urlImagenEs = urlImagenEs;
      this.urlImagenEu = urlImagenEu;
    }
  }
  
  export default GreetDTO;
  