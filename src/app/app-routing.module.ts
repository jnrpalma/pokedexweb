import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'', 
  
  //*sempre ira carregar paginas desse module
  loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
