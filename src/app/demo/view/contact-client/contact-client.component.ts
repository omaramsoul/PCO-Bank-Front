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
  headers : String[];

  constructor(private service: ClientContactService ) { }

  ngOnInit(): void {
    this.clientContact = this.service.getClientContact().subscribe(data =>{ 
      this.clientContact = data;
      this.headers = data[0];
      this.clientContact.shift();
    
    });
  }


  

  

  

  


}
