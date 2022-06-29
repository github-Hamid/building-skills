import { DataManagerService } from './../../core/services/data-manager.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

properties : Array<any> = [];
p: number = 1;
totalCount : number = 0;
  constructor(private dataManager : DataManagerService, private router : Router) { }

  ngOnInit(): void {
    this.dataManager.getPropertyList(10,0)
    .subscribe((data)=>{
      console.log(data);
      this.totalCount = data.totalCount;
      this.properties = data.data;
    })
  }

  pageIsChanged(page : number){
   this.dataManager.getPropertyList(10, page - 1)
   .subscribe((data)=>{
    this.properties = data.data;
    this.p = page;
   })

  }


  propertyClicked(property_slurp : string)
  {
    this.router.navigate(['/property', property_slurp]);
  }

}
