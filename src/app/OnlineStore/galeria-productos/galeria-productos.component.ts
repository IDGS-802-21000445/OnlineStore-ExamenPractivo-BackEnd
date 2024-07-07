import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/Producto';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterProductosPipe } from '../filter-productos.pipe';

@Component({
  selector: 'app-galeria-productos',
  standalone: true,
  imports: [CommonModule, FormsModule,FilterProductosPipe],
  templateUrl: './galeria-productos.component.html',
  styleUrl: './galeria-productos.component.css'
})
export class GaleriaProductosComponent implements OnInit {
  productos: Producto[] = [];
  filtroNombre: string = '';
  filtroCategoria: string = '';
  categorias = [
    { id: '1', nombre: 'Automóviles' },
    { id: '2', nombre: 'Motos' },
    { id: '3', nombre: 'Accesorios' }
  ];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProductos().subscribe((data: Producto[]) => {
      this.productos = data;
    });
  }

  getProductosFiltrados(): Producto[] {
    return this.productos.filter(producto => {
      const coincideNombre = producto.nombreProducto.toLowerCase().includes(this.filtroNombre.toLowerCase());
      const coincideCategoria = this.filtroCategoria === '' || (this.filtroCategoria === '1' && producto.categoriaID === 1);
      return coincideNombre && coincideCategoria;
    });
  }

  getNombreImagenDesdeRuta(urlImagen: string): string {
    const nombreArchivo = this.extraerNombreArchivo(urlImagen);
    switch (nombreArchivo) {
      case 'M850i Gran Coupé 2024':
        return 'assets/images/M850i Gran Coupé 2024.png';
      case '320i 2024':
        return 'assets/images/320i 2024.png';
      case 'i4 M50 Electico 2024':
        return 'assets/images/i4 M50 Electico 2024.png';
      case 'i4 M50':
        return 'assets/images/i4 M50.png';
      case 'i5 2024':
        return 'assets/images/i5 2024.png';
      case 'iX2 xDrive30 2024':
        return 'assets/images/iX2 xDrive30 2024.png';
      case 'M3 Competition 2024':
        return 'assets/images/M3 Competition 2024.png';
      case 'M235i Gran Coupé 2024':
        return 'assets/images/M235i Gran Coupé 2024.png';
      case 'X3 M 2024':
        return 'assets/images/X3 M 2024.png';
      case 'X6 M Sport 2024':
        return 'assets/images/X6 M Sport 2024.png';
      default:
        return 'assets/images/default-image.png';
    }
  }

  private extraerNombreArchivo(urlImagen: string): string {
    const partesRuta = urlImagen.split('\\');
    const nombreArchivoConExtension = partesRuta[partesRuta.length - 1];

    const nombreArchivo = nombreArchivoConExtension.split('.')[0];

    return nombreArchivo.trim();
  }
}
