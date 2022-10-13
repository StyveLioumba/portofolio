import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/'},
  {path:'',component:MainComponent},
  {path:'not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
