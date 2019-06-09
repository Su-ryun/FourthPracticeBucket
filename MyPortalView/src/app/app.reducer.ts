export const techSitesClicked:  = {
  type: ""
};

export function appReducer(action){
  console.log("Reducer working.");
  switch (action.type) {
    case 'techsites':
      return {
        type: techsites
      };
    case 'academicsites':
      return {
        type: academicsites
      };
    default:
      return {
        type: "None"
      };
  }
}
