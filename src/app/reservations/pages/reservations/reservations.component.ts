import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import * as _ from "lodash";
import {NgForm} from "@angular/forms";
import {Reservation} from "../../model/reservation";
import {ReservationsService} from "../../service/reservations.service";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit, AfterViewInit {

  reservationData: Reservation;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] =['id', 'customer', 'date', 'prepayment'];

  @ViewChild('reservationForm', {static: false})
  reservationForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;
  isEditMode = false;

  constructor(private reservationsService: ReservationsService) {
    this.reservationData = {} as Reservation;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllReservations();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getAllReservations() {
    this.reservationsService.getAll().subscribe((response: any) =>{
      this.dataSource.data = response;
    })
  }

  editItem(element: Reservation) {
    this.reservationData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit(){
    this.isEditMode = false;
    this.reservationForm.resetForm();
  }

  deleteItem(id: number){
    this.reservationsService.delete(id).subscribe( ()=> {
      this.dataSource.data = this.dataSource.data.filter((o: Reservation) =>{
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addReservation() {
    this.reservationData.id = 0;
    this.reservationsService.create(this.reservationData).subscribe( (response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any)=> {return o;});
    });
  }

  updateReservation() {
    this.reservationsService.update(this.reservationData.id, this.reservationData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Reservation) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }
  onSummit(){
    if (this.reservationForm.form.valid){
      console.log(`valid`);
      if (this.isEditMode) {
        console.log('about to update');
        this.updateReservation();
      } else {
        console.log('about to add');
        this.addReservation();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }
}

