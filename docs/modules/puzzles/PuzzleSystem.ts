import { Observable, PureComputed } from 'knockout';
import { PokemonNameType } from '../pokemons/PokemonNameType';
import Rand from '../utilities/Rand';
import Notifier from '../notifications/Notifier';
import NotificationConstants from '../notifications/NotificationConstants';
import { Feature } from '../DataStore/common/Feature';

interface PuzzlePiece {
    id: number;
    currentPosition: { x: number; y: number };
    correctPosition: { x: number; y: number };
    imageData: string;
}

export class PuzzleSystem implements Feature {
    name = 'PuzzleSystem';
    saveKey = 'puzzleSystem';

    defaults = {
        completedPuzzles: [],
        currentPuzzle: null,
    };

    private _completedPuzzles: Observable<number[]> = ko.observableArray([]);
    private _currentPuzzlePokemon: Observable<PokemonNameType | null> = ko.observable(null);
    private _puzzlePieces: Observable<PuzzlePiece[]> = ko.observableArray([]);
    private _isModalOpen: Observable<boolean> = ko.observable(false);
    private _isPuzzleCompleted: Observable<boolean> = ko.observable(false);

    public availablePokemon: PureComputed<PokemonNameType[]> = ko.pureComputed(() => {
        const pokemonList = (window as any).pokemonList;
        if (!pokemonList) return [];
        
        return pokemonList
            .filter((pokemon: any) => {
                const isObtained = App.game.party.alreadyCaughtPokemon(pokemon.id);
                const notCompleted = !this._completedPuzzles().includes(pokemon.id);
                const notEvent = pokemon.id > 0;
                
                return isObtained && notCompleted && notEvent;
            })
            .map((pokemon: any) => pokemon.name);
    });

    public completionPercentage: PureComputed<number> = ko.pureComputed(() => {
        const totalCaught = App.game.party.caughtPokemon.length;
        if (totalCaught === 0) return 0;
        return Math.round((this._completedPuzzles().length / totalCaught) * 100);
    });

    initialize(): void {
        // Setup
    }

    update(delta: number): void {
        // Kein kontinuierliches Update nötig
    }

    canAccess(): boolean {
        return App.game.underground.canAccess();
    }

    public static openPuzzleModal(): void {
        const puzzle = (App.game as any).puzzleSystem;
        if (!puzzle) return;
        
        if (puzzle.availablePokemon().length === 0) {
            Notifier.notify({
                message: 'You have completed all available Pokémon puzzles! Catch more Pokémon to unlock new puzzles.',
                type: NotificationConstants.NotificationOption.info,
            });
            return;
        }

        puzzle.startRandomPuzzle();
        puzzle._isModalOpen(true);
        // $('#puzzleModal').modal('show'); // Temporär auskommentiert bis Modal existiert
        
        // Temporäre Benachrichtigung für Tests
        Notifier.notify({
            title: 'Puzzle Started!',
            message: `Starting puzzle for ${puzzle.currentPuzzlePokemon}`,
            type: NotificationConstants.NotificationOption.info,
        });
    }

    public startRandomPuzzle(): void {
        const availablePokemon = this.availablePokemon();
        if (availablePokemon.length === 0) return;

        const randomPokemon = Rand.fromArray(availablePokemon);
        this._currentPuzzlePokemon(randomPokemon);
        this.generatePuzzlePieces(randomPokemon);
        this._isPuzzleCompleted(false);
    }

    private generatePuzzlePieces(pokemonName: PokemonNameType): void {
        const gridSize = 4;
        const pieces: PuzzlePiece[] = [];
        
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                if (row === gridSize - 1 && col === gridSize - 1) {
                    continue;
                }
                
                pieces.push({
                    id: row * gridSize + col,
                    currentPosition: { x: col, y: row },
                    correctPosition: { x: col, y: row },
                    imageData: this.getPokemonImageSection(pokemonName, col, row, gridSize),
                });
            }
        }

        this.shufflePuzzle(pieces, gridSize);
        this._puzzlePieces(pieces);
    }

    private shufflePuzzle(pieces: PuzzlePiece[], gridSize: number): void {
        for (let i = 0; i < 100; i++) {
            const emptyPos = this.findEmptyPosition(pieces, gridSize);
            const neighbors = this.getNeighbors(emptyPos, gridSize);
            const randomNeighbor = Rand.fromArray(neighbors);
            
            this.swapPieces(pieces, emptyPos, randomNeighbor, gridSize);
        }
    }

    private findEmptyPosition(pieces: PuzzlePiece[], gridSize: number): { x: number; y: number } {
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const pieceAtPosition = pieces.find(p => 
                    p.currentPosition.x === col && p.currentPosition.y === row
                );
                if (!pieceAtPosition) {
                    return { x: col, y: row };
                }
            }
        }
        return { x: gridSize - 1, y: gridSize - 1 };
    }

    private getNeighbors(pos: { x: number; y: number }, gridSize: number): { x: number; y: number }[] {
        const neighbors = [];
        const directions = [
            { x: -1, y: 0 }, { x: 1, y: 0 },
            { x: 0, y: -1 }, { x: 0, y: 1 }
        ];

        for (const dir of directions) {
            const newX = pos.x + dir.x;
            const newY = pos.y + dir.y;
            
            if (newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize) {
                neighbors.push({ x: newX, y: newY });
            }
        }
        
        return neighbors;
    }

    private swapPieces(pieces: PuzzlePiece[], pos1: { x: number; y: number }, pos2: { x: number; y: number }, gridSize: number): void {
        const piece1 = pieces.find(p => p.currentPosition.x === pos1.x && p.currentPosition.y === pos1.y);
        const piece2 = pieces.find(p => p.currentPosition.x === pos2.x && p.currentPosition.y === pos2.y);

        if (piece1) {
            piece1.currentPosition = { ...pos2 };
        }
        if (piece2) {
            piece2.currentPosition = { ...pos1 };
        }
    }

    public movePiece(pieceId: number): boolean {
        const pieces = this._puzzlePieces();
        const piece = pieces.find(p => p.id === pieceId);
        if (!piece) return false;

        const emptyPos = this.findEmptyPosition(pieces, 4);
        const piecePos = piece.currentPosition;

        const isAdjacent = 
            (Math.abs(emptyPos.x - piecePos.x) === 1 && emptyPos.y === piecePos.y) ||
            (Math.abs(emptyPos.y - piecePos.y) === 1 && emptyPos.x === piecePos.x);

        if (isAdjacent) {
            piece.currentPosition = { ...emptyPos };
            this._puzzlePieces.notifySubscribers();
            
            if (this.isPuzzleSolved()) {
                this.completePuzzle();
            }
            return true;
        }
        
        return false;
    }

    private isPuzzleSolved(): boolean {
        const pieces = this._puzzlePieces();
        return pieces.every(piece => 
            piece.currentPosition.x === piece.correctPosition.x && 
            piece.currentPosition.y === piece.correctPosition.y
        );
    }

    private completePuzzle(): void {
        if (!this._currentPuzzlePokemon()) return;

        const pokemonName = this._currentPuzzlePokemon();
        const pokemon = (window as any).pokemonList.find((p: any) => p.name === pokemonName);
        if (!pokemon) return;
        
        const current = this._completedPuzzles();
        current.push(pokemon.id);
        this._completedPuzzles(current);
        
        this._isPuzzleCompleted(true);

        Notifier.notify({
            title: 'Puzzle Completed!',
            message: `You solved the ${pokemon.name} puzzle! Catch rate increased by 5%.`,
            type: NotificationConstants.NotificationOption.success,
            timeout: 10000,
        });

        player.loseItem('Puzzle_plate', 1);

        setTimeout(() => {
            this.closePuzzleModal();
        }, 3000);
    }

    public closePuzzleModal(): void {
        this._isModalOpen(false);
        this._currentPuzzlePokemon(null);
        this._puzzlePieces([]);
        this._isPuzzleCompleted(false);
        // $('#puzzleModal').modal('hide'); // Temporär auskommentiert
    }

    private getPokemonImageSection(pokemonName: PokemonNameType, col: number, row: number, gridSize: number): string {
        const pokemon = (window as any).pokemonList.find((p: any) => p.name === pokemonName);
        if (!pokemon) return '';
        
        const baseUrl = `assets/images/pokemon/${pokemon.id}.png`;
        
        const percentX = (col / (gridSize - 1)) * 100;
        const percentY = (row / (gridSize - 1)) * 100;
        
        return `url('${baseUrl}') ${percentX}% ${percentY}%`;
    }

    public getCatchRateBonus(pokemonId: number): number {
        return this._completedPuzzles().includes(pokemonId) ? 0.05 : 0;
    }

    public isPuzzleCompleted(pokemonId: number): boolean {
        return this._completedPuzzles().includes(pokemonId);
    }

    // Getters
    get isModalOpen(): boolean { return this._isModalOpen(); }
    get currentPuzzlePokemon(): PokemonNameType | null { return this._currentPuzzlePokemon(); }
    get puzzlePieces(): PuzzlePiece[] { return this._puzzlePieces(); }
    get completedPuzzles(): number[] { return this._completedPuzzles(); }

    // Save/Load
    toJSON(): Record<string, any> {
        return {
            completedPuzzles: this._completedPuzzles(),
        };
    }

    fromJSON(json: Record<string, any>): void {
        this._completedPuzzles(json?.completedPuzzles || []);
    }
}
