import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u_var:string;
  p_var:string;

  isUser=true;
  passCrct=true;

  constructor(private api:ApiService,
    private router:Router) {}

  ngOnInit() {
  }

  login()
  {
    this.api.getUserDetails(this.u_var).subscribe(
      data=>(this.isUser=true,this.checkPass()),
      error=>(this.isUser=false)
      );
  }

  checkPass()
  {
    this.api.login(this.u_var,this.p_var).subscribe(
      data=>(this.api.changeUser(this.u_var),this.router.navigate(['/profile'])),
      error=>(this.passCrct=false)
      );
  }

  // images:any;
  // getImages(){
  //   this.api.getImages().subscribe(data=>(this.images=data,console.log(data)));
  // }

}

