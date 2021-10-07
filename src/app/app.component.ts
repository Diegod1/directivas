import { Component } from '@angular/core';
import { Producto } from './producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Administración de prodúctos';
  codigoInput: string = '';
  descripcionInput: string = '';
  precioInput: string = '';

  productos: Producto[] = [
    new Producto('AC989080', 'Papas margarita 34g', '2100'),
    new Producto('AC889080', 'Arroz Marina 1k', '1800'),
    new Producto('AC987780', 'Choco ramo 230 g', '3000'),
  ];

  agregarProducto() {
    let Producto1 = new Producto(
      this.codigoInput,
      this.descripcionInput,
      this.precioInput
    );
    this.productos.push(Producto1);
  }
  borrarProducto() {
    this.productos.pop();
  }
}
