import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
{ path: '', component: HomeComponent},
{ 
  path: 'users', loadChildren: () => import('./features/users/users.module').then( m => m.UsersModule)
},
{ 
  path: 'products', loadChildren: () => import('./features/products/products.module').then( m => m.ProductsModule)
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
