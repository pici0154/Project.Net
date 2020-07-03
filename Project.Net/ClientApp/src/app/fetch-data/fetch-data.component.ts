import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeInterval } from 'rxjs';

@Component({
    selector: 'app-fetch-data',
    templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
    public angajats: Angajat[];

    public id_angajat: number ;
    public nume: string;
    public data: Date ;
    public ora_start: Date;
    public ora_stop: Date ;
    public pauza: Date;
    public adaugatde: string;


    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
        this.loadAngajats();
    }


    loadAngajats() {
        this.http.get<Angajat[]>(this.baseUrl + 'api/angajats').subscribe(result => {
            this.angajats = result;
            console.log(this.angajats);
        },
            error => console.error( error));
    }

    delete(angajatId: string) {
        if (confirm('Are you sure you want to delete the employee with id ' + angajatId + '?')) {
            this.http.delete(this.baseUrl + 'api/angajats/' + angajatId)
                .subscribe
                (
                    result => {
                        alert('employee successfully deleted!');
                        this.loadAngajats();
                    },
                    error => alert('Cannot delete employee - maybe it has comments?')
                )
        }
    }

    edit(e, angajatId: string) {
        var angajat: Angajat = <Angajat>{};

    }

    submit() {

        var angajat: Angajat = <Angajat>{};
      
        angajat.nume = this.nume;
        angajat.data = this.data; 
        angajat.ora_start = this.ora_start;
        angajat.ora_stop = this.ora_stop; //new Date;
        angajat.pauza = this.pauza; 
        angajat.adaugatde = this.adaugatde;

        this.http.post(this.baseUrl + 'api/angajats', angajat).subscribe(result => {
            console.log('success!');
            this.loadAngajats();
        },
        error => {    
            if (error.status == 400) {
                console.log(error.error.errors);
                if (error.error.errors.Sum != "") {
                   // this.sumE = error.error.errors.Sum[0];

                } else if (error.error.errors.Description != "")
                {
                   // this.descriptionE = error.error.errors.Description[0];

                } else if (error.error.errors.Type != "") {

                // this.typeE = error.error.errors.Type[0];
                }

            }
        });
    }
}


interface Angajat {
    id_angajat: number;
    nume: string;
    data: Date;
    ora_start: Date;
    ora_stop: Date;
    pauza: Date;
    adaugatde: string;
}
