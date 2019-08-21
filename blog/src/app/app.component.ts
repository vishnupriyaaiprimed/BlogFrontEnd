import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:any;

  constructor(private router:Router,
    private api:ApiService){
      this.user=this.api.getUser();
    }

  title = 'blog';

  fn(){
    var s=this.router.url.toString().split("/");
    if(s[1]=="")
    return true;
    else
    return false;
  }

  liveUser()
  {
    this.user=this.api.getUser();
    if(this.user=='')
      return false;
    else
      return true;
  }

  logout()
  {
    this.api.changeUser('');
  }

}
