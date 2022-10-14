import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  TranslateModule,
  TranslateLoader,
  // TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { APP_BASE_HREF } from '@angular/common';
import { ParamsService } from './params.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, MainLayoutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    RouterModule.forRoot(
      [
        // { path: '',
        //   redirectTo: "en",
        //   pathMatch: "full"
        // },
        {
          path: '',
          component: NxWelcomeComponent,
        },
        {
          path: 'remote-app',
          loadChildren: () =>
            import('remote-app/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: new ParamsService().getBaseLocation(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  // //define available languages
  // availableLng = ['en', 'he'];
  // //start the translation service
  // constructor(translateService: TranslateService) {
  //   //defines the default language
  //   let tmpLng = 'he';
  //   //gets the default browser language
  //   const currentLng = window.navigator.language.substring(0,2);
  //   if (this.availableLng.includes(currentLng))
  //      tmpLng = currentLng;
  //   translateService.setDefaultLang(tmpLng);
  // }
}
