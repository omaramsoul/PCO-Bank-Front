import { ClientService } from './../../service/client.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.scss']
})
export class InfoClientComponent implements OnInit {

  clientInfo : any;
  clientDateCrea : String;
  clientDateCreaAnnee: string;
  clientDateCreaMois:string;
  clientDateCreaJour:string;
  dateCreation: string;
  types : String[] = ["N° Client","Raison Sociale ou Nom","Sigle usuel","Catégorie","Secteur d'activité","Client Douteux","Date création client"]
  constructor(private clientService: ClientService) { }

  ngOnInit() {
   this.clientInfo = this.clientService.getClientById().subscribe(data => {
                              this.clientInfo = data; 
                              console.log(this.clientInfo);
                              this.clientDateCrea  = String(this.clientInfo.clienacre +19000000);
                              this.clientDateCreaAnnee = this.clientDateCrea.slice(0,4);
                              this.clientDateCreaMois = this.clientDateCrea.slice(4,6);
                              this.clientDateCreaJour = this.clientDateCrea.slice(6,8);
                              this.dateCreation = this.clientDateCreaAnnee + "/" + this.clientDateCreaMois + "/" + this.clientDateCreaJour;
                            });
  }


  



}
