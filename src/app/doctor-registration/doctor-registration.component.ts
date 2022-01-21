import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/doctor';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {


  doctor: Doctor=new Doctor();
  department:any;
  message:any;
  red="red";
  green="green";
  yellow="yellow";

  constructor(private service:ApiService) { }

  ngOnInit() {
    let resp=this.service.getAllDepartments();
    resp.subscribe((data)=>this.department=data);

  }
  
  submit(login:any)
  {
    console.log("form submitted");
  }

  public registerNow(doc:any=this.doctor){
    let resp=this.service.registerDoctor(doc);
    resp.subscribe((data)=>this.message=data);
    console.log(this.doctor);
  }
}
