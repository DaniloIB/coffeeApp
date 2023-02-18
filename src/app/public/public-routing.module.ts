//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.component';
import { CartComponent } from './cart/containers/cart.component';

const routes: Routes = [
    {path:'' , component: PublicComponent, children: [
        {path: '', redirectTo:'home', pathMatch: 'full'},
        {path: 'home', component: HomeComponent},
        {path: 'cart', component: CartComponent}
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }