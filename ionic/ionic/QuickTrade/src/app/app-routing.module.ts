//Aquí se definen las rutas para acceder a los diferentes componentes.
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //Ruta para ir a este componente (home)
  { path: 'home/:nombre', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'details/:id',  //Ruta para ir a este componente (details). Si se añade :id significa que recogemos un parámetro id al ir a la ruta.
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'insertar/:id',
    loadChildren: () => import('./insertar/insertar.module').then( m => m.InsertarPageModule)
  },
  {
    path: 'mas-detalles/:key',  //Ruta para ir a este componente, recogemos un parametro llamado key
    loadChildren: () => import('./mas-detalles/mas-detalles.module').then( m => m.MasDetallesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mis-productos/:id',
    loadChildren: () => import('./mis-productos/mis-productos.module').then( m => m.MisProductosPageModule)
  },
  {
    path: 'mis-productos',
    loadChildren: () => import('./mis-productos/mis-productos.module').then( m => m.MisProductosPageModule)
  },
  {
    path: 'modificar/:id',
    loadChildren: () => import('./modificar/modificar.module').then( m => m.ModificarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
