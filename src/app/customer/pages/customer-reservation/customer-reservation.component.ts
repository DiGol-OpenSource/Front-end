import { Component, OnInit } from '@angular/core';
import {SportField} from "../../model/sport-field";
import {CustomerHomeComponent} from "../customer-home/customer-home.component";
import {get} from "lodash";

@Component({
  selector: 'app-customer-reservation',
  templateUrl: './customer-reservation.component.html',
  styleUrls: ['./customer-reservation.component.css'],
  providers:[CustomerHomeComponent],

})
export class CustomerReservationComponent implements OnInit {
  reservation: Array<SportField>=[];

  constructor(public currentReservation: CustomerHomeComponent) {}

  ngOnInit(): void {
  console.log("go",this.currentReservation.getReservation(1))
  }

  getReservation(id:number){
    this.currentReservation.sportsFieldsService.getById(id).subscribe((response:any)=>{
      this.currentReservation.sportFieldReservation=response;
      console.log(this.currentReservation.sportFieldReservation);
    })
  }


}
