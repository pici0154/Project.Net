import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SantierEditComponent } from './santier-edit/santier-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { AngularMaterialModule } from '../shared/angular-material.module';


import { SantierRoutingModule } from './santier-routing.module';

import { SantierService } from './santier.service';

@NgModule({
    declarations: [SantierRoutingModule.routedComponents],
    imports: [
        CommonModule,
        SantierRoutingModule,
        AngularMaterialModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [SantierService],
})
export class SantierModule { }

