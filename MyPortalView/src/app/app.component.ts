  import { Component } from '@angular/core';

//If the below is: import { Observable } from 'rxjs/Observable';
//Then I see the big fat errors everywhere.
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

// For the sake of simpler example, the below is currently not being used.
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

  constructor(private store: Store<string>){
    // While referring to StoreModule.forRoot({ type: typeReducer }),
    // the type$ observable reference is being coupled with typeReducer function
    // because the argument being passed to the select function.
    this.type$ = this.store.select('type');
  }

  showTechSites(){
    //When the below argument is not wrapper in JSON object, with type
    //attribute not assigned with what I'd like to pass, everything will break.
    this.store.dispatch({type: 'techsites'});
  }

  showAcademicSites(){
    //The above comment makes a lot of sense; after all, I am able to do stuff
    //like action.type; in the context below, which will give me 'academicsites'
    this.store.dispatch({type: 'academicsites'});
  }

  showFoodSites(){
    this.store.dispatch({type: 'foodsites'});
  }

}
