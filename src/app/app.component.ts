import { Component } from '@angular/core';

type CarType = 'sport' | 'classic';

export type TCar = {
  carName: string;
  type: CarType;
  year: number;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'These are cars';
  currentCarName = '';
  cars: TCar[] = [];

  getRandomYear() {
    return Math.floor(Math.random() * 91) + 1940;
  }

  addCar(nameOfCar: string) {
    this.cars.push({
      carName: nameOfCar,
      type: Math.random() > 0.3 ? 'classic' : 'sport',
      year: this.getRandomYear(),
    });
  }

  onAddCarClick() {
    this.addCar(this.currentCarName);
    this.currentCarName = '';
  }

  onDeleteCarEmit(index: number) {
    this.cars.splice(index, 1)
  }
}
