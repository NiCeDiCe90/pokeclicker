/// <reference path="./TemporaryScriptTypes.d.ts"/>
declare global {
    const App: TempTypes.TmpAppType;
    const player: TempTypes.TmpPlayerType;
    const Save: TempTypes.TmpSaveType;
    const MapHelper: TempTypes.TmpMapHelperType;
    const DungeonRunner: TempTypes.TmpDungeonRunnerType;
    const GymRunner: TempTypes.TmpGymRunnerType;
    const AchievementHandler: TempTypes.TmpAchievementHandlerType;
    const PokemonLocations: TempTypes.TmpPokemonLocationsType;
    const PokemonFactory: TempTypes.TmpPokemonFactoryType;
    const PartyController: TempTypes.TmpPartyControllerType;
    const TemporaryBattleList: TempTypes.TmpTemporaryBattleListType;
    const BagHandler: TempTypes.TmpBagHandlerType;
}
