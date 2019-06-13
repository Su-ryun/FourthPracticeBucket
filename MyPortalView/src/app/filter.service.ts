import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  techsitesClicked = false;
  academicsitesClicked = false;
  foodsitesClicked = false;

  constructor() { }

  setTechsitesClicked(){
    this.techsitesClicked = true;
    this.academicsitesClicked = false;
    this.foodsitesClicked = false;
  }

  getTechsitesClicked(){
    return this.techsitesClicked;
  }

  setAcademicsitesClicked(){
    this.techsitesClicked = false;
    this.academicsitesClicked = true;
    this.foodsitesClicked = false;
  }

  getAcademicsitesClicked(){
    return this.academicsitesClicked;
  }

  setFoodsitesClicked(){
    this.techsitesClicked = false;
    this.academicsitesClicked = false;
    this.foodsitesClicked = true;
  }

  getFoodsitesClicked(){
    return this.foodsitesClicked;
  }

}
