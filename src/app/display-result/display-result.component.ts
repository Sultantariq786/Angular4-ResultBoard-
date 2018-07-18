import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {
  results: string[];
  studentsPassed: string[] = ['Tariq Khan', 'Ayaan Khan', 'Aamir Khan', 'Arshi Ameen', 'Shahrukh Khan', 'Imran Ansari', 
  'Irfan Ansari', 'Rizwan Ansari'];
  studentsFailed: string[] = ['John Dawson', 'Harry Singh', 'Manoj Kumar', 'Hari Prasad', 'Rupesh Gangully'];
  i = 0;
  loopChain: any;
  notStarted = true;
  passed = true;

  startLoop() {
    this.loopChain = setInterval(() => {
      if (this.i % 2 === 0) {
        this.results = this.studentsPassed;
        this.passed = true;
        // console.log('If' + this.i);
      } else {
        this.results = this.studentsFailed;
        this.passed = false;
        // console.log('Else' + this.i);
      }
      this.i++;
    }, 3000);
    this.notStarted = false;
  }

  stopLoop() {
    clearInterval(this.loopChain);
    this.notStarted = true;
  }

  constructor() {
    this.results = this.studentsPassed;
  }

  ngOnInit() {
  }

}
