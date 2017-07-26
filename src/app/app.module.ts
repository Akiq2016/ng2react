import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactComponent } from './react-component/react-component';
import MyComponent from './my-component/my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactComponent,
    MyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
