

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CustomersComponent} from "./customer/page/customer/customers.component";
import {ReservationsComponent} from "./reservation/pages/reservations/reservations.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";


const routes: Routes = [

  { path: 'customers', component: CustomersComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'log', component: LoginComponent},
  {path: 'reg', component: RegisterComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
