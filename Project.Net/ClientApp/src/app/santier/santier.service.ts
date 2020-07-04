import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationService } from '../core/services/application.service';

import { Santier } from './santier.models';

@Injectable({
  providedIn: 'root'
})
export class SantierService {

    constructor(
        private http: HttpClient,
        private applicationService: ApplicationService) { }

    getFlower(id: number) {
        return this.http.get<Santier>(`${this.applicationService.baseUrl}api/santiers/${id}`);
    }
 

    saveFlower(santier: Santier) {
        return this.http.post(`${this.applicationService.baseUrl}api/santiers`, santier);
    }

    modifyFlower(santier: Santier) {
        return this.http.put(`${this.applicationService.baseUrl}api/santiers/${santier.id_Santier}`, santier);
    }

    deleteFlower(id: number) {
        return this.http.delete<any>(`${this.applicationService.baseUrl}api/santiers/${id}`);
    }
}
