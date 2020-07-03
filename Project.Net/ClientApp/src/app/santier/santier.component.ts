import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeInterval } from 'rxjs';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './santier.component.html'
})
export class SantierComponent {
    public santiere: Santier[];  

    public Id_Santier: number;
    public nume: string;
    public locatie: string;
    public nr_angajati: number; 


    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
        this.loadSanteire();
    }


    loadSanteire() {
        this.http.get<Santier[]>(this.baseUrl + 'api/santiers').subscribe(result => {
            this.santiere = result;
            console.log(this.santiere);
        },
            error => console.error(error));
    }

    delete(santierId: string) {
        if (confirm('Are you sure you want to delete the santier with id ' + santierId + '?')) {
            this.http.delete(this.baseUrl + 'api/santiers/' + santierId)
                .subscribe
                (
                    result => {
                        alert('employee successfully deleted!');
                        this.loadSanteire();
                    },
                    error => alert('Cannot delete employee - maybe it has comments?')
                )
        }
    }

  

    submit() {

        var santier: Santier = <Santier>{};

        santier.nume = this.nume;
        santier.locatie = this.locatie; 
        

        this.http.post(this.baseUrl + 'api/santiers', santier).subscribe(result => {
            console.log('success!');
            this.loadSanteire();
        },
            error => {
                if (error.status == 400) {
                    console.log(error.error.errors);
                    if (error.error.errors.Sum != "") {
                        // this.sumE = error.error.errors.Sum[0];

                    } else if (error.error.errors.Description != "") {
                        // this.descriptionE = error.error.errors.Description[0];

                    } else if (error.error.errors.Type != "") {

                        // this.typeE = error.error.errors.Type[0];
                    }

                }
            });
    }
}


interface Santier {
    Id_Santier: number;
    locatie: string;
    nume: string;
    nr_angajati: number;

}
