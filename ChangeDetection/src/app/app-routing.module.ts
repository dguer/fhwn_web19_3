import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { RestComponent } from './rest/rest.component';


const routes: Routes = [
{path: 'home',component: HomeComponent},  
{path: 'rest',component: RestComponent},  
{path: 'view',component: ViewComponent}, 
{path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
