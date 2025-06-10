import Item from './Item';
import { Currency } from '../GameConstants';

export default class PuzzlePlateItem extends Item {
    constructor() {
        super(
            'Puzzle_plate',
            Infinity,
            Currency.diamond,
            {},
            'Puzzle Plate',
            'An ancient plate with mysterious symbols. Activating it starts a Pokémon puzzle challenge.'
        );
    }

    use(): boolean {
        if (!this.checkCanUse()) {
            return false;
        }

        // Nutze globale Referenz
        (window as any).PuzzleSystem.openPuzzleModal();
        return false;
    }

    get image() {
        return 'assets/images/items/underground/Puzzle Plate.png';
    }
}