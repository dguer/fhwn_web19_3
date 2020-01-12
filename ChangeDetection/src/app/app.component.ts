import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ChangeDetection';


  get isWebsiteSet() {
    if (localStorage.getItem("website") !== "") {
      return true;
    }

    return false;
  }
  constructor() {
    
  }
}