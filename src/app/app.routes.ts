import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './OnlineStore/pagina-principal/pagina-principal.component';
import { GaleriaProductosComponent } from './OnlineStore/galeria-productos/galeria-productos.component';
import { ContactoComponent } from './OnlineStore/contacto/contacto.component';

export const routes: Routes = [
  { path: 'inicio', component: PaginaPrincipalComponent },
  { path: 'galeria-productos', component: GaleriaProductosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];
