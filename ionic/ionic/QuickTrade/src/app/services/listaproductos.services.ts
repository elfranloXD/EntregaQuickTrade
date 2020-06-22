import {Injectable} from '@angular/core'
import {IProductoHog, IProductoTec, IProductoInm, IProductoMot} from '../home/interfaces'   //Exportar para poder usar interfaces.ts
import { AngularFireDatabase } from '@angular/fire/database'    //Para poder usar la bbdd aquí.
import { ActivatedRoute } from '@angular/router';

@Injectable()



export class listaproductosservices {
    //Código AE9//
    //Array donde guardamos todos los objetos (Producto), sean del tipo que sean. Se pueden ver sus tipos en interfaces.ts
    /*listaProductos: (IProductoHog | IProductoTec | IProductoInm | IProductoMot)[] = [
    
        {
            id: 1,
            nombre: "Telefono",
            descripcion: "Iphone",
            precio: 900
        },
        {
            id: 2,
            nombre: "Ordenador",
            descripcion: "Macbook Pro",
            precio: 2300
        },
        {
            id: 3,
            nombre: "Tablet",
            descripcion: "Ipad",
            precio: 500
        },
        {
            id: 4,
            nombre: "Moto",
            descripcion: "Scooter",
            precio: 5000,
            estado: "Nueva",
            km: 5,
            anyo: 2020
        },
        {
            id: 5,
            nombre: "Casa",
            localidad: "Valencia",
            descripcion: "Unifamiliar",
            precio: 215000,
            estado: "Nueva",
            habitaciones: 3,
            metros: 230,
            banyos: 2
        },
        {
            id: 6,
            nombre: "Moto",
            descripcion: "Trail",
            precio: 4500,
            estado: "Usada",
            km: 5,
            anyo: 2017
        }
    
      ];*/



      //Código AE10//
      //Constructor que hace referencia a nuestra bbdd de FireBase.
      constructor(private _db: AngularFireDatabase, private _activatedRoute: ActivatedRoute){

      }


    //Código AE9//
    //Método para devolver el array que ariba hemos creado. Devuelve cuaquier tipo de objeto (Ver en interfaces.ts)
    /*getListasProductos(): (IProductoHog | IProductoTec | IProductoInm | IProductoMot)[]{

        return this.listaProductos;

    }*/


    //Código AE10//
    //Metodo para recuperar los datos de FireBase en conreto del nodo 'productos'
    getListasProductos(): firebase.database.Reference{
        let ref = this._db.database.ref("productos");
        return ref;
    }

    //Código AE11//
    getProducto(id): firebase.database.Reference{
        let ref = this._db.database.ref("productos/" + id); //En productos con el id pasado por parametros
        return ref;
    }



    //Código AE9//
    //Método donde pasamos el id(numero) y en el array de arriba encuentra un objeto con ese array.
    /*getProducto(id: number) : (IProductoHog | IProductoTec | IProductoInm | IProductoMot){
        return this.listaProductos.find(x => x.id == id);
    }*/


    //Código AE10//
    //Función para asignar un producto nuevo con FireBase.
    setProducto(producto: (IProductoHog | IProductoTec | IProductoInm | IProductoMot)): string {
        let ref = this._db.database.ref("productos");  //Hacemos referencia al nodo que queremos acceder de la bbdd.
        let nuevaref : string = ref.push(producto).key; //Añadimos en la bbdd, en el nodo arriba seleccionado, el producto pasado por parámetro en la función
        return nuevaref;    //Devuelve la referencia del objeto que avabamos de añadir.
    }

    

    //this._db.database.ref("productos/"+clave+"/id");

}