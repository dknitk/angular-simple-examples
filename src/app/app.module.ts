import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgForExampleComponent } from './ng.for.component';
import { NgForGroupExampleComponent } from './ng.for.group.component';
import { NgIfExampleComponent } from './ngif.example.component';
import { NGSwitchComponent } from './ngswitch.example.component';
import { NgStyleExampleComponent } from './ngStyle.example.component';
import { NgClassExampleComponent } from './ngclass.example.component';
import { NgNonBindableExampleComponent } from './ngnonbindable.example.component';
import { PipeExampleComponent } from './pipe.example.component';
import { AsyncPipeComponent } from './async.pipe.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NgForExampleComponent
  ,NgForGroupExampleComponent, NgIfExampleComponent, NGSwitchComponent,
  NgStyleExampleComponent, NgClassExampleComponent, NgNonBindableExampleComponent, PipeExampleComponent, AsyncPipeComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
