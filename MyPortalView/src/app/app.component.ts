import { Component } from '@angular/core';

//If the below is: import { Observable } from 'rxjs/Observable';
//Then I see the big fat errors everywhere.
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

interface Type {
  type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  type$: Observable<string>

  constructor(private store: Store<Type>){
    //So, in the app.module, it has an object with the type attribute,
    //with the appReducer identifier assigned to it.
    //That pretty much tells the ngrx to map the type state with the appReducer,
    //and state is whatever that is being selected below.
    this.type$ = this.store.select('type')
  }

  showTechSites(){
    this.store.dispatch({type: 'techsites'});
  }

  showAcademicSites(){
    this.store.dispatch({type: 'academicsites'});
  }

  showFoodSites(){
    this.store.dispatch({type: 'foodsites'});
  }

}
