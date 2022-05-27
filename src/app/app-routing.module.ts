

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CustomersComponent} from "./customer-list/page/customer/customers.component";
import {ReservationsComponent} from "./reservations/pages/reservations/reservations.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {CustomerHomeComponent} from "./customer/pages/customer-home/customer-home.component";
import {CustomerReservationComponent} from "./customer/pages/customer-reservation/customer-reservation.component";
import {HttpPatchDemoComponent} from "./customer/pages/customer-publish/customer-publish.component";


const routes: Routes = [

  { path: 'customers', component: CustomersComponent},
  {path: 'reservations', component: ReservationsComponent},
  { path: 'customer-home', component:CustomerHomeComponent},
  { path: 'customer-reservation', component:CustomerReservationComponent},
  { path: 'customer-publish', component:HttpPatchDemoComponent},
  {path: 'log', component: LoginComponent},
  {path: 'reg', component: RegisterComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
