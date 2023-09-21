// interface BeverageItem {
//   skuItem: string;
//   idGrupoSeleccion: string;
//   nombreGrupoSeleccion: string;
//   skuItemSeleccion: string;
//   ItemSeleccion: string;
//   precioSeleccion: string;
//   tipoSeleccion: number;
//   SeleccionPorDefecto: number;
//   cantidadMaxima: number;
//   descripcionProducto: string;
// }


class BeverageItem {
  constructor(
    public skuItem: string,
    public idGrupoSeleccion: string,
    public nombreGrupoSeleccion: string,
    public skuItemSeleccion: string,
    public ItemSeleccion: string,
    public precioSeleccion: string,
    public tipoSeleccion: number,
    public SeleccionPorDefecto: number,
    public cantidadMaxima: number,
    public descripcionProducto: string
  ) {}
}

export default BeverageItem;
