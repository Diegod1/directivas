export class Articulo{
  codigo:number=0;
  descripcion:string="";
  precio:number=0;

  constructor(codigo:number,des:string,precio:number){
    this.codigo=codigo;
    this.descripcion=des;
    this.precio=precio;
  }

}
