import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  n_var:string;
  e_var:string;
  u_var:string;
  pw_var:string;
  rpw_var:string;

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  signup()
  {
    this.api.signup(this.n_var,this.e_var,this.u_var,this.pw_var).subscribe(data=>(true));
  }

}
