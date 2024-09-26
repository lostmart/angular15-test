import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  canClickBtn = false;
  currentPokemonName = '';
  pokemonAdded = false;
  pokemons: string[] = ["Penucho", "Mertolokh", "Zimbahue"]

  onPokemontNameInputCgange(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.currentPokemonName = inputElement?.value;

    if (this.currentPokemonName.length === 0) {
      this.canClickBtn = false;
      this.pokemonAdded = false;
    } else {
      this.canClickBtn = true;
    }
  }

  onAddButtonCick() {
    this.pokemonAdded = true;
    this.pokemons.push(this.currentPokemonName)
  }
}
