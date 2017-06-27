import { HttpClient } from '../../shared/http.client'

import { Observable } from "rxjs/Observable"
import { Injectable } from '@angular/core'
import { RequestOptions, Headers } from '@angular/http'
import { Subject } from "rxjs/Subject"

const apiUrl: string = 'https://bitonic.nl/api/' // GET
const buy: string = apiUrl+"buy"
const sell: string = apiUrl+"sell"

@Injectable()
export class BitonicService {

    constructor(private http: HttpClient) {
    }

    getBuyPrice(): Observable<any> {
        return this.http.get(buy)
            .map(res => res.json())
    }
}