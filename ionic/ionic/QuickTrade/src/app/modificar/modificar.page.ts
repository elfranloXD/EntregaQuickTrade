import { Component, OnInit } from '@angular/core';
import { IProductoTec, IProductoHog, IProductoInm, IProductoMot, IProductoKey } from '../home/interfaces';
import { ToastController } from '@ionic/angular';
import { listaproductosservices } from '../services/listaproductos.services';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {


  item: object = {}
  id: string;

  constructor(private _toastCtrl: ToastController, private _listaProductos: listaproductosservices, private route: Router, private _activatedRoute: ActivatedRoute) { }



  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get("id"); 
    let ref = this._listaProductos.getProducto(this.id);  
    ref.once("value", snapshot => {
      this.item = snapshot.val(); 
    });
  }

  async presentToast() {  
    const toast = await this._toastCtrl.create({
      message: 'El producto se ha modificado correctamente',
      duration: 2000,
      position: "bottom"
    });
    toast.present();
  }


  guardarCambios(){
    let ref2 = this._listaProductos.getListasProductos(); 

    ref2.child(this.id).set(this.item);

    this.presentToast();

  }
    
  

}
