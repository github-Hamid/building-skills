import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataManagerService {
  constructor(private http: HttpClient) {}

  // getting property list with limit and offset
  getPropertyList(limit: number, offset: number): Observable<any> {
    return this.http
      .post<any>('https://alpha.buyproperly.ca/api/search/v1', {
        limit: limit,
        offset: offset,
      })
      .pipe(
        map((value) => {
          return {
            ...value,
            data: value.data.filter((index: any) => {
              return index.id_properties_base;
            }),
          };
        }),
        catchError(this.errorHandler)
      );
  }

  // getting property with property slurp
  getDetailedProperty(property_slurp: string): Observable<any> {
    return this.http.get(
      `https://alpha.buyproperly.ca/api/property/v1/details/slurp/${property_slurp}`
    );
  }

  // login with email and password
  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>('https://alpha.buyproperly.ca/api/user/v1/login', {
        email: email,
        password: password,
      })
      .pipe(
        tap((res) => localStorage.setItem('token', res.jwttoken)),
        catchError(this.errorHandler)
      );
  }

  // handling error for login request
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server error.');
  }
}
