import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  posts:any;

  constructor(private apiService:ApiService) { 
    this.apiService.getPosts().subscribe(data=>(this.posts=data));
  }

  ngOnInit() {
  }

}
