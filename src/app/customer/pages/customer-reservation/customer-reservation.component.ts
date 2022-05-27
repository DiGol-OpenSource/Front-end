import { Component, OnInit} from '@angular/core';
import {SportField} from "../../model/sport-field";
import {CustomerHomeComponent} from "../../../home/pages/customer-home/customer-home.component";
import {SportsFieldsService} from "../../../home/service/sports-fields.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Reservation} from "../../../reservations/model/reservation";
import {SendReservationService} from "../../service/send-reservation.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-customer-reservation',
  templateUrl: './customer-reservation.component.html',
  styleUrls: ['./customer-reservation.component.css'],
  providers:[CustomerHomeComponent],
})

export class CustomerReservationComponent implements OnInit {


  selectedReservation: Array<SportField>=[];
  data: any[]=[];
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  myControl= new FormControl();
  options: string[]=['5 - 6','6 - 7','7 - 8','8 - 9','9 - 10','10 - 11','11 - 10','10 - 11','11 - 12','12 - 13','13 - 14'];
  constructor(public currentReservation: CustomerHomeComponent,public sportFieldsService: SportsFieldsService,public sendReservationService: SendReservationService,private _formBuilder: FormBuilder) {}
  display=true;
  reservationData!:Reservation;
  dataSource!: MatTableDataSource<any>;



  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    console.log("reservation",this.sportFieldsService.getSelectReservation());
    this.reservations();
  this.displayReservation()
  }

  reservations(){
    this.selectedReservation=this.sportFieldsService.getSelectReservation();
  console.log("Object",this.selectedReservation);
     this.data=Object.values(this.selectedReservation);
    console.log("Array",this.data);
    console.log("search",this.data[0]);
  }
  displayReservation(){
    this.display = this.data.length <= 0;
  }
  addReservation(){
    this.reservationData.id = 0;
    this.sendReservationService.create(this.reservationData).subscribe( (response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any)=> {return o;})
    });
  }
}
