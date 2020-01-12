import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {

  public website: string;
  public elementSelect: string;
  private interv: any;
  public isRunning: boolean;
  public hasChanged: boolean;
  public normal: string;
  public changes: string;

  constructor(private http: HttpClient) { 

    this.website = null;
    this.elementSelect = null;
    this.isRunning = false;
    this.hasChanged = false;
    this.normal = '';
    this.changes = '';
    this.StartWatching = this.StartWatching.bind(this);
    this.StopWatching = this.StopWatching.bind(this);
    this.GetPage = this.GetPage.bind(this);
  }
  public async StartWatching() {
    this.website = localStorage.getItem('website');
    this.elementSelect = localStorage.getItem('element');

    if (this.website === null || this.elementSelect === null) {
      alert('ERROR! Set a site and a element first.');
      return;
    }

    this.http.post<any>('http://localhost:3000/loadSite', {
        url : this.website,
        element : this.elementSelect
    }).subscribe(
      x => {
        this.isRunning = true;
        this.normal = x.website;
        this.interv = setInterval(this.GetPage, 10000);
      },
      error => {
        alert('ERROR site not found!');
        return;
      }
    );
  }

  public async StopWatching() {
    this.isRunning = false;
    clearInterval(this.interv);
  }

  private async GetPage() {
    this.http.get<any>('http://localhost:3000/checkForChange', {
    }).subscribe(
      x => {
        if (x.res.length !== 0) {
          this.changes = x.res.toString();
          this.hasChanged = true;
        } else {
          this.hasChanged = false;
        }
      },
      error => {
        this.StopWatching();
        alert('ERROR site not found!');
        return;
      }
    );
  }
}

