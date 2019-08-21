import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  user:any;
  image:any;
  posts:any;

  t_var:string;
  c_var:string;
  t1_var:string;
  c1_var:string;
  post:any;

  curPost=-1;

  constructor(private api:ApiService) { 
    this.getPosts();
    this.api.getUserDetails(this.api.getUser()).subscribe(data=>(this.user=data,this.getProfPic()));
  }

  getProfPic()
  {
    this.api.getProfPic(this.user.id).subscribe(data=>(this.image=data,console.log(data)));
  }

  getPosts()
  {
    this.api.getPosts().subscribe(data=>(this.posts=data,console.log(data)));
  }

  ngOnInit() {
  }

  addPost()
  {
    var date=new Date();
    
    var time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    var d=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    
    
    this.api.addPost(this.t_var,this.user.username,d,time,this.c_var).subscribe(data=>(console.log(data),this.t_var='',this.c_var='',this.getPosts()));
  }

  getCurPostContent(id)
  {
    this.curPost=id;
    this.api.getPost(id).subscribe(data=>(this.post=data,this.t1_var=this.post.title,this.c1_var=this.post.content));
  }

  editPost()
  {
    var date=new Date();
    
    var time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    var d=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    
    
    this.api.editPost(this.curPost,this.t1_var,this.user.username,d,time,this.c1_var).subscribe(data=>(console.log(data),this.getPosts()));
    location.reload();
  }

  delPost()
  {
    this.api.delPost(this.curPost).subscribe(data=>(console.log(data),this.getPosts()));
    location.reload();
  }

  no()
  {
    location.reload();
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

  editClicked()
  {
    var ele=document.getElementById('propic');
    ele.click();
  }

  getFile()
  {
    var file=document.getElementById('propic').files[0];

    this.api.changeProfPic(this.user.id,file).subscribe(data=>(console.log(data),location.reload()
    ));    
  }

  // onFileSelected(event)
  // {
  //   this.selectedFile=event.target.files[0];
  //   console.log(this.selectedFile);
    
  // }
  // onUpload()
  // {
  //   this.api.changeProfPic(this.user.id,this.selectedFile).subscribe(data=>true);
  // }
}
