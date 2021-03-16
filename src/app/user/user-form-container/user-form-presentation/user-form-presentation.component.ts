import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/service/user-service/user.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.css']
})
export class UserFormPresentationComponent implements OnInit {
 userForm:FormGroup
  constructor(
    private userService:UserService 
  ) 
  {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
     
      department: new FormControl(''),
      mobile: new FormControl(''),
      city: new FormControl(''),
      date: new FormControl(''),
      permanentemp: new FormControl(''),
      
    });
   }

  ngOnInit(): void {
  }
  onSubmit(){
    // console.log(this.userForm.value) 
    // this.userService.users.push(this.userForm.value)
    this.userService.postusers(this.userForm.value)
    

  }
}
