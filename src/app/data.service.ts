import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse, HttpParams  } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public token: string;

  constructor(private http: HttpClient) {
    // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
   }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  } 

  getDetails(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id)
  }

  getComments(id){
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId='+id);
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
