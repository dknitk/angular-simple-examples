import { Component } from '@angular/core';

@Component({
  selector: 'ngSwitch-example',
  template: `
  <h2>{{welcomeComponentMessage}}</h2>
  <ul *ngFor="let person of people"
    [ngSwitch] = "person.country">

    <li *ngSwitchCase="UK" class="text-success">
    {{person.name}} ({{person.country}})
    </li>

    <li *ngSwitchCase="USA" class="text-primary">
    {{person.name}} ({{person.country}})
    </li>

    <li *ngSwitchCase="HK" class="text-danger">
    {{person.name}} ({{person.country}})
    </li>

    <li *ngSwitchDefault class="text-warning">
    {{person.name}} ({{person.country}})
    </li>
  </ul>
  `
})

export class NGSwitchComponent {
  welcomeComponentMessage = "NgSwitchp Example";

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
}