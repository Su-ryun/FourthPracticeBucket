import { Action } from '@ngrx/store';

export interface Type {
  type: string;
}

export const initialState: Type = {
  type: "No results."
};

//Reducer function won't work, unless you have the below two parameters.
export function appReducer(state = initialState, action){

  console.log("App reducer called.");

  switch (action.type) {
    case 'techsites':
      return {
        type: 'techsites'
      };
    case 'academicsites':
      return {
        type: 'academicsites'
      };
    case 'foodsites':
      return {
        type: 'foodsites'
      };
    default:
      return {
        type: 'error'
      };
  }
}
