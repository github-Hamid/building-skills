import { AuthGuard, loginGuard } from './core/auth.guard';
import { DetailedPropertyComponent } from './components/detailed-property/detailed-property.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  {
    path: 'properties',
    component: PropertyListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'property/:property_slurp',
    component: DetailedPropertyComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
