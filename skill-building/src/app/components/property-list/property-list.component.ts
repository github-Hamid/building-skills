import { PropertyList, propertyList } from './../../core/state/properties.state';
import { getPropertiesList, getProperty } from './../../core/actions/properties.actions';
import { DataManagerService } from './../../core/services/data-manager.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private dataManager : DataManagerService, private router : Router, private store : Store<{property : {totalCount : number, data : any}}>) { }

  properties : Array<any> = [];
  p: number = 1;
  totalCount : number = 0;

  ngOnInit(): void {
    this.store.dispatch(getPropertiesList({limit :10,offset : 0}))
    // this.dataManager.getPropertyList(10,0)
    // .subscribe((data)=>{
    //   console.log("data:", data);
    //   this.totalCount = data.totalCount;
    //   this.properties = data.data;
    // })
    this.store.select('property')
    .subscribe((data)=>{
      if(data)
      {
        this.properties = data.data;
        this.totalCount = data.totalCount;
      }

    })
  }

  pageIsChanged(page : number){
    this.store.dispatch(getPropertiesList({limit : 10,offset : 10 * (page - 1)}));
  //  this.dataManager.getPropertyList(10,10 * (page - 1))
  //  .subscribe((data)=>{
  //   console.log("new data:", data, "page: ", page);
  //   this.properties = data.data;
  //   this.p = page;
  //  })
  this.p = page;

  }


  propertyClicked(property_slurp : string)
  {
    // this.store.dispatch()
    // this.router.navigate(['/property', property_slurp]);
    console.log("property_slurp:", property_slurp);
    this.store.dispatch(getProperty({property_slurp : property_slurp}));
    this.router.navigate(['/property', property_slurp]);
  }

}
