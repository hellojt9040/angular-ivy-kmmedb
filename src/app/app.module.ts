import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material/angular-material.module';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ScrollToInvalidDirective } from './common/scroll-to-invalid/scroll-to-invalid.directive'


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
     ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    MyFormComponent,
    ScrollToInvalidDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
