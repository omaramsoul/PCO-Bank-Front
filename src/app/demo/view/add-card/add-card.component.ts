
import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { GridsterComponent } from '../gridster/gridster.component';
import { EmptyDemoComponent } from '../vgc.component';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {


  items: MenuItem[];

  constructor(private cardAdder: GridsterComponent){}
  
  ngOnInit() {

  }

  addNewCard(cardTitle: string) {
    this.cardAdder.addItem(cardTitle);
  }

}

