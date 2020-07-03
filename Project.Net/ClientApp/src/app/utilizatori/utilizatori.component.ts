import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-utilizatori',
  templateUrl: './utilizatori.component.html',
  styleUrls: ['./utilizatori.component.css']
})
export class UtilizatoriComponent{
    private utilizators: Utilizator[];

    public id: number;
    public nume: string;
    public prenume: string;
    public user: string;
    public parola: string;

    //filtru
    public fl_prenume: string;

    //create
    public create_nume: string;
    public create_prenume: string;
    public create_user: string;
    public create_parola: string;


    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
        this.loadUtilizators();
    }
    loadUtilizators() {
        this.http.get<Utilizator[]>(this.baseUrl + 'api/utilizators').subscribe(result => {
            this.utilizators = result;
            console.log(this.utilizators);
        },
            error => console.error(error));
    }

    loadUtilizatorsFilterBy() {
        this.http.get<Utilizator[]>(this.baseUrl + 'api/utilizators' + '?prenume=' + this.fl_prenume).subscribe(result => {
            this.utilizators = result;
            console.log(this.utilizators);
        },
            error => console.error(error));
    }

    delete(utilizatorId: string) {
        if (confirm('Are you sure you want to delete the employee with id ' + utilizatorId + '?')) {
            this.http.delete(this.baseUrl + 'api/utilizators/' + utilizatorId)
                .subscribe
                (
                    result => {
                        alert('employee successfully deleted!');
                        this.loadUtilizators();
                    },
                    error => alert('Cannot delete employee - maybe it has comments?')
                )
        }
    }

    submit() {

        var utilizator: Utilizator = <Utilizator>{};

        utilizator.nume = this.create_nume;
        utilizator.prenume = this.create_prenume;
        utilizator.user = this.create_user;
        utilizator.parola = this.create_parola;


        this.http.post(this.baseUrl + 'api/utilizators', utilizator).subscribe(result => {
            console.log('success!');
            this.loadUtilizators();
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


interface Utilizator {
    id: number;
    nume: string,
    prenume: string,
    user: string,
    parola: string,
}
