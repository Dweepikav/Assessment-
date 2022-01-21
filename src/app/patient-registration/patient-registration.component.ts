import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  patient:Patient=new Patient();
  doctors:any;
  message:any;
  red="red";
  green="green";
  yellow="yellow";
  constructor(private service:ApiService) { }

  ngOnInit(){
    let resp=this.service.getAllDoctors();
    resp.subscribe((data)=>this.doctors=data);
}
  
  submit(login:any)
  {
    console.log("form submitted");
  }

  public registerNow(){
let resp=this.service.registerPatient(this.patient);
resp.subscribe((data)=>this.message=data);
console.log(this.patient);
  }
}
