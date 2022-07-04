import { DetailedProperty } from './../../core/state/properties.state';
import { Store } from '@ngrx/store';
import { DataManagerService } from './../../core/services/data-manager.service';
import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailed-property',
  templateUrl: './detailed-property.component.html',
  styleUrls: ['./detailed-property.component.css'],
})
export class DetailedPropertyComponent implements OnInit {
  property_slurp: string = '';
  property: any = {};
  slideIndex: number = 1;
  subSlideIndex: number = 4;

  constructor(
    private route: ActivatedRoute,
    private dataManager: DataManagerService,
    private store: Store<{ detailedProperty: DetailedProperty }>,
    private router: Router
  ) {}

  // showing selected slide and hiding rest of them for the bigger slider
  showDivs(n: number) {
    var i;
    var images = document.querySelectorAll<HTMLElement>(
      '.div-image__main-image'
    );
    if (n > images.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = images.length;
    }
    for (i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }
    console.log('images in func:', images);
    images[this.slideIndex - 1].style.display = 'block';
  }

  // showing selected slides and hiding rest of them for the smaller slider
  showDivSubImages(n: number) {
    var i;
    var images = document.querySelectorAll<HTMLElement>(
      '.div-image__sub-image'
    );

    if (n - images.length > 0 && n - images.length < 4) {
      this.subSlideIndex = images.length;
    }

    if (n - images.length === 4) {
      this.subSlideIndex = 4;
    }
    if (n < 1) {
      this.subSlideIndex = images.length;
    }
    for (i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }

    images[this.subSlideIndex - 1].style.display = 'block';
    images[this.subSlideIndex - 2].style.display = 'block';
    images[this.subSlideIndex - 3].style.display = 'block';
    images[this.subSlideIndex - 4].style.display = 'block';
  }

  //selecting next slide
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

  //clicking on image in the smaller slider
  subImageClicked(url: string, index: number) {
    this.slideIndex = index + 1;
    this.showDivs(1);
  }

  //clicking on back to properties button
  backToProperties() {
    this.router.navigateByUrl('/properties');
  }

  ngOnInit(): void {
    this.store.select('detailedProperty').subscribe((data) => {
      this.property = data;
    });
  }
}
