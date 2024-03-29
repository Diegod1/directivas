import { Component } from '@angular/core';
import { Articulo } from './articulo.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivas';

  codigo:number=0;
  des:string="";
  precio:number=0;
  articulos:Articulo[]=[new Articulo(1,"Cebolla",1000),new Articulo(2,"Papa",1000)];

  agregarArticulo(){

    const resultado=this.articulos.find(esta => esta.codigo===this.codigo);

    if(resultado===undefined){
      Swal.fire(
        'Exito!',
        'Articulo agregado',
        'success'
      )
      this.articulos.push(new Articulo(this.codigo,this.des,this.precio));
    }
    else{
      //alert("Ese codigo ya existe...")
      Swal.fire(
        'Error!',
        'Ese codigo ya existe',
        'error'
      )
    }

  }
  borrarArticulo(art:number){
    this.articulos.splice(art,1);

  }

  seleccArticulo(art:number){

    let seleccion=this.articulos[art];

    this.codigo=seleccion.codigo;
    this.des=seleccion.descripcion;
    this.precio=seleccion.precio;

  }

  modificar(){

    const resultado=this.articulos.find(esta => esta.codigo===this.codigo);

    if(resultado===undefined){
      Swal.fire(
        'Error!',
        'El codigo ha modificar no existe',
        'error'
      )
    }
    else{
      resultado.codigo=this.codigo;
      resultado.descripcion=this.des;
      resultado.precio=this.precio;
    }
  }
}
