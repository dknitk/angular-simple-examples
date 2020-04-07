import { Component } from '@angular/core';

@Component({
  selector: 'pipe-example',
  templateUrl: './pipe.example.component.html'
})

export class PipeExampleComponent {
  welcomeComponentMessage = "Pipe Example";

  private dateVal: Date = new Date();
  private jsonVal: Object = { moo: 'foo', goo: { too: 'new' } };
}