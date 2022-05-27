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
import { CustomersComponent } from './customer-list/page/customer/customers.component';
import {CustomersService} from "./customer-list/service/customers.service";
import {ReservationsComponent} from "./reservations/pages/reservations/reservations.component";
import {ReservationsService} from "./reservations/service/reservations.service";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {CustomerHomeComponent} from "./customer/pages/customer-home/customer-home.component";
import {MatCardModule} from "@angular/material/card";
import {MatSortModule} from "@angular/material/sort";
import { CustomerReservationComponent } from './customer/pages/customer-reservation/customer-reservation.component';
import {SportsFieldsService} from "./customer/service/sports-fields.service";
import { HttpPatchDemoComponent} from "./customer/pages/customer-publish/customer-publish.component";
import {MatStepperModule} from "@angular/material/stepper";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
    declarations: [
        AppComponent,
        CustomersComponent,
        ReservationsComponent,
        LoginComponent,
        RegisterComponent,
        CustomerHomeComponent,
        CustomerReservationComponent,
        HttpPatchDemoComponent
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
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        MatCardModule,
        MatSortModule,
        MatStepperModule,
        MatDatepickerModule,
        MatAutocompleteModule,
        MatNativeDateModule,
    ],
    providers: [CustomersService,ReservationsService,SportsFieldsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
