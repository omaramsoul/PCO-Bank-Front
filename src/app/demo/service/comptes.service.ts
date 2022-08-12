import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  constructor(private http: HttpClient,
    private clientService: ClientService) { }

  getComptes(){
    return this.http.get(("http://localhost:8080/api/client/"+ this.clientService.clientId +"/comptes"))
  }
}
