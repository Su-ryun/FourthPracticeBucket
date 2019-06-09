import { Action } from '@ngrx/store';

// Default state is whatever that is inside the parameter.
export function simpleReducer(state: string = 'Hello World', action: Action){
  console.log(action.type, state);

  switch (action.type){
    case 'SPANISH':
      return state = 'Hola Mundo';
    case 'FRENCH':
      return state = 'Bonjour le monde';
    default:
      return state;
  }
}
