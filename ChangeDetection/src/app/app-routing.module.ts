import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RestComponent } from './rest/rest.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path: 'home',component: HomeComponent},  
{path: 'rest',component: RestComponent},  
{path: 'view',component: ViewComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
