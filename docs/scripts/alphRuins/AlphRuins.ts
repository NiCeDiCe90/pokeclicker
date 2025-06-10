class AlphRuins {
    static openPuzzle(): void {
        Notifier.notify({
            title: 'Alph Ruins',
            message: 'Hier könnte dein Pikachu-Puzzle erscheinen 🧩',
            type: NotificationConstants.NotificationOption.info,
        });

        // Später: Fenster/Modal öffnen
        console.log('Puzzle UI öffnen...');
    }
}