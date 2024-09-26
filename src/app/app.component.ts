import { Component } from '@angular/core';

type CarType = 'sport' | 'classic';

export type Car = {
  carName: string;
  type: CarType;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'These are cars';
}
