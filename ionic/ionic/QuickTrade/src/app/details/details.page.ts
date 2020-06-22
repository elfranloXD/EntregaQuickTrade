import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { IProductoTec, IProductoHog, IProductoInm, IProductoMot } from '../home/interfaces';
import { listaproductosservices } from '../services/listaproductos.services';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {


  id: number;
  res: (IProductoHog | IProductoTec | IProductoInm | IProductoMot);

  constructor(private _activatedRoute: ActivatedRoute, private _listaProductos: listaproductosservices) { }

  
  ngOnInit() {  
    this.id = +this._activatedRoute.snapshot.paramMap.get('id'); 
  }

}
