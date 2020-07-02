import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cost-item-details',
  templateUrl: './cost-item-details.component.html',
  styleUrls: ['./cost-item-details.component.css']
})
export class CostItemDetailsComponent implements OnInit {
    private angajat: AngajatiCuSantiere;


    public enableEdit: boolean = false;
    public enableEditIndex: number = null;


    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string,
        private route: ActivatedRoute) {

    }
    loadCostItem(angajatId: string) {
        this.http.get<AngajatiCuSantiere>(this.baseUrl + 'api/angajats/' + angajatId).subscribe(result => {
            this.angajat = result;
            console.log(this.angajat);
        }, error => console.error(error));
    }
    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.loadCostItem(params.get('santierId'));
        });
  }
    edit(santierId: number) {
        this.enableEdit = true;
        this.enableEditIndex = santierId;
        console.log(santierId);
    }
}
interface AngajatiCuSantiere {
    nume: number;
    data: Date;
    ora_start: Date;
    ora_stop: Date;
    date: Date;
    santiere: Santiere[];
}

interface Santiere {
    nume_santier: string;
    locatie: string; 
}
