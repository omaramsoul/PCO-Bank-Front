import { ClientService } from './demo/service/client.service';
import {Component, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { BreadcrumbService } from './app.breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem, TreeNode } from 'primeng/api';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html', 
    changeDetection: ChangeDetectionStrategy.Default,
    styleUrls: ['../assets/sass/layout/_topbar.scss'],
})
export class AppTopBarComponent implements OnDestroy{

    subscription: Subscription;
    clientId: string;
    clients:any;
    items: MenuItem[];
    detectChanges: any;
    dropDownData: MenuItem[];
    clientInfo: any;
    


    constructor(public breadcrumbService: BreadcrumbService, 
                public app: AppComponent, 
                public appMain: AppMainComponent,
                public service: ClientService,
               ) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
        
 });
        
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    getClientIdValue() {
        this.service.setClientIdValue(this.clientId);
        this.service.getClientById().subscribe(data => {
        this.service.setClient(data);
        console.log(this.service.client)
        });

    }
}
