/// <reference types="jquery" />
declare class SaveSelector {
    static MAX_SAVES: number;
    static loadSaves(): void;
    static LoadSaveOnKeydown(e: JQuery.KeyDownEvent): void;
    static getTrainerCard(key: string): Element;
    static btoa(saveString: string): string;
    static atob(encodeString: string): string;
    static Download(key: string): void;
}
