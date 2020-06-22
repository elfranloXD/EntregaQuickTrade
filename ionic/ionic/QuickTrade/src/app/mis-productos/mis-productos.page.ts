import { Component, OnInit } from '@angular/core';
import { listaproductosservices } from '../services/listaproductos.services';
import { AngularFireDatabase } from '@angular/fire/database'    //Para poder usar la bbdd aquí.
import { ActivatedRoute } from '@angular/router';
import { IProductoTec, IProductoHog, IProductoInm, IProductoMot, IProductoKey } from '../home/interfaces';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.page.html',
  styleUrls: ['./mis-productos.page.scss'],
})
export class MisProductosPage implements OnInit {

  keyUsuario: string;
  producto: (IProductoHog | IProductoTec | IProductoInm | IProductoMot | IProductoKey)[] = [];
  option: string = ""; 

  constructor(private _activatedRoute: ActivatedRoute, private _listaProductos: listaproductosservices) { }

  ngOnInit() {
    this.keyUsuario = "ljnPl9ZGPhgZ1QLa5PIQKf5Mfc62"; 
    let ref = this._listaProductos.getListasProductos(); 
    ref.orderByChild("claveUsuario").equalTo(this.keyUsuario).once("value", snapshot => {
      snapshot.forEach(child => {
        this.producto.push(child.val()); 
      })
    })
  }

  eliminarProducto(id){
    let ref = this._listaProductos.getProducto(id); 
    ref.remove(); 
  }

}
