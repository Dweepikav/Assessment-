import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-show-doctors',
  templateUrl: './show-doctors.component.html',
  styleUrls: ['./show-doctors.component.css']
})
export class ShowDoctorsComponent implements OnInit {

  doctors:any;
  docName:any;
  searchName : string="".toUpperCase();

  constructor(private service:ApiService) { }

  ngOnInit(){
    let resp=this.service.getAllDoctors();
    resp.subscribe((data)=>this.doctors=data);
}

public findDoctorByName(){
  let resp= this.service.getDoctorByName(this.searchName.toLocaleLowerCase());
  resp.subscribe((data)=>this.doctors=data);
 }

 public deleteDoctor(id:number){
  let resp= this.service.deleteDoctorById(id);
  resp.subscribe((data)=>this.doctors=data);
 }

}
