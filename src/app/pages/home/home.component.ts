import { Component } from '@angular/core';
import { CarService, TCar } from 'src/app/services/car.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'These are cars';
  currentCarName = '';
  cars: TCar[] = this.carService.cars;

  constructor(private carService: CarService) {}

  onAddCarClick() {
    this.carService.addCar(this.currentCarName);
    this.currentCarName = '';
  }

  deleteCarEmit(index: number) {
    this.carService.deleteCarEmit(index);
  }
}
