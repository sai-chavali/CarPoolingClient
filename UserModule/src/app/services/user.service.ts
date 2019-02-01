import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getUsers(){
    return this.httpClient.get<User[]>('http://localhost:8080/user/all');
  }

  getById(id: number) {

    return this.httpClient.get('http://localhost:8080/user/'+id);
}

  register(user: User) {
    return this.httpClient.post('http://localhost:8080/user/add',{

      "u_id": user.id,
      "email": user.email,
      "password":user.password,
      "user_name":user.username

    });
  }

  update(id: number) {
   return this.httpClient.post('http://localhost:8080/user/' + id,{
    // "u_id": user.id,
    // "email": user.email,
    // "password":user.password,
    // "user_name":user.username
    
   });
 }

// delete(id: number) {
//     return this.http.delete(`/users/` + id);
// }

}
