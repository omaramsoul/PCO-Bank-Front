import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class AutorisationsService {

  constructor(private http: HttpClient,
              private clientService: ClientService ) { }

  getAutorisations(): Observable<any>{
    return  this.http.get("http://localhost:8080/api/client/"+ this.clientService.clientId +"/autorisations");
  }

}
