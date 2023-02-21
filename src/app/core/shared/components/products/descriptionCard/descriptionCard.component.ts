import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/core/models/producto';

@Component({
  selector: 'app-descriptionCard',
  templateUrl: './descriptionCard.component.html',
  styleUrls: ['./descriptionCard.component.css']
})
export class DescriptionCardComponent implements OnInit {

  @Input() prodSeleccionado:Producto = {
    id: 0,
    nombre: "",
    descripcion : "",
    precio : 0,
    valoracion:0,
    imagenUrl: "",
    existencia: 0,
    idSubcategoria : 0
  };

  @Output() añadirProducto = new EventEmitter<Producto>();

  productosCarrito: Producto[] = [];
  imgSeleccionada:string = "";
  counter:number = 0;

  constructor() {}

  ngOnInit(): void {}

  enviarAlCarrito(){}

}