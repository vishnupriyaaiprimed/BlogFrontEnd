import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  n_var: string;
  e_var: string;
  u_var: string;
  pw_var: string;
  rpw_var: string;

  success = false;
  e: any;

  constructor(private api: ApiService,
    private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.api.signup(this.n_var, this.e_var, this.u_var, this.pw_var).subscribe(
      data => {
        this.success = true;
        var ele: HTMLElement = document.getElementById('here');
        ele.click();
      },
      error => {
        this.e = error;
        if (this.e.status == 500) {
          this.success = true;
          var ele: HTMLElement = document.getElementById('here');
          ele.click();
        }
      });

  }


  getSuccess() {
    return this.success;
  }

}
