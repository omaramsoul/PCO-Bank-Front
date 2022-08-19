import { Component, OnInit } from '@angular/core';

import { AutorisationsService } from '../../service/autorisations.service';
import { Formatter } from '../Formatter';

@Component({
  selector: 'app-autorisations',
  templateUrl: './autorisations.component.html',
  styleUrls: ['./autorisations.component.scss']
})
export class AutorisationsComponent implements OnInit {
  clientAutorisations : any;
  headers : String[];
  colorMap : Map<any, String>;
  constructor(private service: AutorisationsService) {
    this.clientAutorisations = service.getAutorisations().subscribe(data => {
      this.clientAutorisations = data;
      this.colorMap = Formatter.format(data)
      this.headers = data[0];
      this.clientAutorisations.shift();
    
    }
      );
    
   }

  ngOnInit(): void {
  }

}
