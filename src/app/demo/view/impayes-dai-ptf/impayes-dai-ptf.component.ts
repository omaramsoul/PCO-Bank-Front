import { Component, OnInit } from '@angular/core';
import { ImpayesDaiPtfService } from '../../service/impayes-dai-ptf.service';

@Component({
  selector: 'app-impayes-dai-ptf',
  templateUrl: './impayes-dai-ptf.component.html',
  styleUrls: ['./impayes-dai-ptf.component.scss']
})
export class ImpayesDaiPtfComponent implements OnInit {
  clientImpayes: any;
  headers : String[];

  constructor(private service: ImpayesDaiPtfService ) { }

  ngOnInit(): void {
    this.clientImpayes = this.service.getImpayes().subscribe(data =>{ 
      this.clientImpayes = data;
      this.headers = data[0];
      this.clientImpayes.shift();
      console.log(this.clientImpayes)
    });
  }

}
