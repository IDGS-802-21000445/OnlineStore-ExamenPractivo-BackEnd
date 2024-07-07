import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from './interfaces/Producto';

@Pipe({
  name: 'filterProductos',
  standalone: true
})
export class FilterProductosPipe implements PipeTransform {
  transform(productos: Producto[], nombre: string, categoriaID: number | null): Producto[] {
    if (!productos) return [];
    if (nombre) {
      productos = productos.filter(producto => producto.nombreProducto.toLowerCase().includes(nombre.toLowerCase()));
    }
    if (categoriaID) {
      productos = productos.filter(producto => producto.categoriaID === categoriaID);
    }
    return productos;
  }
}
