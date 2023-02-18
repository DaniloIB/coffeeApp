//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { NotFoundComponent } from './core/shared/components/not-found/not-found.component';

const routes: Routes = [
  {path: '', loadChildren: ()=>import('./public/public.module').then(m=>m.PublicModule)},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
