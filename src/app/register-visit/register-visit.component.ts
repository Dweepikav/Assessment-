import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-register-visit',
  templateUrl: './register-visit.component.html',
  styleUrls: ['./register-visit.component.css']
})
export class RegisterVisitComponent implements OnInit {

  visit = {
    date1: null,
    time1: null,
    disease: null,
    patient: {
      id: null,
      visitedDoctor: null,
      doctor: null
    }
  }
  doctors: any;
  message: any;
  id: number;
  diseases:any;

  constructor(private service: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let resp = this.service.getAllDoctors();
    resp.subscribe((data) => this.doctors = data);
    let repos=this.service.getAllDiseases();
    repos.subscribe((data)=>this.diseases=data);
  }



  public registerNow() {
    this.id = this.route.snapshot.params['id'];
    let resp = this.service.registerVisit(this.id, this.visit);
    resp.subscribe((data) => this.message = data);
  }

}
