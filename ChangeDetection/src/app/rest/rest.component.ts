import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConsoleLoggerService } from '../services/console-logger.service';
import { HttpDataLoaderService } from '../services/http-data-loader.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent {

    pupFunction(){
      var url = document.getElementById("inputLink");
      var text = document.getElementById("inputText");
    }
  

//Array.from(document.querySelectorAll('h3.title'))

}
