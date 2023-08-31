import { TcpcItemsCategories } from 'src/feature/tcpc-items-categories';
import { TcpcItemsCategoryDto } from './dto/tcpc-items-category.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TcpcItemsCategoriesConverter } from 'src/converters/tcpc-items-category-converter';
import { TcprCategoriasListaPrecio } from 'src/feature/tcpr_categorias-listaprecio';

@Injectable()
export class TcpcItemsCategoriesService {
  constructor(
    @InjectRepository(TcpcItemsCategories)
    private repository: Repository<TcpcItemsCategories>,
    @InjectRepository(TcprCategoriasListaPrecio)
    private repositoryListPrice: Repository<TcprCategoriasListaPrecio>,
  ) {}
  // async create(dto: TcpcItemsCategoryDto) {
  //   try {
  //     const { brandId, ...information } = dto;
  //     const data = await this.repository.save({
  //       ...information,
  //       brand: { brandId },
  //     });
  //     return {
  //       statusCode: HttpStatus.OK,
  //       message: 'Categoria creado con exito',
  //       data,
  //     };
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: error?.message,
  //     };
  //   }
  // }

  async findAll() {
    try {
      const data = await this.repository.find();
      const dataConverted = data.map((entity) =>
        TcpcItemsCategoriesConverter.toDto(entity),
      );
      if (data.length != 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Categorias obtenido con exito',
          data: dataConverted,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Categorias no existen',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async findByListPrice(listaprecio: number) {
    try {
      const data = await this.repositoryListPrice.find({
        relations: {
          categories: true,
        },
        where: {
          listaPrecio: listaprecio,
        },
      });
      const dataConverted = data.map((entity) =>
        TcpcItemsCategoriesConverter.toDtoListPrice(entity),
      );
      if (data.length != 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Categorias obtenido con exito',
          data: dataConverted,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Categorias no existen',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  // async findOne(categoryId: number) {
  //   try {
  //     const data = await this.repository.findOneBy({ categoryId });
  //     if (data) {
  //       return {
  //         statusCode: HttpStatus.OK,
  //         message: 'Categoria obtenido con exito',
  //         data,
  //       };
  //     } else {
  //       return {
  //         statusCode: HttpStatus.BAD_REQUEST,
  //         message: 'Categoria no existe',
  //       };
  //     }
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: error?.message,
  //     };
  //   }
  // }

  // async update(id: number, dto: TcpcItemsCategoryDto) {
  //   try {
  //     const { brandId, ...information } = dto;

  //     const data = await this.repository
  //       .createQueryBuilder()
  //       .update(TcprPointSale)
  //       .set({ ...information, brand: { brandId } })
  //       .where(`id = ${id}`)
  //       .execute();
  //     if (data.affected !== 0) {
  //       return {
  //         statusCode: HttpStatus.OK,
  //         message: 'Categoria actualizado con exito',
  //         affected: data.affected,
  //       };
  //     } else {
  //       return {
  //         statusCode: HttpStatus.BAD_REQUEST,
  //         message: 'Categoria no existe',
  //       };
  //     }
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: error?.message,
  //     };
  //   }
  // }

  // async remove(categoryId: number) {
  //   try {
  //     const data = await this.repository.delete({ categoryId });
  //     if (data.affected !== 0) {
  //       return {
  //         statusCode: HttpStatus.OK,
  //         message: 'Categoria eliminado con exito',
  //         affected: data.affected,
  //       };
  //     } else {
  //       return {
  //         statusCode: HttpStatus.BAD_REQUEST,
  //         message: 'Categoria no existe',
  //         affected: data.affected,
  //       };
  //     }
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: error?.message,
  //     };
  //   }
  // }
}
