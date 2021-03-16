import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service/user.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.css']
})
export class UserListPresentationComponent implements OnInit {
 users:any=[]
  constructor(private userService:UserService) { }

  ngOnInit(): void {
   this.users=this.userService.users
   console.log(this.users)
  }
 delete(id: number){
  //  this.userService.users.pop()
   this.userService.users.splice(id,1)
 }
}
