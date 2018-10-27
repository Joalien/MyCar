import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SelectionPage} from "../pages/selection/selection";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import {FourchettePipe} from "../pipes/search/fourchette";
import {DescriptionPage} from "../pages/description/description";
import {Car} from "../components/car/car";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SelectionPage,
    DescriptionPage,
    Car,
    SearchPipe,
    SortPipe,
    FourchettePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SelectionPage,
    DescriptionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
