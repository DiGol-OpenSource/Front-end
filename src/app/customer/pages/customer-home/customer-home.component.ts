import {Component, OnInit} from '@angular/core';
import {SportField} from "../../model/sport-field";
import {SportsFieldsService} from "../../service/sports-fields.service";

@Component({
  selector: "app-customer-home",
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home .component.css']
})
export class CustomerHomeComponent implements OnInit {


  sportsFields: Array<SportField>=[];
  sportFieldReservation: Array<SportField>=[];

  constructor(public sportsFieldsService: SportsFieldsService) {}

  ngOnInit(): void {
    this.getAllSportsFields();

  }
  getAllSportsFields(){
    this.sportsFieldsService.getAll().subscribe((response:any)=>{
      this.sportsFields=response;
      console.log("Array",this.sportsFields);
    })
  }
  getReservation(id:number){
    this.sportsFieldsService.getById(id).subscribe((response:any)=>{
      this.sportFieldReservation=response;
      console.log("body",this.sportFieldReservation);
      console.log("sendBody",this.sportsFieldsService.setSelectReservation(response));
      this.sportsFieldsService.setSelectReservation(this.sportFieldReservation)
    })
  }

}
