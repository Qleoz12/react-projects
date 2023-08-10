/* eslint-disable prettier/prettier */
import { TcpcItems } from "src/feature/tcpc-items.entity";
import { TcpcItemDto } from "../ecommerce/tcpc-items/dto/tcpc-item.dto";
import { Injectable } from '@nestjs/common';

@Injectable()
export class TcpcItemConverter {

    convertDataToTcpcItemDto(item: TcpcItems) {

        const tcpcItem = new TcpcItemDto();
        tcpcItem.skuItem = item.skuItem;
        tcpcItem.itemName = item.itemName;
        tcpcItem.description = item.description;
        tcpcItem.categoryId = item.categoryId;
        tcpcItem.brandId = item.brandId;
        tcpcItem.tax = item.tax;
        // tcpcItem.idTool = item.idtool;
        tcpcItem.quantityUtensil = item.quantityUtensil;
        tcpcItem.redemptionPoints = item.redemptionPoints;
        tcpcItem.idHomologation = item.idHomologation;
        tcpcItem.idFamily = item.idFamily;
        tcpcItem.asset = item.asset;
        tcpcItem.dateInactive = item.dateInactive;
        tcpcItem.price = item.itemsListaPrecio?.precioBruto
        return tcpcItem;

    }

    convertDataToTcpcItemDtoList(data) {
        return data.map((item) => {
            return this.convertDataToTcpcItemDto(item)
        });
    }
}