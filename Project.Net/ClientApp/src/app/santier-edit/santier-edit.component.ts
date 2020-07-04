import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Santier } from '../santier/santier.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-santier-edit',
  templateUrl: './santier-edit.component.html',
  styleUrls: ['./santier-edit.component.css']
})
export class SantierEditComponent implements OnInit {


    private santier: Santier;
    public update_id: number = this.route.snapshot.params['id_Santier'];
 
    public update_numesantier: string;
    public update_locatie: string;

    constructor(

        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string,
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    loadSantier(santierId: string) {
        this.http.get<Santier>(this.baseUrl + 'api/santiers/' + santierId).subscribe(result => {
            this.santier = result;

            console.log(this.santier);
        }, error => console.error(error));
    }


    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.loadSantier(params.get('id_Santier'));
        });
    }

    update(santierId: string) {
        var santier: Santier = <Santier>{};

        santier.id_Santier = Number(this.update_id);
        santier.locatie = this.update_locatie;
        santier.nume_Santier = this.update_numesantier;


        this.http.put(this.baseUrl + 'api/santiers/' + santier.id_Santier, santier).subscribe(result => {
            console.log('success!');
           // this.loadSantier();
            alert("S-a modificat cu succes!")

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

        
      //  this.router.navigate(['/santier']);
    }

}
