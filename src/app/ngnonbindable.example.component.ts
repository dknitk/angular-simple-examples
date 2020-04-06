import { Component } from '@angular/core';

@Component({
  selector: 'ngNonBindable-example',
  template: `
  <h2>{{welcomeComponentMessage}}</h2>
  <h3> To render the name variable we use this syntax <pre ngNonBindable> {{name}} </pre></h3>
  `
})

export class NgNonBindableExampleComponent {
  welcomeComponentMessage = "NgNonBindable Example";

// Don't want to bind the attribute value then use NgNonBindable Directive
  name = "Dharmendra Sahu";
  
  
}