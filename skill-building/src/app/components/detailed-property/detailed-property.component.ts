import { Store } from '@ngrx/store';
import { DataManagerService } from './../../core/services/data-manager.service';
import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"

@Component({
  selector: 'app-detailed-property',
  templateUrl: './detailed-property.component.html',
  styleUrls: ['./detailed-property.component.css']
})
export class DetailedPropertyComponent implements OnInit {

property_slurp : string = "";
property : any = {};
slideIndex: number = 1;
subSlideIndex : number = 4;
  constructor(private route : ActivatedRoute, private dataManager : DataManagerService,private store : Store<{detailedProperty : {address_area : string,
    address : string,
    total_offering : number,
    total_term : number,
    projected_annual_returns_min : number,
    img_src_main : string,
    images : Array<string>}}>,
    private router : Router) { }

// showing selected slides and hiding rest of them
showDivs(n: number) {
  var i;
  var images = document.querySelectorAll<HTMLElement>('.div-image__main-image');
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

showDivSubImages(n : number)
{
  var i;
  var images = document.querySelectorAll<HTMLElement>('.div-image__sub-image');
  if (n > images.length) {
    this.subSlideIndex = 4;
  }
  if (n < 1) {
    this.subSlideIndex = images.length;
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  console.log("images in func:", images);
  images[this.subSlideIndex - 1].style.display = 'block';
  images[this.subSlideIndex - 2].style.display = 'block';
  images[this.subSlideIndex - 3].style.display = 'block';
  images[this.subSlideIndex - 4].style.display = 'block';
}

//selecting next slides
plusDivs(n: number) {
  this.showDivs((this.slideIndex += n));
}

//selecting next slides
plusSubDivs(n: number) {
  this.showDivSubImages((this.subSlideIndex += n));
}


ngAfterViewChecked(): void {
  this.showDivs(this.slideIndex);
  this.showDivSubImages(this.subSlideIndex);
}

subImageClicked(url : string, index : number)
{
  console.log("url:", url, "index:", index);
  this.slideIndex = index + 1;
   this.showDivs(1);
}

backToProperties()
{
  this.router.navigateByUrl("/properties");
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
