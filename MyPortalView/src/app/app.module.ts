import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { typeReducer } from './app.reducer';

//NgModule holds the meta data.
@NgModule({
  //componenets, directives, and pipes go here.
  declarations: [
    AppComponent,
    ResultComponent
  ],
  //Additionally, I could have something called export here, which enables
  //Angular components to be visible to other NgModules.
  //In the imports, I can bringing in the exported Angular components.
  imports: [
    BrowserModule,
    //The type identifier is being coupled with typeReducer function.
    StoreModule.forRoot({ type: typeReducer })
  ],
  //Creators of the services go below.
  //Services, in Angular, is a form of dependency injection.
  //For example, if I have a Angular service called oneToTen, that can getList(),
  //I can getList() via using onToTen, anywhere in this NgModule, by using oneToTen.
  providers: [],
  //bootstrap comes with the Angular.
  bootstrap: [AppComponent]
})
export class AppModule { }
