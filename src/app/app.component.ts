import { Component } from '@angular/core';
import { TCar, CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'These are cars';
  currentCarName = '';
  cars: TCar[] = this.carService.cars;

  constructor(private carService: CarService) {
    
  }

  onAddCarClick() {
    this.carService.addCar(this.currentCarName);
    this.currentCarName = '';
  }

  // addCar(nameOfCar: string) {
  //   this.cars.push({
  //     carName: nameOfCar,
  //     type: Math.random() > 0.3 ? 'classic' : 'sport',
  //     year: this.getRandomYear(),
  //   });
  // }

  deleteCarEmit(index: number) {
    this.carService.deleteCarEmit(index);
  }
}
