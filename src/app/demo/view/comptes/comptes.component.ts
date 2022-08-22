import { Component, OnInit } from '@angular/core';
import { ComptesService } from '../../service/comptes.service';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.scss']
})
export class ComptesComponent implements OnInit {

  comptes: any;
  selectedCompte: any;
  lineStylesData: any;
  basicOptions: any;
  basicData: any;
  constructor(private service:ComptesService) { }

  ngOnInit(): void {
    this.comptes = this.service.getComptes().subscribe(data =>{ 
      this.comptes = data
      this.comptes.shift()
    
    });
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          }
      ]
    };
    this.lineStylesData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              tension: .4,
              borderColor: '#42A5F5'
          },
      ]
  };
  



  }

}
