import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { appReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ type: appReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
