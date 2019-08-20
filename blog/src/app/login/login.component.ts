import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u_var:string;
  p_var:string;

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  login()
  {
    this.api.login(this.u_var,this.p_var).subscribe(data=>(this.api.changeUser(this.u_var)));
  }

}
