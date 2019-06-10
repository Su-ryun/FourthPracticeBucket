export interface ResultList {
  type: string;
}

export const initialState: ResultList = {
  type: "No results."
};

export function appReducer(action){
  switch (action.type) {
    case 'techsites':
      return {
        type: 'techsites'
      };
    case 'academicsites':
      return {
        type: 'academicsites'
      };
    default:
      return {
        type: 'error'
      };
  }
}
