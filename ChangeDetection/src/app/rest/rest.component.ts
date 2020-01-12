import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit  {

  private gwebsite: string;

  private gelement: string;

  constructor() { }

  ngOnInit() {
    this.gwebsite = localStorage.getItem('website');
    this.gelement = localStorage.getItem('element');
  }

  public get element(): string {
    return this.gelement;
  }

  public set element(value: string) {
    this.gelement = value;
    localStorage.setItem('element', this.gelement);
  }

  public get website(): string {
    return this.gwebsite;
  }

  public set website(value: string) {
    this.gwebsite = value;
    localStorage.setItem('website', this.website);
  }
}
