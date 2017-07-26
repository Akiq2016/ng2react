import { Component } from '@angular/core';
import  MyComponent from './my-component/my-component.component';

@Component({
  selector: 'app-root',
  template: '<h1>My First Angular App</h1><react-component [component]="embedComponent" [props]="embedComponentProps"></react-component>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	embedComponent = MyComponent;
	embedComponentProps = {
		"name": "person"
	}
}