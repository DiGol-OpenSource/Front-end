import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from "../../model/customer";
import {MatTableDataSource} from "@angular/material/table";
import { CustomersService} from "../../service/customers.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import * as _ from "lodash";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, AfterViewInit {

  customerData: Customer;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] =['id', 'name', 'phoneNumber', 'dni','actions'];

  @ViewChild('customerForm', {static: false})
  customerForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private customersService: CustomersService) {
    this.customerData = {} as Customer;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllCustomers();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getAllCustomers() {
    this.customersService.getAll().subscribe((response: any) =>{
      this.dataSource.data = response;
    })
  }

  editItem(element: Customer) {
    this.customerData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit(){
    this.isEditMode = false;
    this.customerForm.resetForm();
  }

  deleteItem(id: number){
    this.customersService.delete(id).subscribe( ()=> {
      this.dataSource.data = this.dataSource.data.filter((o: Customer) =>{
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addCustomer() {
    this.customerData.id = 0;
    this.customersService.create(this.customerData).subscribe( (response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any)=> {return o;});
    });
  }

  updateCustomer() {
    this.customersService.update(this.customerData.id, this.customerData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Customer) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }
  onSummit(){
    if (this.customerForm.form.valid){
      console.log(`valid`);
      if (this.isEditMode) {
        console.log('about to update');
        this.updateCustomer();
      } else {
        console.log('about to add');
        this.addCustomer();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }
}

