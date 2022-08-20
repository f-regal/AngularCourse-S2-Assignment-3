import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-3';
  displayText = false;
  buttonClicks : number[] = [];


  onDisplayDetails(event: Event){
    this.displayText = true;
    this.buttonClicks.push(Math.trunc(event.timeStamp));
  }


}
