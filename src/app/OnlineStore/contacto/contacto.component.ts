import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  datosContacto = {
    direccion: 'Blv Campestre 2001, 37150 León, Guanajuato',
    telefono: '477 773 4627',
    atencionCliente: 'Lunes a Viernes, 9am - 6pm',
    email: 'contactoBMW@gmail.com'
  };

  constructor() { }

  ngOnInit(): void { }
}
