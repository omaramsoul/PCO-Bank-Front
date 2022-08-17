import { ClientService } from './../../service/client.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InformationsService } from '../../service/informations.service';

@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.scss']
})
export class InfoClientComponent implements OnInit {

  clientInfo : any;
  headers = ["Type", "Informations"];
  Types : any[];
  Infos : any[];
  constructor(private service: InformationsService) { }

  ngOnInit() {
   this.clientInfo = this.service.getInformations().subscribe(data => {
                              this.clientInfo = data;   
                              this.Types = data[0];
                              this.Infos = data[1];
                          
                            });
  }


  



}
