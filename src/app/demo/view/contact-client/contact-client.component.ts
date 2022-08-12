import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientContactService } from '../../service/client-contact.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-contact-client',
  templateUrl: './contact-client.component.html',
  styleUrls: ['./contact-client.component.scss']
})
export class ContactClientComponent implements OnInit {

  
  clientContact : any;

  constructor(private service: ClientContactService ) { }

  ngOnInit(): void {
    this.clientContact = this.service.getClientContact().subscribe(data =>{ this.clientContact = data});
  }


  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}

  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.clientContact);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "products");
    });
}
  

  


}
