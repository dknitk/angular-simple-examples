import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'async-pipe-example',
  template: `
  
    <div class="card card-block">
      <h4 class="card-title">AsyncPipe</h4>
      <p class="card-text" ngNonBindable>{{promise }} </p>
      <p class="card-text">{{promise | async }} </p>
    </div>
  `
})

export class AsyncPipeComponent {

  promise: Promise<string>;
  observableData: number;
  subsciption: Object = null;

  constructor() {
    this.promise = this.getPromise();
  }

  getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise Complete!"), 3000)
    });
  }

  getObservable(){
    return Observable.
  }
}