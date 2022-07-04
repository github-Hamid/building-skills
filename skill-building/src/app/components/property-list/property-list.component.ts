import {
  PropertyList,
  propertyList,
} from './../../core/state/properties.state';
import {
  getPropertiesList,
  getProperty,
} from './../../core/actions/properties.actions';
import { DataManagerService } from './../../core/services/data-manager.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  constructor(
    private dataManager: DataManagerService,
    private router: Router,
    private store: Store<{ property: PropertyList }>
  ) {}

  properties: Array<any> = [];
  p: number = 1;
  totalCount: number = 0;

  ngOnInit(): void {
    this.store.dispatch(getPropertiesList({ limit: 10, offset: 0 }));

    this.store.select('property').subscribe((data) => {
      if (data) {
        this.properties = data.data;
        this.totalCount = data.totalCount;
      }
    });
  }

  // clicking on pagination numbers
  pageIsChanged(page: number) {
    this.store.dispatch(
      getPropertiesList({ limit: 10, offset: 10 * (page - 1) })
    );
    this.p = page;
  }

  // clicking on property card
  propertyClicked(property_slurp: string) {
    this.store.dispatch(getProperty({ property_slurp: property_slurp }));
    this.router.navigate(['/property', property_slurp]);
  }

  //logout button clicking
  logoutBtnClicked() {
    this.router.navigateByUrl('/');
    localStorage.removeItem('token');
  }
}
