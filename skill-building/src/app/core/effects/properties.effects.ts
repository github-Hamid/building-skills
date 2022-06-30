import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';
import { getPropertiesList, getPropertiesListSuccess, getProperty, getPropertySuccess, login, loginSuccess, errorInLogin } from './../actions/properties.actions';
import { DataManagerService } from './../services/data-manager.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class PropertiesEffect{

  constructor(private dataManager : DataManagerService, private action$ : Actions, private router : Router){}


  loadProperties$ = createEffect(()=>{
   return this.action$.pipe(
      ofType(getPropertiesList),
       exhaustMap((action) => {
        return this.dataManager.getPropertyList(action.limit, action.offset)
        .pipe(map((data)=>{
          console.log("data1", data);
          return getPropertiesListSuccess({list : data});
        }))
       })
    )
  })

  loadProperty$ = createEffect(() => {
    return this.action$.pipe(ofType(getProperty),
    exhaustMap((action) => {
      console.log("action3:", action);
      return this.dataManager.getDetailedProperty(action.property_slurp)
            .pipe(map((data) => {
              console.log("data2: ", data);
              return getPropertySuccess({property : data});
            }))
    })
    )
  })

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(login),
       exhaustMap((action) => {
       return this.dataManager.login(action.email, action.password)
        .pipe(map((data)=>{
          this.router.navigateByUrl("properties");
          return loginSuccess({name : data.data.firstName});
        })
        )
      })
    )
  })
}

