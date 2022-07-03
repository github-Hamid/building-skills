import { Store } from '@ngrx/store';
import { DataManagerService } from './../../core/services/data-manager.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-detailed-property',
  templateUrl: './detailed-property.component.html',
  styleUrls: ['./detailed-property.component.css']
})
export class DetailedPropertyComponent implements OnInit {

property_slurp : string = "";
property : any = {};
  constructor(private route : ActivatedRoute, private dataManager : DataManagerService,private store : Store<{detailedProperty : {address_area : string,
    address : string,
    total_offering : number,
    total_term : number,
    projected_annual_returns_min : number,
    img_src_main : string,
    images : Array<string>}}>) { }

  ngOnInit(): void {
    this.store.select("detailedProperty")
    .subscribe((data)=>{
      console.log("data3:", data);
      this.property = data;
    } )
    //  this.property_slurp = this.route.snapshot.params['property_slurp'];
    //  this.dataManager.getDetailedProperty(this.property_slurp)
    //  .subscribe((data)=>{
    //   this.property = data;
    //  })

  }

}
