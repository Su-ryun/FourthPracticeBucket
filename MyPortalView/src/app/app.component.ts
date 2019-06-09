import { Component } from '@angular/core';

import { Observable }   from 'rxjs/Observable';
import { Store } from '@ngrx/store';

interface techSitesClicked{
  type: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  type$: Observable<string>;

  constructor(private store: Store<techSitesClicked>){
    this.type$ = this.store.select('type');
  }

  showTechSites(){
    this.store.dispatch({type: "techsites"});
  }

  showAcademicSites(){
    this.store.dispatch({type: "academicsites"});
  }

  showFoodSites(){
    this.store.dispatch({type: "foodsites"});
  }

}
