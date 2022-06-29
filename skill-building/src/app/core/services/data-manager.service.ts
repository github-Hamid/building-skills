import { Injectable } from '@angular/core';
 import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import { Observable, throwError } from 'rxjs';
import { Data } from '../data';
import {catchError} from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor(private http : HttpClient) {}

   getPropertyList(limit : number, offset : number) : Observable<Data>
  {
   return this.http.post<Data>("https://alpha.buyproperly.ca/api/search/v1", {limit : limit, offset: offset})
         .pipe(catchError(this.errorHandler));
  }

  getDetailedProperty(property_slurp : string) : Observable<any>
  {
    return this.http.get(`https://alpha.buyproperly.ca/api/property/v1/details/slurp/${property_slurp}`);
  }

  login(email: string, password : string) : Observable<any>
  {
    return this.http.post<any>("https://alpha.buyproperly.ca/api/user/v1/login", {email: email, password : password});
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");

}

}
