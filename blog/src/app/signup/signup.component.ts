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

  uid: any;

  isBtnClicked = false;
  regForm_frontend_val: boolean;
  userNameTaken: boolean;

  constructor(private api: ApiService,
    private router: Router) { }

  ngOnInit() {
  }

  check() {
    this.isBtnClicked = true;
    console.log(this.regForm_frontend_val);

    if (this.regForm_frontend_val) {
      this.api.getUserDetails(this.u_var).subscribe(
        data => (this.userNameTaken = true, console.log('taken')),
        error => (this.userNameTaken = false, this.signup())
      );
    }
  }

  signup() {
    this.api.signup(this.n_var, this.e_var, this.u_var, this.pw_var).subscribe(
      data => {
        this.success = true;
        this.api.getUserDetails(this.u_var).subscribe(
          data => {
            this.uid = data;
            this.api.createProfile(this.uid.id).subscribe(data => (true));
          }
        );
      },
      error => {
        this.e = error;
        if (this.e.status == 500) {
          this.success = true;
          this.api.getUserDetails(this.u_var).subscribe(
            data => {
              this.uid = data;
              this.api.createProfile(this.uid.id).subscribe(data => (true));
            }
          );
        }
      });
  }

  frontend_valid() {
    if (this.n_var != null && this.n_var != ''
      && this.e_var != null && this.e_var != ''
      && this.u_var != null && this.u_var != ''
      && this.pw_var != null && this.pw_var != ''
      && this.rpw_var != null && this.rpw_var != ''
      && this.name_match(this.n_var)
      && this.email_match(this.e_var)
      && this.user_name_start(this.u_var) && this.user_name_space(this.u_var) && this.user_name_match(this.u_var)
      && this.pw_match(this.pw_var)
      && this.pw_var == this.rpw_var)
      this.regForm_frontend_val = true;
    else
      this.regForm_frontend_val = false;

    return true;
  }

  name_match(str): boolean {
    if (str != null && str != '') {
      str = str.trim();
      var reg = new RegExp('^[a-zA-Z\ ]+$');
      return reg.test(str);
    }
    return true;
  }

  email_match(str): boolean {
    if (str != null && str != '') {
      str = str.trim();
      var reg = new RegExp('^[a-zA-Z0-9]+([\\.-_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\\.-_][a-zA-Z0-9]+)*\\.[a-zA-Z]{2,3}$');
      return reg.test(str);
    }
    return true;
  }

  user_name_start(str): boolean {
    if (str != null && str != '') {
      str = str.trim();
      var reg = new RegExp('^[a-zA-Z]');
      var user_name_val = reg.test(str);
      return user_name_val;
    }
    return true;
  }

  user_name_space(str): boolean {
    if (str != null && str != '') {
      str = str.trim();
      var reg = new RegExp('\ ');
      var user_name_val = reg.test(str);
      return !user_name_val;
    }
    return true;
  }

  user_name_match(str): boolean {
    if (str != null && str != '') {
      str = str.trim();
      var reg = new RegExp('^[a-zA-Z0-9|\*|#|\\-|_|\ ]+$');
      var user_name_val = reg.test(str);
      return user_name_val;
    }
    return true;
  }

  pw_match(num): boolean {
    if (num != null && num != '') {
      var str: string;
      str = num;
      var reg = new RegExp('^[a-zA-Z0-9]{8,15}$');
      return reg.test(str);
    }
    return true;
  }


}
