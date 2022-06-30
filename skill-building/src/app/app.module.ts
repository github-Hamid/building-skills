import { PropertiesEffect } from './core/effects/properties.effects';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { HomeComponent } from './components/home/home.component';
import { DetailedPropertyComponent } from './components/detailed-property/detailed-property.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
 import { StoreModule } from '@ngrx/store';
import { propertyReducer, detailedPropertyReducer, loginReducer } from './core/reducers/properties.reducer';
import { EffectsModule } from '@ngrx/effects';

export function HttpLoaderFactory(http:HttpClient)
{
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    HomeComponent,
    DetailedPropertyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    EffectsModule.forRoot([PropertiesEffect]),
   StoreModule.forRoot({property: propertyReducer, detailedProperty : detailedPropertyReducer, login : loginReducer}),
    TranslateModule.forRoot({
      loader : {
        provide : TranslateLoader,
        useFactory : HttpLoaderFactory,
        deps : [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
