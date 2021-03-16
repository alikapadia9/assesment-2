import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  constructor(private http: HttpClient) {} 
 getusers(){
   return this.http.get('http://localhost:3000/users')
  
  }
  postusers(user: any){
    console.log(user)
    this.http.post('http://localhost:3000/users', user).subscribe((res)=>{
      res
    }
  )
  
}
deleteusers(id: string){
  this.http.delete(`http://localhost:3000/users/${id}`).subscribe((res)=>{
    res
  })
}
}
