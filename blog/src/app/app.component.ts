import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router){}

  title = 'blog';

  fn(){
    var s=this.router.url.toString().split("/");
    if(s[1]=="")
    return true;
    else
    return false;
  }

}
