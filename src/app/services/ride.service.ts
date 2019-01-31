import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  constructor(private httpClient:HttpClient) { }

  getRides(){
    return this.httpClient.get('http://localhost:8080/admin/api/rides');
  }
}
