import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {SportField} from "../../model/sport-field";
import {SportsFieldsService} from "../../service/sports-fields.service";

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  ra: Array<SportField>=[];
  sportsFields: Array<SportField>=[];
  sportFieldReservation: Array<SportField>=[];
  constructor(public sportsFieldsService: SportsFieldsService) {}

  ngOnInit(): void {
    this.getAllSportsFields();

  }
  getAllSportsFields(){
    this.sportsFieldsService.getAll().subscribe((response:any)=>{
      this.sportsFields=response;
      console.log(this.sportsFields);
    })
  }
  getReservation(id:number){
    this.sportsFieldsService.getById(id).subscribe((response:any)=>{
      this.sportFieldReservation=response;
      console.log(this.sportFieldReservation);
    })
    console.log(this.sportFieldReservation);
    this.sportFieldReservation=this.ra;
    return this.ra;
  }

}
