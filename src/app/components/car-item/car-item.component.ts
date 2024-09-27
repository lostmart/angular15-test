import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TCar } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css'],
})
export class CarItemComponent {
  @Input() car?: TCar;
  @Output() delete = new EventEmitter();

  onCarDelete() {
    this.delete.emit();
  }
}
