/// <reference path="knockout.d.ts"/>
/// <reference path="./logbook/LogBook.d.ts"/>
/// <reference path="./DataStore/BadgeCase.d.ts"/>
/// <reference path="./profile/Profile.d.ts"/>
/// <reference path="./DataStore/StatisticStore.d.ts"/>
/// <reference path="./challenges/Challenges.d.ts"/>
/// <reference path="./multiplier/Multiplier.d.ts"/>
/// <reference path="./GameConstants.d.ts"/>
/// <reference path="./wallet/Wallet.d.ts"/>
/// <reference path="./party/Category.d.ts"/>
/// <reference path="./oakItems/OakItems.d.ts"/>
/// <reference path="./oakItems/OakItemLoadouts.d.ts"/>
/// <reference path="./saveReminder/SaveReminder.d.ts"/>
/// <reference path="./translation/Translation.d.ts"/>
/// <reference path="./achievements/Achievement.d.ts"/>
/// <reference path="./achievements/AchievementSortOptions.d.ts"/>
/// <reference path="./achievements/AchievementCategory.d.ts"/>
/// <reference path="./keyItems/KeyItems.d.ts"/>
/// <reference path="./pokeballs/PokeballFilters.d.ts"/>
/// <reference path="./underground/Underground.d.ts"/>
/// <reference path="./subRegion/SubRegion.d.ts"/>
/// <reference path="./settings/CssVariableSetting.d.ts"/>
/// <reference path="./pokemons/evolutions/Base.d.ts"/>
/// <reference path="./pokemons/PokemonNameType.d.ts"/>
/// <reference path="./enums/CaughtStatus.d.ts"/>
/// <reference path="./specialEvents/SpecialEvents.d.ts"/>
/// <reference path="./enums/PokemonType.d.ts"/>
/// <reference path="./weather/WeatherType.d.ts"/>
/// <reference path="./items/types.d.ts"/>
/// <reference path="./interfaces/BagItem.d.ts"/>
/// <reference path="./battles/BattlePokemon.d.ts"/>
type TmpUpdateType = any;
type TmpBreedingType = any;
type TmpPokeballsType = any;
type TmpGemsType = any;
type TmpFarmingType = any;
type TmpRedeemableCodesType = any;
type TmpQuestsType = any;
type TmpDiscordType = any;
type TmpAchievementTrackerType = any;
type TmpBattleFrontierType = any;
type TmpBattleCafeSaveObjectType = any;
type TmpDreamOrbControllerType = any;
type TmpPurifyChamberType = any;
type TmpWeatherAppType = any;
type TmpZMovesType = any;
type TmpHeldItemType = any;
type TmpGameType = {
    gameState: GameConstants.GameState;
    update: TmpUpdateType;
    profile: Profile;
    breeding: TmpBreedingType;
    pokeballs: TmpPokeballsType;
    pokeballFilters: PokeballFilters;
    wallet: Wallet;
    keyItems: KeyItems;
    badgeCase: BadgeCase;
    oakItems: OakItems;
    oakItemLoadouts: OakItemLoadouts;
    categories: PokemonCategories;
    party: TmpPartyType;
    gems: TmpGemsType;
    underground: Underground;
    farming: TmpFarmingType;
    logbook: LogBook;
    redeemableCodes: TmpRedeemableCodesType;
    statistics: Statistics;
    quests: TmpQuestsType;
    specialEvents: SpecialEvents;
    discord: TmpDiscordType;
    achievementTracker: TmpAchievementTrackerType;
    challenges: Challenges;
    battleFrontier: TmpBattleFrontierType;
    multiplier: Multiplier;
    saveReminder: SaveReminder;
    battleCafe: TmpBattleCafeSaveObjectType;
    dreamOrbController: TmpDreamOrbControllerType;
    purifyChamber: TmpPurifyChamberType;
    weatherApp: TmpWeatherAppType;
    zMoves: TmpZMovesType;
    load: () => void;
    initialize: () => void;
    computeOfflineEarnings: () => void;
    checkAndFix: () => void;
    start: () => void;
    stop: () => void;
    gameTick: () => void;
    save: () => void;
};
type TmpAppType = {
    debug: boolean;
    game: TmpGameType;
    isUsingClient: boolean;
    translation: Translate;
    start: () => void;
};
type TmpSaveType = {
    counter: number;
    key: string;
    store: (player: TmpPlayerType) => void;
    getSaveObject: () => void;
    load: () => TmpPlayerType;
    download: () => void;
    copySaveToClipboard: () => void;
    delete: () => Promise<void>;
    filter: (object: any, keep: string[]) => Record<string, any>;
    initializeMultipliers: () => Record<string, number>;
    initializeItemlist: () => Record<string, KnockoutObservable<number>>;
    initializeGems: (saved?: Array<Array<number>>) => Array<Array<KnockoutObservable<number>>>;
    initializeEffects: (saved?: Array<string>) => Record<string, KnockoutObservable<number>>;
    initializeEffectTimer: () => Record<string, KnockoutObservable<string>>;
    loadFromFile: (file: any) => void;
};
type TmpPlayerType = {
    route: number;
    region: GameConstants.Region;
    subregion: number;
    town: TmpTownType;
    regionStarters: Array<KnockoutObservable<GameConstants.Starter>>;
    subregionObject: KnockoutObservable<SubRegion>;
    trainerId: string;
    itemList: Record<string, KnockoutObservable<number>>;
    _lastSeen: number;
    effectList: Record<string, KnockoutObservable<number>>;
    effectTimer: Record<string, KnockoutObservable<string>>;
    highestRegion: KnockoutObservable<GameConstants.Region>;
    highestSubRegion: KnockoutObservable<number>;
    amountOfItem: (itemName: string) => number;
    itemMultipliers: Record<string, number>;
    gainItem: (itemName: string, amount: number) => void;
    loseItem: (itemName: string, amount: number) => void;
    lowerItemMultipliers: (multiplierDecreaser: MultiplierDecreaser, amount?: number) => void;
    hasMegaStone: (megaStone: GameConstants.MegaStoneType) => boolean;
    gainMegaStone: (megaStone: GameConstants.MegaStoneType, notify?: boolean) => void;
    toJSON: () => Record<string, any>;
};
type TmpMapHelperType = {
    getUsableFilters: () => CssVariableSetting[];
    moveToRoute: (route: number, region: GameConstants.Region) => void;
    routeExist: (route: number, region: GameConstants.Region) => boolean;
    normalizeRoute: (route: number, region: GameConstants.Region) => number;
    accessToRoute: (route: number, region: GameConstants.Region) => boolean;
    getCurrentEnvironments: () => Array<GameConstants.Environment>;
    calculateBattleCssClass: () => string;
    calculateRouteCssClass: (route: number, region: GameConstants.Region) => string;
    isRouteCurrentLocation: (route: number, region: GameConstants.Region) => boolean;
    isTownCurrentLocation: (townName: string) => boolean;
    calculateTownCssClass: (townName: string) => string;
    accessToTown: (townName: string) => boolean;
    moveToTown: (townName: string) => void;
    validRoute: (route: number, region: GameConstants.Region) => boolean;
    openShipModal: () => void;
    ableToTravel: () => boolean;
    travelToNextRegion: () => void;
};
type TmpDungeonRunnerType = {
    dungeon: {
        name: string;
    };
};
type TmpGymType = {
    town: string;
};
type TmpGymRunnerType = {
    gymObservable: () => TmpGymType;
};
type TmpAchievementHandlerType = {
    achievementList: Achievement[];
    navigateIndex: KnockoutObservable<number>;
    achievementListFiltered: KnockoutObservableArray<Achievement>;
    numberOfTabs: KnockoutObservable<number>;
    setNavigateIndex: (index: number) => void;
    navigateRight: () => void;
    navigateLeft: () => void;
    isNavigateDirectionDisabled: (navigateBackward: boolean) => boolean;
    calculateNumberOfTabs: () => void;
    filter: Record<string, any>;
    getAchievementListWithIndex: () => void;
    cachedSortedList: Achievement[];
    achievementSortedList: KnockoutComputed<any[]>;
    filterAchievementList: (retainPage: boolean) => void;
    compareBy: (option: AchievementSortOptions, direction: boolean) => (a: Achievement, b: Achievement) => number;
    preCheckAchievements: () => void;
    checkAchievements: () => void;
    addAchievement: (...rest: any[]) => void;
    calculateBonus: () => void;
    calculateMaxBonus: () => void;
    achievementBonus: () => number;
    achievementBonusPercent: () => string;
    findByName: (name: string) => Achievement;
    getAchievementCategories: () => AchievementCategory[];
    getAchievementCategoryByRegion: (region: GameConstants.Region) => AchievementCategory;
    getAchievementCategoryByExtraCategory: (category: GameConstants.ExtraAchievementCategories) => AchievementCategory;
    initialize: (multiplier: Multiplier, challenges: Challenges) => void;
    load: () => void;
};
type TmpPokemonLocationsType = {
    getPokemonPrevolution: (pokemonName: PokemonNameType, maxRegion?: GameConstants.Region) => EvoData[];
};
type TmpPokemonFactoryType = {
    generateWildPokemon(route: number, region: GameConstants.Region, subRegion: SubRegion): BattlePokemon;
    routeDungeonTokens(route: number, region: GameConstants.Region): number;
    generateShiny(chance: number, skipBonus?: boolean): boolean;
    generateGenderById(id: number): GameConstants.BattlePokemonGender;
};
type TmpPartyPokemonType = {
    id: number;
    name: PokemonNameType;
    evolutions: EvoData[];
    baseAttack: number;
    eggCycles: number;
    level: number;
    attack: number;
    attackBonusAmount: number;
    attackBonusPercent: number;
    breeding: boolean;
    pokerus: GameConstants.Pokerus;
    effortPoints: number;
    shiny: boolean;
    category: Array<number>;
    nickname: string;
    displayName: string;
    shadow: GameConstants.ShadowStatus;
    showShadowImage: boolean;
    vitaminsUsed: Record<GameConstants.VitaminType, KnockoutObservable<number>>;
    heldItem: KnockoutObservable<TmpHeldItemType>;
    defaultFemaleSprite: KnockoutObservable<boolean>;
    hideShinyImage: KnockoutObservable<boolean>;
    canUseStone(stoneType: GameConstants.StoneType): boolean;
    addCategory(id: number): void;
    removeCategory(id: number): void;
    resetCategory(): void;
};
type TmpPartyType = {
    caughtPokemon: ReadonlyArray<TmpPartyPokemonType>;
    activePartyPokemon: ReadonlyArray<TmpPartyPokemonType>;
    gainPokemonByName: (name: PokemonNameType, shiny?: boolean, suppressNewCatchNotification?: boolean, gender?: GameConstants.BattlePokemonGender, shadow?: GameConstants.ShadowStatus) => void;
    gainPokemonById: (id: number, shiny?: boolean, suppressNewCatchNotification?: boolean, gender?: GameConstants.BattlePokemonGender, shadow?: GameConstants.ShadowStatus) => void;
    gainExp: (exp: number, level?: number, trainer?: boolean) => void;
    calculatePokemonAttack: (type1: PokemonType, type2: PokemonType, ignoreRegionMultiplier?: boolean, region?: GameConstants.Region, includeBreeding?: boolean, useBaseAttack?: boolean, overrideWeather?: WeatherType, ignoreLevel?: boolean, includeTempBonuses?: boolean, subregion?: GameConstants.SubRegions) => number;
    calculateOnePokemonAttack: (pokemon: TmpPartyPokemonType, type1: PokemonType, type2: PokemonType, region?: GameConstants.Region, ignoreRegionMultiplier?: boolean, includeBreeding?: boolean, useBaseAttack?: boolean, overrideWeather?: WeatherType, ignoreLevel?: boolean, includeTempBonuses?: boolean) => number;
    getRegionAttackMultiplier: (highestRegion?: GameConstants.Region) => number;
    calculateEffortPoints: (pokemon: TmpPartyPokemonType, shiny: boolean, shadow: GameConstants.ShadowStatus, number: number, ignore?: boolean) => number;
    getPokemon: (id: number) => TmpPartyPokemonType | undefined;
    getPokemonByName: (name: PokemonNameType) => TmpPartyPokemonType | undefined;
    partyPokemonActiveInSubRegion: (region: GameConstants.Region, subregion: GameConstants.SubRegions) => Array<TmpPartyPokemonType>;
    alreadyCaughtPokemonByName: (name: PokemonNameType, shiny?: boolean) => boolean;
    alreadyCaughtPokemon: (id: number, shiny?: boolean, shadow?: boolean, purified?: boolean) => boolean;
    calculateClickAttack: (useItem?: boolean) => number;
};
type TmpPartyControllerType = {
    getCaughtStatusByName: (name: PokemonNameType) => CaughtStatus;
    getPokerusStatusByName: (name: PokemonNameType) => GameConstants.Pokerus;
};
type TmpBagHandlerType = {
    displayName(item: BagItem): string;
    image(item: BagItem): string;
    gainItem(item: BagItem, amount?: number): void;
};
type TmpTemporaryBattleListType = {
    [battleName: string]: TmpTemporaryBattleType;
};
type TmpTemporaryBattleType = {
    name: string;
    parent?: TmpTownType;
    getTown: () => TmpTownType | undefined;
    getDisplayName: () => string;
};
type TmpTownType = {
    name: string;
};
