// import { APP_BASE_HREF } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { ParamsService } from './params.service';

@Component({
  selector: 'ng-mdf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  language: string;
  $localize = 'kulululu';

  constructor(
    translate: TranslateService,
    private paramsSvc: ParamsService,
    @Inject(APP_BASE_HREF) baseHref:string) {

    this.language = localStorage.getItem('lang') || baseHref;
    this.language = baseHref;
    translate.setDefaultLang(this.language);
    translate.use(this.language);
  }


}
