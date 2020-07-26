import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'body'];  
  comments: any[];
  dataSource = new MatTableDataSource<any>();
  
  postsID: number;

  constructor(private route: ActivatedRoute, private data: DataService) { 
    this.route.params.subscribe( params => this.postsID = params.id );
  }

  ngOnInit() {
    this.data.getComments(this.postsID).subscribe(
      (data : any[]) =>  
      {
        this.comments = data;
        this.dataSource.data = this.comments;

        this.dataSource.filterPredicate = (data, filter) =>
        (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1) ||
        (data.email.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1) ||
        (data.body.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1);

        console.log(this.dataSource);
      }    
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
