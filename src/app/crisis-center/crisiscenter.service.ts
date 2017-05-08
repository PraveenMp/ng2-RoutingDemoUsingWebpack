import { Injectable } from '@angular/core';
import {CrisisCenter} from './crisiscenter'
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrisisCenterService {
    constructor(private http:Http) { }

    getallCrises():Observable<CrisisCenter[]>{
        return this.http.get('./crisiscenter.json').map(res=>res.json());
    }

    getCrisisDetails(id:number):Observable<CrisisCenter>{
        return this.getallCrises().map(crises=>{return crises.find(c=>c.id===id)});
    }
}