import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/models/producto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  @Input() listaProductos:Producto[] = [];

  descripcionActiva:boolean= false;

  productoSeleccionado:Producto = {
    id: 0,
    nombre: "",
    descripcion : "",
    precio : 0,
    existencia: 0,
    valoracion: 0,
    imagenUrl: "",
    idSubcategoria: 0,
  };

  constructor( ) { }

  ngOnInit(): void {
  }

    abrirDescripcion(producto:Producto):void{
    this.descripcionActiva = !this.descripcionActiva;
    this.productoSeleccionado = producto;
    }

    cerrarDescripcion(){
        this.descripcionActiva = !this.descripcionActiva;
    }

    agregarAlCarrito(producto:Producto){
    
    }

}