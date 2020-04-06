import { Component } from '@angular/core';

@Component({
  selector: 'ngStyle-example',
  template: `
  <h2>{{welcomeComponentMessage}}</h2>
  <ul *ngFor="let person of people">
    <li [ngStyle]="{'color':getColor(person.country)}">
      {{person.name}} ({{person.country}})
    </li>
  </ul>
  `
})

export class NgStyleExampleComponent {
  welcomeComponentMessage = "NgStyle Example";

  people: any[] = [
    {
      "name": "Douglas Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];

// Method to return color based on country name
  getColor(country){
    switch(country){
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
      default:
        return 'orange';
    }
  }
}