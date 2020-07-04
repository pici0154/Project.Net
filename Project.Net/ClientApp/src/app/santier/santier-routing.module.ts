import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SantierComponent } from './santier.component';
import { SantierEditComponent } from './santier-edit/santier-edit.component';
 

const routes: Routes = [
    {
        path: '', component: SantierComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
           // { path: 'list', component: FlowersListComponent },
            { path: 'edit/:id', component: SantierEditComponent },
            { path: 'edit', component: SantierEditComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SantierRoutingModule {
    static routedComponents = [SantierComponent,  SantierEditComponent];
}
