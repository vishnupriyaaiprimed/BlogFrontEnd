import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.baseUrl+"posts/",
    {headers:this.httpHeaders}
    );
  }
}
