import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientContactService } from '../../service/client-contact.service';

@Component({
  selector: 'app-contact-client',
  templateUrl: './contact-client.component.html',
  styleUrls: ['./contact-client.component.scss']
})
export class ContactClientComponent implements OnInit {
  filterString : String;
  
  clientContact : any;
  constructor(private service: ClientContactService ) { }

  ngOnInit(): void {
    this.clientContact = this.service.getClientContact().subscribe(data =>{ this.clientContact = data});
    this.onFilterChange();
    
  }
  
  onFilterChange() {
    this.clientContact = this.clientContact.filter((invoice) => this.isMatch(invoice));
  }

  isMatch(item) {
    if (item instanceof Object) {
      return Object.keys(item).some((k) => this.isMatch(item[k]));
    } else {
      return item.toString().indexOf(this.filterString) > -1
    }
  }

}
