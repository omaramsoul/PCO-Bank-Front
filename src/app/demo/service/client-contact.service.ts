import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientContactService {

  constructor(private http: HttpClient) { }

  getClientContact(){
    return  this.http.get("http://localhost:8080/api/client/contacts/0069985");
  }
}
