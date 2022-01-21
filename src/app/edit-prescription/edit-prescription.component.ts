import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Visit } from '../visit';
@Component({
  selector: 'app-edit-prescription',
  templateUrl: './edit-prescription.component.html',
  styleUrls: ['./edit-prescription.component.css']
})
export class EditPrescriptionComponent implements OnInit {

  id=this.route.snapshot.params['id'];
  visit:any;
  message:any;
  pId:any;
  
  constructor(private service:ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit():void{
      let resp= this.service.getVisitById(this.id);
      resp.subscribe((data)=>this.visit=data);
    }

  onSubmit(){
    let resp=this.service.addPrescription(this.id, this.visit);
    let res=this.service.getPatientIdFromVisit(this.id);
    res.subscribe((data)=>this.pId=data)
    resp.subscribe((data)=>this.goToShowVisit());
  }

  goToShowVisit(){
    this.router.navigate(['/showVisit',this.pId]);
  }

}
