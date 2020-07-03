import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SantierComponent } from './santier/santier.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AngajatiDetailsComponent } from './angajati-details/angajati-details.component';
import { SantierDetailsComponent } from './santier-details/santier-details.component'; 

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        SantierComponent,
        FetchDataComponent,
        AngajatiDetailsComponent,
        SantierDetailsComponent, 
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'santier', component: SantierComponent },
            {
                path: 'santier-details/:id_Santier',
                component: SantierDetailsComponent
            },
            {
                path: 'fetch-data',
                component: FetchDataComponent,
            },
            {
                path: 'fetch-data/:id_Angajat',
                component: AngajatiDetailsComponent,
            },
          //  { path: 'my-route', component: CounterComponent },
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
