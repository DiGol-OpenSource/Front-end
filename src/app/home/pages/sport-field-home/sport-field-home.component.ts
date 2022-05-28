import { Component, OnInit, ViewChild} from '@angular/core';
import {SportsFieldsService} from "../../service/sports-fields.service";
import {SportField} from "../../model/sport-field";
import {MatTableDataSource} from "@angular/material/table";
import {NgForm} from "@angular/forms";
import * as _ from "lodash";
@Component({
  selector: 'app-sport-field-home',
  templateUrl: './sport-field-home.component.html',
  styleUrls: ['./sport-field-home.component.css']
})
export class SportFieldHomeComponent implements OnInit{
  sportFieldData!: SportField;
  dataSource!: MatTableDataSource<any>;
  sportsFields: Array<SportField>=[];

  @ViewChild('sportFieldForm', {static: false})
  sportFieldForm!:NgForm;

  isEditMode = false;
  constructor(public sportsFieldsService: SportsFieldsService) { }

  ngOnInit(): void {
    this.getAllSportsFields();
    this.sportFieldData={} as SportField;
    this.dataSource=new MatTableDataSource<any>();
  }
  ngAfterViewInit() {
    this.getAllSportsFields();
  }
  getAllSportsFields(){
    this.sportsFieldsService.getAll().subscribe((response:any)=>{
      this.sportsFields=response;
      console.log("sport-home",this.sportsFields);
    })
  }
  editItem(element: SportField){
    this.sportFieldData=_.cloneDeep(element);
  }
  cancelEdit(){
    this.isEditMode = false;
    this.sportFieldForm.resetForm();
  }
  deleteItem(id: number){
    this.sportsFieldsService.delete(id).subscribe( ()=> {
      this.dataSource.data = this.dataSource.data.filter((o: SportField) =>{
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addSportField(){
    this.sportFieldData.id=0;
    this.sportsFieldsService.create(this.sportFieldData).subscribe((response: any)=> {
      this.dataSource.data.push({...response});
      this.dataSource.data=this.dataSource.data.map((o: any)=>{return o;})
      console.log("added",response)
    })
  }
  updateSportField() {
    this.sportsFieldsService.update(this.sportFieldData.id, this.sportFieldData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: SportField) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }

  onSummit(){
    if (this.sportFieldForm.form.valid){
      console.log(`valid`);
      if (this.isEditMode) {
        console.log('about to update');
        this.updateSportField();
      } else {
        console.log('about to add');
        this.addSportField();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }
}
