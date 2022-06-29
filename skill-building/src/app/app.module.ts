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
import { propertyReducer } from './core/reducers/properties.reducer';

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
   StoreModule.forRoot({property: propertyReducer}),
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
