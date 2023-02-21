import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/models/categoria';
import { Producto } from 'src/app/core/models/producto';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  @Input() producto:Producto = {
    id: 0,
    nombre: "",
    descripcion : "",
    precio : 0,
    existencia: 0,
    valoracion: 0,
    imagenUrl: "",
    idSubcategoria: 0
  }

  categoria:Categoria = {
    id: 0,
    nombre : ""
  };


  constructor() { }

  ngOnInit(): void {    
   this.cargarCategoria();
  }

  cargarCategoria(){

  }


}