import { Store } from '@ngrx/store';
import { DataManagerService } from './../../core/services/data-manager.service';
import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-detailed-property',
  templateUrl: './detailed-property.component.html',
  styleUrls: ['./detailed-property.component.css']
})
export class DetailedPropertyComponent implements OnInit {

property_slurp : string = "";
property : any = {};
slideIndex: number = 1;
  constructor(private route : ActivatedRoute, private dataManager : DataManagerService,private store : Store<{detailedProperty : {address_area : string,
    address : string,
    total_offering : number,
    total_term : number,
    projected_annual_returns_min : number,
    img_src_main : string,
    images : Array<string>}}>) { }

// showing selected slides and hiding rest of them
showDivs(n: number) {
  var i;
  var images = document.querySelectorAll<HTMLElement>('.main__div-image');
  if (n > images.length) {
    this.slideIndex = 1;
  }
  if (n < 1) {
    this.slideIndex = images.length;
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  console.log("images in func:", images);
  images[this.slideIndex - 1].style.display = 'block';
}

//selecting next slides
plusDivs(n: number) {
  this.showDivs((this.slideIndex += n));
}

ngAfterViewChecked(): void {
  this.showDivs(this.slideIndex);
}

  ngOnInit(): void {
    this.store.select("detailedProperty")
    .subscribe((data)=>{
      this.property = data;
        } )
    //  this.property_slurp = this.route.snapshot.params['property_slurp'];
    //  this.dataManager.getDetailedProperty(this.property_slurp)
    //  .subscribe((data)=>{
    //   this.property = data;
    //  })





  }

}
