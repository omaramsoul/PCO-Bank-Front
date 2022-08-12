import { Component, OnInit } from '@angular/core';
import { ImpayesDaiPtfService } from '../../service/impayes-dai-ptf.service';

@Component({
  selector: 'app-impayes-dai-ptf',
  templateUrl: './impayes-dai-ptf.component.html',
  styleUrls: ['./impayes-dai-ptf.component.scss']
})
export class ImpayesDaiPtfComponent implements OnInit {
  clientImpayes: any;
  headers = ["N° imp.", "Opé.", "Nat.", "Date créa.", "Dev.", "Mon.", "Motif"]

  constructor(private service: ImpayesDaiPtfService ) { }

  ngOnInit(): void {
    this.clientImpayes = this.service.getImpayes().subscribe(data =>{ this.clientImpayes = data});
  }

}
