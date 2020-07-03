import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-santier-details',
  templateUrl: './santier-details.component.html',
  styleUrls: ['./santier-details.component.css']
})
export class SantierDetailsComponent implements OnInit {

    private santier: SantierWithDetails;

    constructor(
       
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string,
        private route: ActivatedRoute) {

    }

      loadSantier(santierId: string) {
        this.http.get<SantierWithDetails>(this.baseUrl + 'api/santiers/' + santierId).subscribe(result => {
            this.santier = result;

            console.log(this.santier);
        }, error => console.error(error));
    }


    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.loadSantier(params.get('id_Santier'));
        });
    }




}


interface Angajat {
    nume: string
}

interface SantierWithDetails {
    nume: string;
    locatie: string;
    ora_Start: Date;
    ora_Stop: Date;
    pauza: Date;
    ore_Lucrate: string;
    angajati: Angajat[];
}
 
