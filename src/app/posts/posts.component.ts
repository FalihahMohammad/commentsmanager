import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  displayedColumns: string[] = ['title', 'body', 'action'];  
  posts: any[];
  dataSource = new MatTableDataSource<any>();

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      (data : any[]) =>  {
        this.posts = data
        this.dataSource.data = this.posts; 
      } 
    );
  }

}
