import { Component, OnInit } from '@angular/core';
import { ComptesService } from '../../service/comptes.service';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.scss']
})
export class ComptesComponent implements OnInit {

  comptes: any;
  selectedCompte: any
  constructor(private service:ComptesService) { }

  ngOnInit(): void {
    this.comptes = this.service.getComptes().subscribe(data => this.comptes = data);
  }

}
