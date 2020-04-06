import { Component } from '@angular/core';

@Component({
  selector: 'ngClass-example',
  template: `
  <h2>{{welcomeComponentMessage}}</h2>
  <ul *ngFor="let person of people">
    <!-- Directive Example -->
    <!--  
    <li [ngClass]="{
        'text-success':person.country == 'UK',
        'text-primary':person.country == 'USA',
        'text-danger': person.country == 'HK'
        }">
      {{person.name}} ({{person.country}})
    </li>
    -->
    <!-- Alternative Way -->
    <li [class.text-success]="person.country === 'UK'"
      [class.text-primary]="person.country === 'USA'"
      [class.text-danger]="person.country === 'HK'">{{ person.name }} ({{
      person.country }})
    </li>
  </ul>
  `
})

export class NgClassExampleComponent {
  welcomeComponentMessage = "NgClass Example";

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
  getColor(country) {
    switch (country) {
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