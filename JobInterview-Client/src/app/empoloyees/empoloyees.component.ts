import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Departments } from '../models/departments';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-empoloyees',
  templateUrl: './empoloyees.component.html',
  styleUrls: ['./empoloyees.component.scss']
})
export class EmpoloyeesComponent implements OnInit {

  dataSource = new MatTableDataSource<Employee>();
  displayedColumns: string[] = ['id', 'name', 'age', 'salary', 'department'];
  isLoading = true;

  departments: Departments[] = [];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.getDepartments();
    this.getEmployees();
  }

  getDepartments(){
    this.employeesService.getDepartments().subscribe((data) =>{
      this.departments = data;
    },
    _error => { console.log("get departments api failed.")});
  }

  getEmployees(){
    this.employeesService.getEmployees().subscribe((data) => {
      setTimeout(() => {
        this.isLoading = false;
        this.dataSource.data = data;
      }, 300);
    },
      _error => setTimeout(() => { this.isLoading = false; }, 300)
    );
  }

  onDepartmentChange(ob: any) {
    console.log('Department changed...');
    let selectedDepartment = ob.value;
    console.log(selectedDepartment);
  }
}
