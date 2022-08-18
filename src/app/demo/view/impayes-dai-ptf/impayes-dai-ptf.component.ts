import { Component, OnInit } from '@angular/core';
import { ImpayesDaiPtfService } from '../../service/impayes-dai-ptf.service';
import { Formatter } from '../Formatter';

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
      let colorMap = Formatter.format(data);
      console.log(colorMap);
      this.headers = data[0];
      this.clientImpayes.shift();
    });
  }

}
