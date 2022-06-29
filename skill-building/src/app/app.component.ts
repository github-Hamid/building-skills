
import { DataManagerService } from './core/services/data-manager.service';

import {Data} from "./core/data"
import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private dataManager : DataManagerService, public translate : TranslateService )
{
  translate.addLangs(['en', 'fa']);
  translate.setDefaultLang('en');
  const browserLang = translate.getBrowserLang();
  translate.use(browserLang?.match(/en|fa/) ? browserLang : "en");
}

  title = 'skill-building';

  ngOnInit(): void {

  }


}
