import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from './shared/angular-material.module';

import { CoreModule } from './core/core.module'

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { SantierComponent } from './santier/santier.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SantierDetailsComponent } from './santier-details/santier-details.component';
import { UtilizatoriComponent } from './utilizatori/utilizatori.component'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        SantierComponent,
        FetchDataComponent,
        SantierDetailsComponent,
        UtilizatoriComponent,
        LoginComponent,
        RegistrationComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent, pathMatch: 'full'
            },

            {
                path: 'santier',
                component: SantierComponent
            },

            {
                path: 'santier-details/:id_Santier',
                component: SantierDetailsComponent
            },
            {
                path: 'fetch-data',
                component: FetchDataComponent,
            },
            {
                path: 'utilizatori',
                component: UtilizatoriComponent,
            },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegistrationComponent }
            
        ]),
        AngularMaterialModule,
        CoreModule,
        BrowserAnimationsModule,
    ],
    exports: [AngularMaterialModule, CoreModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
