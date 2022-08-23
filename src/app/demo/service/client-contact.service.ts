import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class ClientContactService {

  constructor(private http: HttpClient,
              private clientService: ClientService) { }

  getClientContact(){
    return  this.http.get("http://localhost:9090/api/client/"+ this.clientService.clientId +"/contacts");
  }
}
