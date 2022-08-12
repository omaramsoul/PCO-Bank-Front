import { Component, OnInit } from '@angular/core';

import { AutorisationsService } from '../../service/autorisations.service';

@Component({
  selector: 'app-autorisations',
  templateUrl: './autorisations.component.html',
  styleUrls: ['./autorisations.component.scss']
})
export class AutorisationsComponent implements OnInit {
  clientAutorisations : any;
  headers = ["Gpe", "Type", "Code", "Déb. Auto.", "	Fin Auto.", "Montant", "Dev.","Blo."]
  constructor(private service: AutorisationsService) {
    this.clientAutorisations = service.getAutorisations().subscribe(data => {this.clientAutorisations = data});
   }

  ngOnInit(): void {
  }

}
