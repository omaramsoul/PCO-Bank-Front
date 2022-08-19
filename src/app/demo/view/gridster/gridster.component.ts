import { Component, OnInit } from '@angular/core';
import { CompactType, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';


@Component({
  selector: 'app-gridster',
  templateUrl: './gridster.component.html',
  styleUrls: ['./gridster.component.scss', 
              '../../../../assets/sass/layout/_gridster.scss']
})
export class GridsterComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  cardToContent = new Map<String, String>([
    ["Alertes Commerciales",`<app-alertes-commerciales></app-alertes-commerciales>`],
    ["Crédits",`<app-credits></app-credits>`],
    ["Impayes DAI/PTF",`<app-impayes-dai-ptf></app-impayes-dai-ptf>`],
    ["Mouvements en attente",`<app-mouvement-en-attente></app-mouvement-en-attente>`],
    ["Autorisations",`<app-autorisations></app-autorisations>`],
    ["Mouvements client",`<app-mouvement-client></app-mouvement-client>`],
    ["Prélèvement",`<app-prelevement></app-prelevement>`],
    ["Remises daily",`<app-remises-daily></app-remises-daily>`],
    ["Remises protefeuille",`<app-remises-portefeuille></app-remises-portefeuille>`],
    ["Synthèse client",`<app-synthese-client></app-synthese-client>`],
    ["Reporting client",`<app-reporting-client></app-reporting-client>`],
    ["Comptes",`<app-comptes></app-comptes>`],
    ["Contact client",`<app-contact-client></app-contact-client>`],
    ["Informations",`<app-info-client></app-info-client>`],
    ["Géolocalisation",`<app-geolocalisation></app-geolocalisation>`],
    ["Pièces dossier",`<app-pieces-dossier></app-pieces-dossier>`],
    ["Signature client",`<app-signature-client></app-signature-client>`]

  ]);

  constructor() { }

  ngOnInit(): void {

        this.options = {
          compactType: CompactType.None,
          disablePushOnResize: false,
          draggable: {
            enabled: true
          },
          gridType: GridType.Fit,
          resizable: {
            enabled: true
          },

          pushItems: true,
          itemChangeCallback: GridsterComponent.itemChange,
          itemResizeCallback: GridsterComponent.itemResize,
        };
   
        this.dashboard = [];
  }


  changedOptions() {
    this.options.api.optionsChanged();
  }


  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }


  addItem(cardTitle: string) {
    this.dashboard.push({cols: 2, rows: 1, y: 0, x: 0, cardTitle: cardTitle, color: "#0d89ec", content: this.cardToContent.get(cardTitle)});
  }

  changeCardColor(item, theColor: string) {
    item.color = theColor;
  }


}
