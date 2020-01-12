import { Component, OnInit } from '@angular/core';
import {ChangeService} from '../_services/change.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private detectionService: ChangeService) {
    this.detectionService.elementSelect = localStorage.getItem('element');
    this.detectionService.website =  localStorage.getItem('website');
  }

  ngOnInit() {
  }
  public onStartOrStop(): void {
    if (this.detectionService.isRunning) {
      this.detectionService.StopWatching();
    } else {
      this.detectionService.StartWatching();
    }
  }
  public get website(): string {
    return this.detectionService.website;
  }
  public set website(value: string) {
    this.detectionService.website = value;
  }
  
  public get changed(): string {
    if (this.detectionService.hasChanged === true) {
      return 'Something has changed on the website.';
    } else {
      return 'No changes!';
    }
  }
  
  public get normal(): string {
    return this.detectionService.normal;
}

public get changes(): string {
  return this.detectionService.changes;
}

public get buttonText(): string {
  if (this.detectionService.isRunning) {
    return 'Stop Service';
  } else {
    return 'Start Service';
  }
}

public get changedBool(): boolean {
  return this.detectionService.hasChanged;
}

}
