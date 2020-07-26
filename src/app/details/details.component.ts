import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: any;
  detailID: number;
  title: string;
  body: string;

  constructor(private route: ActivatedRoute, private data: DataService,private router: Router) { 
    this.route.params.subscribe( params => this.detailID = params.id );
  }

  ngOnInit() {
    this.data.getDetails(this.detailID).subscribe(
      data => 
      {
        this.details = data;
        this.title = this.details.title;
        this.body = this.details.body;
      }    
    );
  }

  view(){
    this.router.navigate(['/comments/'+this.details.id]);
  }

}
