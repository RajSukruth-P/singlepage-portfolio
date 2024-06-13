import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  showNavbarFooter: boolean = true;

  constructor() {}

  hide() {
    this.showNavbarFooter = false;
  }

  show() {
    this.showNavbarFooter = true;
  }
}
