import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  // styleUrls: ['./app.component.css'],
})
export class PokemonItemComponent {
  @Input() name = 'boludo';
  level = 10;
  sex = Math.random() > 0.5 ? 'male' : 'female';
}
