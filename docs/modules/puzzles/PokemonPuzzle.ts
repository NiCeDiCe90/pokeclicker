import GameHelper from '../GameHelper';

export default class PokemonPuzzle {
    solved: KnockoutObservable<boolean> = ko.observable(false);
    constructor(public pokemonId: number, public difficulty: number) {}

    solve() {
        if (!this.solved()) {
            this.solved(true);
            GameHelper.incrementObservable(App.game.statistics.pokemonPuzzleSolved[this.pokemonId]);
        }
    }
}
