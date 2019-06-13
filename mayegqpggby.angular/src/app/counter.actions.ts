import { createAction } from '@ngrx/store';

/*
  createAction function returns an object in the shape of an Action interface.
*/
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
