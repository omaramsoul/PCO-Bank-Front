import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class MouvEnAttenteService {

  constructor(private http:HttpClient,
              private clientService: ClientService ) { }

  getClientMEA(){
    return this.http.get("http://localhost:9090/api/client/" +this.clientService.clientId+"/mea")
  }
}
