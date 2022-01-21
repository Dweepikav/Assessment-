import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-patients',
  templateUrl: './show-patients.component.html',
  styleUrls: ['./show-patients.component.css']
})
export class ShowPatientsComponent implements OnInit {

  patients:any;
  message:string="no such patient exists";
  patientId:number;
  id:number;

  constructor(private service:ApiService, private router:Router) { }

  ngOnInit(){
    let resp=this.service.getAllPatients();
    resp.subscribe((data)=>this.patients=data);
  }

  showVisit(id:number)
   {
     this.router.navigate(['showVisit',id]);
   }

   addVisit(id:number)
   {
     this.router.navigate(['addVisit',id]);
   }

   public findPatientById(){
    let resp= this.service.getPatientById(this.patientId);
    resp.subscribe((data)=>this.patients=data);
   }
  


}
