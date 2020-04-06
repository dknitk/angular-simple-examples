import { Component } from '@angular/core';

@Component({
  selector: 'ngfor-group-example',
  templateUrl: './ng.for.group.component.html'
})

export class NgForGroupExampleComponent {

  welcomeComponentMessage = "NgFor Group Example";
  // Hierarchier Array
  peopleByCountry: any[] = [
    {
      'country': 'UK',
      'people': [
        {
          "name": "Douglas Pace"
        },
        {
          "name": "Mcleod Mueller"
        },
      ]
    },
    {
      'country': 'US',
      'people': [
        {
          "name": "Day Meyers"
        },
        {
          "name": "Aguirre Ellis"
        },
        {
          "name": "Cook Tyson"
        }
      ]
    }
  ];
}