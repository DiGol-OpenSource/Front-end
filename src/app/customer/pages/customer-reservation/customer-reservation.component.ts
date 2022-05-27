import { Component, OnInit } from '@angular/core';
import {SportField} from "../../model/sport-field";
import {CustomerHomeComponent} from "../customer-home/customer-home.component";
import {SportsFieldsService} from "../../service/sports-fields.service";

@Component({
  selector: 'app-customer-reservation',
  templateUrl: './customer-reservation.component.html',
  styleUrls: ['./customer-reservation.component.css'],
  providers:[CustomerHomeComponent],

})
export class CustomerReservationComponent implements OnInit {

  selectedReservation: Array<SportField>=[];
  data: any[]=[];


  constructor(public currentReservation: CustomerHomeComponent,public sportFieldsService: SportsFieldsService) {}

  ngOnInit(): void {
    console.log("reservation",this.sportFieldsService.getSelectReservation());
    this.reservations();
  }
  reservations(){
    this.selectedReservation=this.sportFieldsService.getSelectReservation();
  console.log("Object",this.selectedReservation);
     this.data=Object.values(this.selectedReservation);
    console.log("Array",this.data);
    console.log("search",this.data[0]);
  }

}
