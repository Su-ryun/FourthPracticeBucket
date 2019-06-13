import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

//The below is considered an action, literally.
//https://ngrx.io/guide/store/actions
//This is how ngrx distinquishes objects to certain dispatches.
interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message$: Observable<string>

  constructor(private store: Store<AppState>){
    this.message$ = this.store.select('message');
  }

  spanishMessage() {
    // Essentially, if this was an Android development,
    // I am broadcasting an intent, so that the BroadcastReceiver can
    // act upon it.
    this.store.dispatch({type: 'SPANISH'});
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'});
  }
}
