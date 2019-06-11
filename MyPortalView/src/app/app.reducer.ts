import { Action } from '@ngrx/store';

//The below two are not being used for the sake of simple example.
export interface Type {
  type: string;
}

export const initialState: Type = {
  type: "No results."
};

//Reducer function won't work, unless you have the below two parameters.
export function typeReducer(state = '', action){

  console.log("Action type currently: " + action.type);

  // Whatever those are being returned below are binded to app.component.html's type$.
  switch (action.type) {
    case 'techsites':
      return 'techsites';
    case 'academicsites':
      return 'academicsites';
    case 'foodsites':
      return 'foodsites';
    default:
      return state;
  }
}
