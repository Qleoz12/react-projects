/* eslint-disable prettier/prettier */
import { TcpcItemsCategoryDto } from "src/ecommerce/tcpc-items-categories/dto/tcpc-items-category.dto";
import { Injectable } from '@nestjs/common';
import { TcpcItemsCategories } from "src/feature/tcpc-items-categories";
import { TcprCategoriasListaPrecio } from "src/feature/tcpr_categorias-listaprecio";

@Injectable()
export class TcpcItemsCategoriesConverter {

  static toDto(entity: TcpcItemsCategories): TcpcItemsCategoryDto {
    const dto = new TcpcItemsCategoryDto();
    dto.id = entity.categoryId;
    dto.name = entity.name;
    dto.order = entity.order;
    dto.brandId = entity.brandId;
    dto.image = entity.image;
    dto.dateCreate = entity.dateCreate;
    dto.active = entity.active;
    dto.dateInactive = entity.dateInactive;
    return dto;
  }

  static toEntity(dto: TcpcItemsCategoryDto): TcpcItemsCategories {
    const entity = new TcpcItemsCategories();
    entity.categoryId = dto.id;
    entity.name = dto.name;
    entity.order = dto.order;
    entity.brandId = dto.brandId;
    entity.image = dto.image;
    entity.dateCreate = dto.dateCreate;
    entity.active = dto.active;
    entity.dateInactive = dto.dateInactive;
    return entity;
  }

  static toDtoList(data: [TcpcItemsCategories]) {
    return data.map((item) => {
      return this.toDto(item)
    });
  }

  static toDtoListPrice(entity: TcprCategoriasListaPrecio): TcpcItemsCategoryDto {
    const dto = new TcpcItemsCategoryDto();
    dto.id = entity.id;
    dto.name = entity.categories.name;
    dto.order = entity.categories.order;
    dto.brandId = entity.categories.brandId;
    dto.image = entity.categories.image;
    dto.dateCreate = entity.categories.dateCreate;
    dto.active = entity.categories.active;
    dto.dateInactive = entity.categories.dateInactive;
    return dto;
  }

}