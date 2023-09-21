import BeverageItemGroup from "./BeverageItemGtoup";

// interface MenuItem {

//     BeverageItemGroups: Array<BeverageItemGroup>
//     skuItem: string;
//     itemName: string;
//     description: string;
//     categoryId: {
//       categoryId: number;
//       name: string;
//       order: number;
//       brandId: string;
//       image: string;
//       dateCreate: string;
//       active: number;
//       dateInactive: string;
//     };
//     brandId: {
//       brandId: string;
//       name: string;
//       orderGeneralId: string;
//       identification: string | null;
//       phoneFijo: string;
//       cellPhone: string;
//       address: string | null;
//       email: string | null;
//       dateCreate: string;
//       active: number;
//     };
//     tax: number;
//     quantityUtensil: number;
//     redemptionPoints: number;
//     idHomologation: string;
//     idFamily: string;
//     asset: number;
//     dateInactive: string;
//     price: number;
//   }

class MenuItem {
  BeverageItemGroups: Array<BeverageItemGroup> = [];
  skuItem = "";
  itemName = "";
  description = "";
  categoryId = {
    categoryId: 0,
    name: "",
    order: 0,
    brandId: "",
    image: "",
    dateCreate: "",
    active: 0,
    dateInactive: "",
  };
  brandId = {
    brandId: "",
    name: "",
    orderGeneralId: "",
    identification: null,
    phoneFijo: "",
    cellPhone: "",
    address: null,
    email: null,
    dateCreate: "",
    active: 0,
  };
  tax = 0;
  quantityUtensil = 0;
  redemptionPoints = 0;
  idHomologation = "";
  idFamily = "";
  asset = 0;
  dateInactive = "";
  price = 0;
}
  
export default MenuItem;