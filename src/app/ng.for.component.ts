import {Component } from '@angular/core';

@Component({
  selector: 'ngfor-example',
  templateUrl:'./ng.for.component.html'
})

export class NgForExampleComponent {

 welcomeComponentMessage = "NgFor Example";

  people:any[] = [
    {
      "name":"Dharmendra Sahu"
    },
    {
      "name":"Suresh Sahu"
    },
    {
      "name":"Ramesh Sahu"
    },
    {
      "name":"Kuldeep Sahu"
    },
    {
      "name":"Rameshwar Sahu"
    }
  ];
}