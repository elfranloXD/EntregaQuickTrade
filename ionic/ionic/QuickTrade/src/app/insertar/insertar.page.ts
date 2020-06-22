import { Component, OnInit } from '@angular/core';
import { IProductoTec, IProductoHog, IProductoInm, IProductoMot } from '../home/interfaces';
import { ToastController } from '@ionic/angular';
import { listaproductosservices } from '../services/listaproductos.services';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.page.html',
  styleUrls: ['./insertar.page.scss'],
})
export class InsertarPage implements OnInit {


  
  categoriaTec: String="Tecnología";
  categoriaHog: String="Hogar";
  categoriaInm: String="Inmobiliaria";
  categoriaMot: String="Motor";

  tecSelec: Boolean=true;
  hogSelec: Boolean=false;
  inmSelec: Boolean=false;
  motSelec: Boolean=false;

  urlImagen: String="";

  urlTec: String="../../assets/images/tecnologia.jpg";
  urlHog: String="../../assets/images/hogar.jpeg";
  urlInm: String="../../assets/images/inmobiliaria.jpeg";
  urlMot: String="../../assets/images/motor.jpeg";



  id: string = "";
  nombre: string = "";
  descripcion: string = "";
  precio: number = 0;
  estado: string = "";
  km: number = 0;
  anyo: number = 0;
  localidad: string = "";
  metros: number = 0;
  habitaciones: number = 0;
  banyos: number = 0;
  claveUsuario: string = "";
    categoria: string;
    vendido: string;


  

  option: string = ""; 
  producto: (IProductoHog | IProductoTec | IProductoInm | IProductoMot)[];



  constructor(private _toastCtrl: ToastController, private _listaProductos: listaproductosservices, private _db: AngularFireDatabase, private _activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit() {
  }



  async presentToast() {  
    const toast = await this._toastCtrl.create({
      message: 'El producto se ha insertado correctamente',
      duration: 1000,
      position: "bottom"
    });
    toast.present();
  }


actualizarClave(clave: string){
  let ref = this._db.database.ref("productos/"+clave+"/id");
  ref.set(clave);
}




    insertarTec(){
      let productoTec: IProductoTec={
                                      "id": this.id,
                                      "nombre": this.nombre,
                                      "descripcion": this.descripcion,
                                      "estado": this.estado,
                                      "precio": this.precio,
          "claveUsuario": this._activatedRoute.snapshot.paramMap.get("id"),
          "categoria": this.categoria,
          "vendido": this.vendido,
                                    };

     
      let clave: string = this._listaProductos.setProducto(productoTec);
      this.actualizarClave(clave);
      this.presentToast(); 
    }




    insertarHom(){
      let productoHog: IProductoHog={
                                      "id": this.id,
                                      "nombre": this.nombre,
                                      "descripcion": this.descripcion,
                                      "precio": this.precio,
                                      "claveUsuario": this._activatedRoute.snapshot.paramMap.get("id"),
          "categoria": this.categoria,
                                      "vendido": this.vendido
                                    };

      
      let clave: string = this._listaProductos.setProducto(productoHog);
      this.actualizarClave(clave);
      this.presentToast();
    }



    insertarInm(){
      let productoInm: IProductoInm={
                                      "id": this.id,
                                      "nombre": this.nombre,
                                      "descripcion": this.descripcion,
                                      "estado": this.estado,
                                      "localidad": this.localidad,
                                      "metros": this.metros,
                                      "habitaciones": this.habitaciones,
                                      "banyos": this.banyos,
                                      "precio": this.precio,
                                      "claveUsuario": this._activatedRoute.snapshot.paramMap.get("id"),
          "categoria": this.categoria,
          "vendido": this.vendido
                                  };
     
      let clave: string = this._listaProductos.setProducto(productoInm);
      this.actualizarClave(clave);
      this.presentToast();
    }



    
    insertarMot(){
      let productoMot: IProductoMot={
                                      "id": this.id,
                                      "nombre": this.nombre,
                                      "descripcion": this.descripcion,
                                      "estado": this.estado,
                                      "km": this.km,
                                      "anyo": this.anyo,
                                      "precio": this.precio,
                                      "claveUsuario": this._activatedRoute.snapshot.paramMap.get("id"),
          "categoria": this.categoria,
                                      "vendido": this.vendido
                                  };
      
      let clave: string = this._listaProductos.setProducto(productoMot);
      this.actualizarClave(clave);
      this.presentToast();
    }



    restauraDatos(){
      this.nombre = "";
      this.descripcion = "";
      this.precio = 0;
      this.estado= "";
      this.km = 0;
      this.anyo= 0;
      this.localidad = "";
      this.metros = 0;
      this.habitaciones = 0;
      this.banyos = 0;
    }



   MuestraImagenCategoria(){
    if (this.option == 'T') {
      this.urlImagen = this.urlTec;
    }else if (this.option == 'H') {
                  this.urlImagen = this.urlHog;
          }else if (this.option == 'I') {
                      this.urlImagen = this.urlInm;
                  }else if (this.option == 'M') {
                    this.urlImagen = this.urlMot;
                  }
  }











}
