import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule} from "./app-routing.module";
import { CustomersComponent } from './customer/page/customer/customers.component';
import {CustomersService} from "./customer/service/customers.service";
import {ReservationsComponent} from "./reservation/pages/reservations/reservations.component";
import {ReservationsService} from "./reservation/service/reservations.service";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {CustomerHomeComponent} from "./customer-home/pages/customer-home.component/customer-home.component.component";



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ReservationsComponent,
    LoginComponent,
    RegisterComponent,
    CustomerHomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [CustomersService,ReservationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
