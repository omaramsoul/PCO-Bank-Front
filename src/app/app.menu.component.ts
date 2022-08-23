import {Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `
        <div class="menu">
            <ul class="layout-menu">
                <li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']},

            {
                label: 'Visions', icon: 'pi pi-eye', routerLink: ['/pages'],
                items: [
                    {label: 'VGC', icon: 'pi pi-globe', routerLink: ['/pages/empty']}
                ]
            },
        ];
    }
}
