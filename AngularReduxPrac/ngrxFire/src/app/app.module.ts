import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Store is a state, the entire thing is a state.
//The @ngrx/store library also contains the Action.
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //forRoot is needed for your Store to be visible throughout your entire app
    //by registering a global provider.
    StoreModule.forRoot({ message: simpleReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
