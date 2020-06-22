import { Component } from '@angular/core';
import { IProductoTec, IProductoHog, IProductoInm, IProductoMot, IProductoKey } from './interfaces';
import { ToastController } from '@ionic/angular';
import { listaproductosservices } from '../services/listaproductos.services';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  option: string = ""; 



  id: string;

  oculto: boolean = true;


   producto: (IProductoHog | IProductoTec | IProductoInm | IProductoMot | IProductoKey)[] = [];



  constructor(private _toastCtrl: ToastController, private _listaProductos: listaproductosservices, private route: Router) {
    
  }


  ngOnInit() {

      this.id = "ljnPl9ZGPhgZ1QLa5PIQKf5Mfc62";

    let ref = this._listaProductos.getListasProductos();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val(); 
        value.key = child.key;  
        this.producto.push(value); 
      })
    })
    
  }


    cambiarOculto() : void{
      this.oculto = !this.oculto;
    }

}
