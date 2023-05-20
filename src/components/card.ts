import { Component } from './component';
import { Pokemon } from '../model/pokemon';
import { ApiPokemon } from '../data/api.pokemon';

export class Card extends Component {
  pokemon!: Pokemon[];
  repository: ApiPokemon;
  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new ApiPokemon();
    console.log(this.repository);
    this.handleLoadAll();
  }

  async handleLoadAll() {
    this.pokemon = await this.repository.getAll();
    this.render();
  }

  createTemplate() {
    const list = this.pokemon.results
      .map(
        (item) => `
          <li>
            <p class="name">${item.name.toUpperCase()}</p>
            <a href="${
              item.url
            }"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif" alt="${
          item.name
        }-picture" width=110 height=100></a>
          </li>`
      )
      .join('');

    return `
      <ul>${list}</ul>
      `;
  }
}
