import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users= [ 
    {
    "name": "salman khan",
    "email":"sallu@gmail.com",
    "mobile":"9090909090",
    "city":"mumbai",
    "gender":"male",
    "department":"Developer",
    "hireDate":"2021-03-02",
    "permanent": true,
    
  },
  {
    "name": "tom",
    "email":"tom@gmail.com",
    "mobile":"9090907800",
    "city":"pune",
    "gender":"male",
    "department":"Security",
    "hireDate":"2020-06-02",
    "permanent": true,
    
  },
  {
    "name": "leo",
    "email":"leo@gmail.com",
    "mobile":"9093409090",
    "city":"delhi",
    "gender":"male",
    "department":"SQL",
    "hireDate":"2019-03-15",
    "permanent": true,
    
  },
  {
    "name": "jennifer",
    "email":"jenf@gmail.com",
    "mobile":"9090909090",
    "city":"london",
    "gender":"female",
    "department":"DotNet",
    "hireDate":"2021-01-07",
    "permanent": true,
    
  },
  {
    "name": "iggi",
    "email":"azalea@gmail.com",
    "mobile":"9090909090",
    "city":"melbourne",
    "gender":"female",
    "department":"Devops",
    "hireDate":"2019-11-27",
    "permanent": true,
    
  },
  ]

  constructor() {} 
}
