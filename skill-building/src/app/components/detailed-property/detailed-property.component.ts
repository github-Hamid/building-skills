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
  constructor(private route : ActivatedRoute, private dataManager : DataManagerService) { }

  ngOnInit(): void {
     this.property_slurp = this.route.snapshot.params['property_slurp'];
     this.dataManager.getDetailedProperty(this.property_slurp)
     .subscribe((data)=>{
      this.property = data;
     })
  }

}
