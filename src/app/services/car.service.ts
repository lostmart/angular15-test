import { Injectable } from '@angular/core';

type CarType = 'sport' | 'classic';

export type TCar = {
  carName: string;
  type: CarType;
  year: number;
};

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars: TCar[] = [];
  constructor() {}

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

  deleteCarEmit(index: number) {
    this.cars.splice(index, 1);
  }
}
