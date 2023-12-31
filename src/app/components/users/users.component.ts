import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any=[];
  term:string=""
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data)=>{
        this.users=data
        console.log(this.users)
      }
    )
  }
  childToParent(id:any)
  {
    console.log("parent"+id)
  }


}
