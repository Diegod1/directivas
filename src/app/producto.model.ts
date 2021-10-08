export class Producto{
  /*nombre: string = '';
  apellido: string = '';

  constructor(nombre: string, apellido: string){
     this.nombre = nombre;
     this.apellido = apellido;
  }
  */

  constructor(public codigo: string, public descripcion: string, public precio:number){}
}
