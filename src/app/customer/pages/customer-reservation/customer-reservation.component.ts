import { Component, OnInit } from '@angular/core';
import {SportField} from "../../model/sport-field";
import {CustomerHomeComponent} from "../customer-home/customer-home.component";
import {get} from "lodash";
import {SportsFieldsService} from "../../service/sports-fields.service";

@Component({
  selector: 'app-customer-reservation',
  templateUrl: './customer-reservation.component.html',
  styleUrls: ['./customer-reservation.component.css'],
  providers:[CustomerHomeComponent],

})
export class CustomerReservationComponent implements OnInit {

  reservation=Array<SportField>();

  constructor(public currentReservation: CustomerHomeComponent,public sportFieldsService: SportsFieldsService) {}

  ngOnInit(): void {
    console.log("reservation",this.sportFieldsService.getSelectReservation());
    this.reservation=this.sportFieldsService.getSelectReservation();
  }


}
