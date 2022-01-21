import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-show-visit',
  templateUrl: './show-visit.component.html',
  styleUrls: ['./show-visit.component.css']
})
export class ShowVisitComponent implements OnInit {

  visits:any;
  id:number;
  constructor(private service:ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    let resp=this.service.showVisit(this.id);
    resp.subscribe((data)=>this.visits=data);
  }
  addPrescription(id:number)
   {
     this.router.navigate(['addPrescription',id]);
   }

}
