import PokemonPuzzle from './PokemonPuzzle';

export default class PuzzleController {
    currentPuzzle: KnockoutObservable<PokemonPuzzle | null> = ko.observable(null);

    startPuzzle(pokemonId: number, difficulty: number) {
        this.currentPuzzle(new PokemonPuzzle(pokemonId, difficulty));
        $('#puzzleModal').modal('show');
    }

    solveCurrent() {
        const puzzle = this.currentPuzzle();
        if (puzzle) {
            puzzle.solve();
        }
        this.currentPuzzle(null);
        $('#puzzleModal').modal('hide');
    }
}
