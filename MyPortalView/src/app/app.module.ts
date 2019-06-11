import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { typeReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    //The type identifier is being coupled with typeReducer function.
    StoreModule.forRoot({ type: typeReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
