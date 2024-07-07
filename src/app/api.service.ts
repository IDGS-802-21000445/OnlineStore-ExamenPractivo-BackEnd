import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './OnlineStore/interfaces/Producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5209/api/Auto/Productos'; // URL de tu API

  constructor(private http: HttpClient) { }



  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
  getImageUrlFromPath(localPath: string): string {
    // Aquí puedes ajustar la lógica para convertir la ruta local en una URL válida para la imagen
    // Por ejemplo, podrías simplemente devolver la ruta local si Angular puede acceder directamente a ella
    // O podrías realizar ajustes según la estructura de tu aplicación
    return 'http://localhost:5209/api/Imagenes/' + encodeURIComponent(localPath);
  }
}
