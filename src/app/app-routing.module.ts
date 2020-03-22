import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'home',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }