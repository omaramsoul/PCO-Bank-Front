import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {EmptyDemoComponent} from './demo/view/vgc.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {AppMainComponent} from './app.main.component';
import {AppCalendarComponent} from './pages/app.calendar.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: DashboardDemoComponent},                   
                    {path: 'uikit/menu', loadChildren: () => import('./demo/view/menus/menus.module').then(m => m.MenusModule)},                
                    {path: 'uikit/charts', component: ChartsDemoComponent},
                    {path: 'pages/calendar', component: AppCalendarComponent},
                    {path: 'pages/empty', component: EmptyDemoComponent},
                ]
            },
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
