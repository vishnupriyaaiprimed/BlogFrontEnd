import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  posts: any;
  user: string;

  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  constructor(private apiService: ApiService) {
    this.user = this.apiService.getUser();
    this.apiService.getPosts().subscribe(data => (this.posts = data));
    console.log(new Date());
  }

  ngOnInit() {
  }

  formatDate(str) {
    var res = "";
    var date = new Date(str);
    console.log(date);
    res = date.getDate() + " " + this.monthNames[date.getMonth()] + " " + date.getFullYear();
    return res;
  }

  formatTime(str) {
    var res="";

    var hrs=str.substring(0,2);
    var mins=str.substring(3,5);
    var tail="am";

    if(parseInt(hrs)>12)
    {
      hrs=parseInt(hrs)-12;
      tail="pm";
    }

    res=hrs+":"+mins+" "+tail;
    return res;
    
  }

}
