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

    public fl_prenume: string;

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

}


interface Utilizator {
    id: number;
    nume: string,
    prenume: string,
    user: string,
    parola: string,
}
