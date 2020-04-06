import { Component } from '@angular/core';

@Component({
  selector: 'ngIf-example',
  // Inline Html Page, you can create html same as NgFor Example
  template: `
    <h2> {{welcomeComponentMessage}} </h2>
    <UL *ngFor="let person of people">
      <LI *ngIf="person.age < 36" >
        {{person.name}} ({{person.age}})
      </LI>
    </UL>

  `
})

export class NgIfExampleComponent {
  welcomeComponentMessage = "NgIF Example";
  people: any[] = [

    {
      "name": "Dharmendra Sahu",
      "age": 35
    },
    {
      "name": "Sachi Sahu",
      "age": 31
    },
    {
      "name": "Gaurav Sahu",
      "age": 32
    },
    {
      "name": "Jitendra Sahu",
      "age": 39
    },
    {
      "name": "Dhruv Sahu",
      "age": 6
    }
  ];
}