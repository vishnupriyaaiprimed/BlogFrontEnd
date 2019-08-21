import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private username='';
  getUser()
  {
    // console.log(localStorage.getItem("num"));
    return localStorage.getItem("username");
  }
  changeUser(u)
  {
    this.username=u;
    localStorage.setItem("username",this.username);
    // console.log(localStorage.getItem("num"));
  }

  private baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });

  constructor(private http:HttpClient) { }

  signup(n,e,u,p){
    const details={first_name:n,email:e,username:u,password:p};
    return this.http.post(this.baseUrl+"usersbyusername/",details,
      {headers:this.httpHeaders}
      );
  }

  login(u,p)
  {
    const details={username:u,password:p};
    return this.http.post(this.baseUrl+"auth/",details,
    {headers:this.httpHeaders}
    );
  }

  getUserDetails(un)
  {
    return this.http.get(this.baseUrl+"usersbyusername/"+un+"/",
    {headers:this.httpHeaders}
    );
  }

  getPosts(){
    return this.http.get(this.baseUrl+"posts/",
    {headers:this.httpHeaders}
    );
  }

  getPost(id){
    return this.http.get(this.baseUrl+"posts/"+id+"/",
    {headers:this.httpHeaders}
    );
  }

  addPost(tit,a,d,t,c){
    const detail={title:tit,author:a,date:d,time:t,content:c};
    return this.http.post(this.baseUrl+"posts/",detail,
    {headers:this.httpHeaders}
    );
  }

  editPost(id,tit,a,d,t,c){
    const detail={title:tit,author:a,date:d,time:t,content:c};
    return this.http.put(this.baseUrl+"posts/"+id+"/",detail,
    {headers:this.httpHeaders}
    );
  }

  delPost(id){
    return this.http.delete(this.baseUrl+"posts/"+id+"/",
    {headers:this.httpHeaders}
    );
  }
}
