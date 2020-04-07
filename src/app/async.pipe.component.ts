import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'async-pipe-example',
  template: `
  
    <div class="card card-block">
      <h4 class="card-title">AsyncPipe</h4>
      <p class="card-text" ngNonBindable>{{promise }} </p>
      <p class="card-text">{{promise | async }} </p>
    </div>

    <div class="card card-block">
    <h4 class="card-title">AsyncPipe - Observable Example</h4>
    <p class="card-text" ngNonBindable>{{ observableData }}
    <p class="card-text">Value :: {{ observableData }}</p> ①
    </div>
  `
})

export class AsyncPipeComponent {

  promise: Promise<string>;
  observableData: number;
  subsciption: Object = null;
  observable: Observable<number>;
  

  constructor() {
    this.promise = this.getPromise();
    this.observable = this.getObservable();
    this.subscribeObservable();
  }

  getPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise Complete!"), 3000)
    });
  }

  getObservable(){
    const time = new Observable<number>(observer => {
    setInterval(() => observer.next(200), 1000);
  });
  return time;
  }

  subscribeObservable(){
    this.subsciption = this.getObservable()
                      .subscribe(v => this.observableData = v);
  }

  ngOnDestroy(){
    if(this.subsciption){
      
    }
  }
}