/// <reference path="./dayCycle/DayCyclePart.d.ts"/>
/// <reference path="./moonCycle/MoonCyclePhase.d.ts"/>
/// <reference path="./pokemons/PokemonNameType.d.ts"/>
declare namespace GameConstants {
declare const SECOND = 1000;
declare const MINUTE: number;
declare const HOUR: number;
declare const DAY: number;
declare const WEEK: number;
declare const TICK_TIME: number;
declare const BATTLE_TICK: number;
declare const BATTLE_FRONTIER_TICK: number;
declare const UNDERGROUND_TICK: number;
declare const DUNGEON_TIME: number;
declare const DUNGEON_TICK: number;
declare const DUNGEON_LADDER_BONUS: number;
declare const EFFECT_ENGINE_TICK: number;
declare const SAVE_TICK: number;
declare const GYM_TIME: number;
declare const GYM_COUNTDOWN: number;
declare const GYM_TICK: number;
declare const ACHIEVEMENT_TICK: number;
declare const MIN_LOAD_TIME: number;
declare const MAX_LOAD_TIME: number;
declare const MUTATION_TICK: number;
declare const WANDER_TICK: number;
declare const MULCH_OAK_ITEM_TICK: number;
declare const TEMP_BATTLE_TIME: number;
declare const TEMP_BATTLE_TICK: number;
declare const SPECIAL_EVENT_TICK: number;
declare const ZMOVE_TICK: number;
declare enum Region {
    none = -1,
    kanto = 0,
    johto = 1,
    hoenn = 2,
    sinnoh = 3,
    unova = 4,
    kalos = 5,
    alola = 6,
    galar = 7,
    hisui = 8,
    paldea = 9,
    final = 10
}
declare const MAX_AVAILABLE_REGION = Region.galar;
declare const MaxIDPerRegion: number[];
declare enum KantoSubRegions {
    Kanto = 0,
    Sevii123 = 1,
    Sevii4567 = 2
}
declare enum JohtoSubRegions {
    Johto = 0
}
declare enum HoennSubRegions {
    Hoenn = 0,
    Orre = 1
}
declare enum SinnohSubRegions {
    Sinnoh = 0
}
declare enum UnovaSubRegions {
    Unova = 0
}
declare enum KalosSubRegions {
    Kalos = 0
}
declare enum AlolaSubRegions {
    MelemeleIsland = 0,
    AkalaIsland = 1,
    UlaulaIsland = 2,
    PoniIsland = 3,
    MagikarpJump = 4
}
declare enum GalarSubRegions {
    SouthGalar = 0,
    NorthGalar = 1,
    IsleofArmor = 2,
    CrownTundra = 3
}
declare enum HisuiSubRegions {
    Hisui = 0
}
declare enum PaldeaSubRegions {
    Paldea = 0,
    Kitakami = 1,
    BlueberryAcademy = 2
}
declare enum FinalSubRegions {
    Final = 0
}
type SubRegions = KantoSubRegions | JohtoSubRegions | HoennSubRegions | SinnohSubRegions | UnovaSubRegions | KalosSubRegions | AlolaSubRegions | GalarSubRegions | HisuiSubRegions | PaldeaSubRegions | FinalSubRegions;
declare const ITEM_USE_TIME = 30;
declare const FLUTE_TYPE_ATTACK_MULTIPLIER = 1.005;
declare const ROAMING_MIN_CHANCE = 8192;
declare const ROAMING_MAX_CHANCE = 4096;
declare const ROAMING_INCREASED_CHANCE = 3;
declare const SHINY_CHANCE_BATTLE = 8192;
declare const SHINY_CHANCE_DUNGEON = 4096;
declare const SHINY_CHANCE_STONE = 2048;
declare const SHINY_CHANCE_SAFARI = 1024;
declare const SHINY_CHANCE_SHOP = 1024;
declare const SHINY_CHANCE_BATTLEFRONTIER = 1024;
declare const SHINY_CHANCE_BREEDING = 1024;
declare const SHINY_CHANCE_FARM = 1024;
declare const SHINY_CHANCE_REWARD = 1024;
declare const ITEM_PRICE_MULTIPLIER = 1.00045;
declare const ITEM_PRICE_DEDUCT = 1.0005;
declare const PLATE_VALUE = 100;
declare const EGG_CYCLE_MULTIPLIER = 40;
declare const MAX_EGG_CYCLES = 120;
declare const BREEDING_ATTACK_BONUS = 25;
declare const BREEDING_SHINY_ATTACK_MULTIPLIER = 5;
declare const FARM_PLOT_WIDTH = 5;
declare const FARM_PLOT_HEIGHT = 5;
declare const BerryDistribution: number[];
declare const MULCH_USE_TIME = 300;
declare const BOOST_MULCH_MULTIPLIER = 1.5;
declare const RICH_MULCH_MULTIPLIER = 2;
declare const SURPRISE_MULCH_MULTIPLIER = 1.5;
declare const AMAZE_MULCH_GROWTH_MULTIPLIER = 1.25;
declare const AMAZE_MULCH_PRODUCE_MULTIPLIER = 1.5;
declare const AMAZE_MULCH_MUTATE_MULTIPLIER = 1.25;
declare const FREEZE_MULCH_MULTIPLIER = 0;
declare const GOOEY_MULCH_CATCH_BONUS = 10;
declare const WANDER_RATE = 0.0005;
declare const WANDER_SHINY_FP_MODIFIER = 5;
declare const BerryColor: string[];
declare const BASE_DUNGEON_SIZE = 5;
declare const MIN_DUNGEON_SIZE = 5;
declare const MAX_DUNGEON_SIZE = 10;
declare const DUNGEON_CHEST_SHOW = 2;
declare const DUNGEON_MAP_SHOW = 4;
declare enum DungeonTileType {
    empty = 0,
    entrance = 1,
    enemy = 2,
    chest = 3,
    boss = 4,
    ladder = 5
}
declare enum AchievementOption {
    less = 0,
    equal = 1,
    more = 2
}
declare enum AchievementType {
    'None' = -1,
    'Pokedollars' = 0,
    'Dungeon Token' = 1,
    'Caught Pokemon' = 2,
    'Shiny Pokemon' = 3,
    'Total Captured' = 4,
    'Total Defeated' = 5,
    'Attack' = 6,
    'Poke Balls' = 7,
    'Route Defeats' = 8,
    'Clear Gym' = 9,
    'Clear Dungeon' = 10,
    'Quest' = 11,
    'Max Level Oak Item' = 12,
    'Hatchery' = 13,
    'Farming' = 14,
    'Underground' = 15,
    'Safari' = 16,
    'Battle Frontier' = 17,
    'Vitamins' = 18,
    'Pokerus' = 19,
    'Shadow Pokemon' = 20,
    'Mega Stone' = 21
}
declare const ROUTE_HELD_ITEM_MODIFIER = 1;
declare const DUNGEON_HELD_ITEM_MODIFIER: number;
declare const DUNGEON_BOSS_HELD_ITEM_MODIFIER: number;
declare const HELD_ITEM_CHANCE = 512;
declare const HELD_CANDY_ITEM_CHANCE = 1024;
declare const HELD_UNDERGROUND_ITEM_CHANCE = 2048;
declare const GRISEOUS_ITEM_CHANCE = 50;
declare const DNA_ITEM_CHANCE = 45;
declare const LIGHT_ITEM_CHANCE = 75;
declare const SHADOW_ITEM_CHANCE = 8;
declare const RUST_ITEM_CHANCE = 90;
declare const MANE_ITEM_CHANCE = 10;
declare const CHRISTMAS_ITEM_CHANCE = 10;
declare const HELD_MAGIKARP_BISCUIT = 256;
declare const GEM_UPGRADE_COST = 500;
declare const GEM_UPGRADE_STEP = 0.1;
declare const MAX_GEM_UPGRADES = 10;
declare const DUNGEON_GEMS = 3;
declare const DUNGEON_BOSS_GEMS = 20;
declare const GYM_GEMS = 5;
declare const SAFARI_BATTLE_CHANCE = 5;
declare const SAFARI_MJ_BATTLE_CHANCE: number;
declare const SAFARI_BASE_POKEBALL_COUNT = 30;
declare enum SafariTile {
    ground = 0,
    waterUL = 1,
    waterU = 2,
    waterUR = 3,
    waterL = 4,
    waterC = 5,
    waterR = 6,
    waterDL = 7,
    waterD = 8,
    waterDR = 9,
    grass = 10,
    sandUL = 11,
    sandU = 12,
    sandUR = 13,
    sandL = 14,
    sandC = 15,
    sandR = 16,
    sandDL = 17,
    sandD = 18,
    sandDR = 19,
    sandURinverted = 21,
    sandDRinverted = 22,
    sandDLinverted = 23,
    sandULinverted = 24,
    fenceUL = 25,
    fenceU = 26,
    fenceUR = 27,
    fenceL = 28,
    fenceR = 29,
    fenceDL = 30,
    fenceD = 31,
    fenceDR = 32,
    fenceDRend = 33,
    fenceURend = 34,
    fenceULend = 35,
    fenceDLend = 36,
    treeTopL = 37,
    treeTopC = 38,
    treeTopR = 39,
    treeLeavesL = 40,
    treeLeavesC = 41,
    treeLeavesR = 42,
    treeTrunkL = 43,
    treeTrunkC = 44,
    treeTrunkR = 45,
    treeRootsL = 46,
    treeRootsC = 47,
    treeRootsR = 48,
    sign = 51,
    waterULCorner = 52,
    waterDLCorner = 53,
    waterDRCorner = 54,
    waterURCorner = 55
}
declare const SAFARI_LEGAL_WALK_BLOCKS: SafariTile[];
declare const SAFARI_WATER_BLOCKS: SafariTile[];
declare const SAFARI_OUT_OF_BALLS = "Game Over!<br>You have run out of safari balls to use.";
declare const BUG_SAFARI_POKEMON = 10;
declare const FRIEND_SAFARI_POKEMON = 5;
declare const BUG_SAFARI_SHINY_MODIFIER = 5;
declare const GAIN_MONEY_BASE_REWARD: number;
declare const GAIN_TOKENS_BASE_REWARD: number;
declare const GAIN_FARM_POINTS_BASE_REWARD: number;
declare const HATCH_EGGS_BASE_REWARD: number;
declare const SHINY_BASE_REWARD: number;
declare const SHADOW_BASE_REWARD: number;
declare const DEFEAT_POKEMONS_BASE_REWARD: number;
declare const CAPTURE_POKEMONS_BASE_REWARD: number;
declare const MINE_LAYERS_BASE_REWARD: number;
declare const MINE_ITEMS_BASE_REWARD: number;
declare const USE_OAK_ITEM_BASE_REWARD: number;
declare const ACTIVE_QUEST_MULTIPLIER = 4;
declare const QUEST_CLICKS_PER_SECOND = 5;
declare const QUESTS_PER_SET = 10;
declare const BASE_EP_YIELD = 100;
declare const STONE_EP_YIELD = 1000;
declare const SHOPMON_EP_YIELD = 1000;
declare const SAFARI_EP_YIELD = 1000;
declare const SHINY_EP_MODIFIER = 5;
declare const REPEATBALL_EP_MODIFIER = 5;
declare const DUNGEON_EP_MODIFIER = 3;
declare const DUNGEON_BOSS_EP_MODIFIER = 10;
declare const ROAMER_EP_MODIFIER = 50;
declare const SHADOW_EP_MODIFIER = 2;
declare const BASE_WANDERER_EP_MODIFIER = 2;
declare const WANDERER_EP_MODIFIER = 10;
declare const EP_EV_RATIO = 1000;
declare const EP_CHALLENGE_MODIFIER = 10;
declare const MEGA_REQUIRED_ATTACK_MULTIPLIER = 500;
/**
 * idle: The game is not doing anything, the battle view isn't shown
 * paused: The battle view is shown, but there are no game ticks
 * fighting: On a route and battling a pokemon
 * gym: Battling a gym
 * dungeon: Exploring a dungeon
 * safari: Exploring the safari zone
 * town: In a town/pre-dungeon, town view is not shown
 */
declare enum GameState {
    loading = -1,
    idle = 0,
    paused = 1,
    fighting = 2,
    gym = 3,
    dungeon = 4,
    safari = 5,
    town = 6,
    shop = 7,
    battleFrontier = 8,
    temporaryBattle = 9
}
declare enum Pokeball {
    'None' = -1,
    'Pokeball' = 0,
    'Greatball' = 1,
    'Ultraball' = 2,
    'Masterball' = 3,
    'Fastball' = 4,
    'Quickball' = 5,
    'Timerball' = 6,
    'Duskball' = 7,
    'Luxuryball' = 8,
    'Diveball' = 9,
    'Lureball' = 10,
    'Nestball' = 11,
    'Repeatball' = 12,
    'Beastball' = 13,
    'Moonball' = 14
}
declare enum Currency {
    money = 0,
    questPoint = 1,
    dungeonToken = 2,
    diamond = 3,
    farmPoint = 4,
    battlePoint = 5,
    contestToken = 6
}
declare const LuxuryBallCurrencyRate: Record<Currency, number>;
declare enum TypeEffectiveness {
    Immune = 0,
    NotVery = 1,
    Neutral = 2,
    Very = 3
}
declare enum TypeEffectivenessValue {
    Immune = 0,
    NotVery = 0.5,
    Neutral = 1,
    Very = 2
}
declare function cleanHTMLString(str: string): string;
declare function humanifyString(str: string): string;
declare function camelCaseToString(str: string): string;
declare function pluralizeString(str: string, amt: number): string;
declare function formatDate(date: Date): string;
declare function formatTime(input: number | Date): string;
declare function formatTimeFullLetters(input: number): string;
declare function formatTimeShortWords(input: number): string;
declare function formatSecondsToTime(input: number): string;
declare function formatNumber(input: number): string;
declare function clipNumber(num: number, min: number, max: number): number;
declare function expRandomElement<T>(array: T[], ratio: number): T;
declare const TypeColor: string[];
declare const ROUTE_KILLS_NEEDED = 10;
declare const ACHIEVEMENT_DEFEAT_ROUTE_VALUES: number[];
declare const ACHIEVEMENT_DEFEAT_GYM_VALUES: number[];
declare const ACHIEVEMENT_DEFEAT_DUNGEON_VALUES: number[];
type EnvironmentData = Partial<Record<Region, Set<string | number>>>;
declare const Environments: Record<string, EnvironmentData>;
type Environment = keyof typeof Environments;
type BattleBackgroundData = Partial<Record<Region, Set<string | number>>>;
declare const BattleBackgrounds: Record<string, BattleBackgroundData>;
type BattleBackground = keyof typeof BattleBackgrounds;
declare const BattleBackgroundImage: Record<BattleBackground, string>;
declare enum Starter {
    None = -1,
    Grass = 0,
    Fire = 1,
    Water = 2,
    Special = 3
}
declare const RegionalStarters: number[][];
declare enum StoneType {
    'None' = -1,
    'Leaf_stone' = 0,
    'Fire_stone' = 1,
    'Water_stone' = 2,
    'Thunder_stone' = 3,
    'Moon_stone' = 4,
    'Linking_cord' = 5,
    'Sun_stone' = 6,
    'Soothe_bell' = 7,
    'Metal_coat' = 8,
    'Kings_rock' = 9,
    'Upgrade' = 10,
    'Dragon_scale' = 11,
    'Prism_scale' = 12,
    'Deepsea_tooth' = 13,
    'Deepsea_scale' = 14,
    'Shiny_stone' = 15,
    'Dusk_stone' = 16,
    'Dawn_stone' = 17,
    'Razor_claw' = 18,
    'Razor_fang' = 19,
    'Electirizer' = 20,
    'Magmarizer' = 21,
    'Protector' = 22,
    'Dubious_disc' = 23,
    'Reaper_cloth' = 24,
    'Black_DNA' = 25,
    'White_DNA' = 26,
    'Sachet' = 27,
    'Whipped_dream' = 28,
    'Key_stone' = 29,
    'Ice_stone' = 30,
    'Solar_light' = 31,
    'Lunar_light' = 32,
    'Pure_light' = 33,
    'Crystallized_shadow' = 34,
    'Sweet_apple' = 35,
    'Tart_apple' = 36,
    'Cracked_pot' = 37,
    'Galarica_cuff' = 38,
    'Galarica_wreath' = 39,
    'Black_mane_hair' = 40,
    'White_mane_hair' = 41,
    'Black_augurite' = 42,
    'Peat_block' = 43,
    'Auspicious_armor' = 44,
    'Malicious_armor' = 45,
    'Leaders_crest' = 46,
    'Gimmighoul_coin' = 47,
    'Syrupy_apple' = 48,
    'Unremarkable_teacup' = 49,
    'Metal_alloy' = 50
}
declare enum FossilPieceType {
    'None' = -1,
    'Fossilized Bird' = 0,
    'Fossilized Fish' = 1,
    'Fossilized Drake' = 2,
    'Fossilized Dino' = 3
}
declare enum BattleItemType {
    'xAttack' = "xAttack",
    'xClick' = "xClick",
    'Lucky_egg' = "Lucky_egg",
    'Token_collector' = "Token_collector",
    'Dowsing_machine' = "Dowsing_machine",
    'Lucky_incense' = "Lucky_incense"
}
declare enum FluteItemType {
    'Yellow_Flute' = "Yellow_Flute",
    'Black_Flute' = "Black_Flute",
    'Time_Flute' = "Time_Flute",
    'Red_Flute' = "Red_Flute",
    'White_Flute' = "White_Flute",
    'Blue_Flute' = "Blue_Flute"
}
declare enum PokemonItemType {
    'Pinkan Arbok' = 0,
    'Pinkan Oddish' = 1,
    'Pinkan Poliwhirl' = 2,
    'Pinkan Geodude' = 3,
    'Pinkan Dodrio' = 4,
    'Lickitung' = 5,
    'Pinkan Weezing' = 6,
    'Mr. Mime' = 7,
    'Pinkan Scyther' = 8,
    'Jynx' = 9,
    'Pinkan Electabuzz' = 10,
    'Magikarp' = 11,
    'Eevee' = 12,
    'Porygon' = 13,
    'Togepi' = 14,
    'Beldum' = 15,
    'Grotle (Acorn)' = 16,
    'Combee' = 17,
    'Burmy (Plant)' = 18,
    'Spiritomb' = 19,
    'Cherubi' = 20,
    'Zorua' = 21,
    'Meloetta (Pirouette)' = 22,
    'Type: Null' = 23,
    'Poipole' = 24,
    'Silvally (Fighting) 1' = 25,
    'Silvally (Rock) 1' = 26,
    'Silvally (Dark) 1' = 27,
    'Silvally (Fairy) 1' = 28,
    'Silvally (Water) 1' = 29,
    'Silvally (Grass) 1' = 30,
    'Silvally (Fire) 1' = 31,
    'Silvally (Electric) 1' = 32,
    'Silvally (Ice) 1' = 33,
    'Silvally (Ground) 1' = 34,
    'Silvally (Bug) 1' = 35,
    'Silvally (Flying) 1' = 36,
    'Silvally (Poison) 1' = 37,
    'Silvally (Ghost) 1' = 38,
    'Silvally (Psychic) 1' = 39,
    'Silvally (Steel) 1' = 40,
    'Silvally (Dragon) 1' = 41,
    'Silvally (Fighting) 2' = 42,
    'Silvally (Rock) 2' = 43,
    'Silvally (Dark) 2' = 44,
    'Silvally (Fairy) 2' = 45,
    'Silvally (Water) 2' = 46,
    'Silvally (Grass) 2' = 47,
    'Silvally (Fire) 2' = 48,
    'Silvally (Electric) 2' = 49,
    'Silvally (Ice) 2' = 50,
    'Silvally (Ground) 2' = 51,
    'Silvally (Bug) 2' = 52,
    'Silvally (Flying) 2' = 53,
    'Silvally (Poison) 2' = 54,
    'Silvally (Ghost) 2' = 55,
    'Silvally (Psychic) 2' = 56,
    'Silvally (Steel) 2' = 57,
    'Silvally (Dragon) 2' = 58,
    'Dracozolt' = 59,
    'Arctozolt' = 60,
    'Dracovish' = 61,
    'Arctovish' = 62,
    'Zarude (Dada)' = 63
}
declare enum UltraBeastType {
    'Nihilego' = 0,
    'Buzzwole' = 1,
    'Pheromosa' = 2,
    'Xurkitree' = 3,
    'Kartana' = 4,
    'Celesteela' = 5,
    'Blacephalon' = 6,
    'Stakataka' = 7,
    'Guzzlord' = 8,
    'Poipole' = 9,
    'Naganadel' = 10
}
declare enum PokeBlockColor {
    Black = 0,
    Red = 1,
    Blue = 2,
    Pink = 3,
    Green = 4,
    Yellow = 5,
    Gold = 6,
    Purple = 7,
    Indigo = 8,
    Brown = 9,
    Light_Blue = 10,
    Olive = 11,
    Beige = 12,
    Gray = 13,
    White = 14
}
declare enum VitaminType {
    Protein = 0,
    Calcium = 1,
    Carbos = 2
}
declare enum EggItemType {
    'Fire_egg' = 0,
    'Water_egg' = 1,
    'Grass_egg' = 2,
    'Fighting_egg' = 3,
    'Electric_egg' = 4,
    'Dragon_egg' = 5,
    'Pokemon_egg' = 6,
    'Mystery_egg' = 7
}
declare enum BulletinBoards {
    None = -2,
    All = -1,
    Kanto = 0,
    Johto = 1,
    Hoenn = 2,
    Sevii4567 = 3,
    Sinnoh = 4,
    Unova = 5,
    Kalos = 6,
    Alola = 7,
    Hoppy = 8,
    Galar = 9,
    Armor = 10,
    Crown = 11,
    Hisui = 12,
    Arceus = 13,
    Paldea = 14
}
declare const BASE_MINE_WIDTH = 25;
declare const BASE_MINE_HEIGHT = 12;
declare const BASE_MINIMUM_LAYER_DEPTH = 3;
declare const BASE_EXTRA_LAYER_DEPTH = 2;
declare const BASE_MINIMUM_ITEMS = 1;
declare const BASE_MAXIMUM_ITEMS = 3;
declare const DISCOVER_MINE_TIMEOUT_LEVEL_START = 20;
declare const DISCOVER_MINE_TIMEOUT_BASE: number;
declare const DISCOVER_MINE_TIMEOUT_REDUCTION_PER_LEVEL = 30;
declare const SPECIAL_MINE_CHANCE: number;
declare const UNDERGROUND_EXPERIENCE_DIG_UP_ITEM = 25;
declare const UNDERGROUND_EXPERIENCE_CLEAR_LAYER = 100;
declare const SURVEY_RANGE_BASE = 9;
declare const SURVEY_RANGE_REDUCTION_LEVELS = 15;
declare const MAX_HIRES = 1;
declare const REWARD_RETENTION_BASE = 0.6;
declare const REWARD_RETENTION_DECREASE_PER_LEVEL = 0.01;
declare const REWARD_RETENTION_MINIMUM = 0.1;
declare const HELPER_AUTO_SELL_LEVEL_REQUIREMENT = 20;
declare const SMART_TOOL_CHANCE_BASE = 0.5;
declare const SMART_TOOL_CHANCE_INCREASE_PER_LEVEL = 0.025;
declare const SMART_TOOL_CHANCE_MAXIMUM = 1;
declare const FAVORITE_MINE_CHANCE_BASE = 0.5;
declare const FAVORITE_MINE_CHANCE_INCREASE_PER_LEVEL = 0.01;
declare const FAVORITE_MINE_CHANCE_MAXIMUM = 1;
declare const WORKCYCLE_TIMEOUT_BASE = 60;
declare const WORKCYCLE_TIMEOUT_DECREASE_PER_LEVEL = 1.1;
declare const WORKCYCLE_TIMEOUT_MINIMUM = 5;
declare const PLAYER_EXPERIENCE_HELPER_FRACTION = 0.25;
declare const HELPER_EXPERIENCE_PLAYER_FRACTION = 0.25;
declare const UNDERGROUND_BATTERY_COOLDOWN_SECONDS = 1;
declare const UNDERGROUND_BATTERY_MAX_CHARGES = 60;
declare enum EnergyRestoreSize {
    SmallRestore = 0,
    MediumRestore = 1,
    LargeRestore = 2
}
declare const EnergyRestoreEffect: {
    SmallRestore: number;
    MediumRestore: number;
    LargeRestore: number;
};
declare const FossilToPokemon: {
    'Helix Fossil': string;
    'Dome Fossil': string;
    'Old Amber': string;
    'Root Fossil': string;
    'Claw Fossil': string;
    'Armor Fossil': string;
    'Skull Fossil': string;
    'Cover Fossil': string;
    'Plume Fossil': string;
    'Jaw Fossil': string;
    'Sail Fossil': string;
};
declare const PokemonToFossil: {
    Omanyte: string;
    Kabuto: string;
    Aerodactyl: string;
    Lileep: string;
    Anorith: string;
    Shieldon: string;
    Cranidos: string;
    Tirtouga: string;
    Archen: string;
    Tyrunt: string;
    Amaura: string;
};
declare const KantoGyms: string[];
declare const JohtoGyms: string[];
declare const HoennGyms: string[];
declare const SinnohGyms: string[];
declare const UnovaGyms: string[];
declare const KalosGyms: string[];
declare const AlolaGyms: string[];
declare const GalarGyms: string[];
declare const HisuiGyms: string[];
declare const PaldeaGyms: string[];
declare const OrangeGyms: string[];
declare const OrreGyms: string[];
declare const MagikarpJumpGyms: string[];
declare const RegionGyms: string[][];
declare function getGymIndex(gym: string): number;
declare function getGymRegion(gym: string): Region;
declare const GymAutoRepeatRewardTiers: number[][];
declare const KantoDungeons: string[];
declare const JohtoDungeons: string[];
declare const HoennDungeons: string[];
declare const SinnohDungeons: string[];
declare const UnovaDungeons: string[];
declare const KalosDungeons: string[];
declare const AlolaDungeons: string[];
declare const GalarDungeons: string[];
declare const HisuiDungeons: string[];
declare const PaldeaDungeons: string[];
declare const RegionDungeons: string[][];
declare function getDungeonIndex(dungeon: string): number;
declare function getDungeonRegion(dungeon: string): Region;
declare const StartingTowns: string[];
declare const StartingRoutes: number[];
declare const DockTowns: string[];
declare const TemporaryBattles: string[];
declare enum ShardTraderLocations {
    'None' = -1,
    'Cerulean City' = 0,
    'Vermilion City' = 1,
    'Lavender Town' = 2,
    'Saffron City' = 3,
    'Fuchsia City' = 4,
    'Cinnabar Island' = 5,
    'Azalea Town' = 6,
    'Ecruteak City' = 7,
    'Olivine City' = 8,
    'Cianwood City' = 9,
    'Mahogany Town' = 10,
    'Blackthorn City' = 11,
    'Petalburg City' = 12,
    'Dewford Town' = 13,
    'Slateport City' = 14,
    'Mauville City' = 15,
    'Verdanturf Town' = 16,
    'Lavaridge Town' = 17,
    'Fallarbor Town' = 18,
    'Fortree City' = 19,
    'Mossdeep City' = 20,
    'Pacifidlog Town' = 21,
    'Sootopolis City' = 22,
    'Ever Grande City' = 23,
    'Pokémon HQ Lab' = 24,
    'Sandgem Town' = 25,
    'Oreburgh City' = 26,
    'Floaroma Town' = 27,
    'Eterna City' = 28,
    'Hearthome City' = 29,
    'Solaceon Town' = 30,
    'Pastoria City' = 31,
    'Celestic Town' = 32,
    'Pal Park' = 33,
    'Canalave City' = 34,
    'Snowpoint City' = 35,
    'Sunyshore City' = 36,
    'Survival Area' = 37,
    'Resort Area' = 38,
    'Castelia City' = 39,
    'Nimbasa City' = 40,
    'Driftveil City' = 41,
    'Mistralton City' = 42,
    'Lentimas Town' = 43,
    'Undella Town' = 44,
    'Lacunosa Town' = 45,
    'Opelucid City' = 46,
    'Humilau City' = 47,
    'Icirrus City' = 48,
    'Black and White Park' = 49,
    'Nacrene City' = 50,
    'Striaton City' = 51,
    'Accumula Town' = 52,
    'Nuvema Town' = 53,
    'Camphrier Town' = 54,
    'Parfum Palace' = 55,
    'Ambrette Town' = 56,
    'Cyllage City' = 57,
    'Geosenge Town' = 58,
    'Shalour City' = 59,
    'Coumarine City' = 60,
    'Laverre City' = 61,
    'Dendemille Town' = 62,
    'Anistar City' = 63,
    'Couriway Town' = 64,
    'Snowbelle City' = 65,
    'Hau\'oli City' = 66,
    'Heahea City' = 67,
    'Paniola Town' = 68,
    'Konikoni City' = 69,
    'Aether Paradise' = 70,
    'Malie City' = 71,
    'Tapu Village' = 72,
    'Seafolk Village' = 73,
    'Exeggutor Island' = 74,
    'Altar of the Sunne and Moone' = 75,
    'Turffield' = 76,
    'Hulbury' = 77,
    'Motostoke' = 78,
    'Hammerlocke' = 79,
    'Route 6' = 80,
    'Stow-on-Side' = 81,
    'Ballonlea' = 82,
    'Circhester' = 83,
    'Spikemuth' = 84,
    'Master Dojo' = 85,
    'Jubilife Village' = 86
}
declare enum BerryTraderLocations {
    'None' = -1,
    'Goldenrod City' = 0,
    'Mauville City' = 1,
    'Pinkan Pokémon Reserve' = 2,
    'Hearthome City' = 3,
    'Secret Berry Shop' = 4,
    'Driftveil City' = 5
}
declare function getTemporaryBattlesIndex(temporaryBattle: string): number;
declare enum DayOfWeek {
    'Sunday' = 0,
    'Monday' = 1,
    'Tuesday' = 2,
    'Wednesday' = 3,
    'Thursday' = 4,
    'Friday' = 5,
    'Saturday' = 6
}
declare enum Pokerus {
    'Uninfected' = 0,
    'Infected' = 1,
    'Contagious' = 2,
    'Resistant' = 3
}
declare enum Genders {
    Genderless = 0,
    MaleFemale = 1
}
declare enum BattlePokemonGender {
    NoGender = 0,
    Male = 1,
    Female = 2
}
declare enum PokemonStatisticsType {
    Captured = "Captured",
    Defeated = "Defeated",
    Encountered = "Encountered",
    Hatched = "Hatched",
    Seen = "Seen"
}
declare enum AlcremieSweet {
    'Strawberry Sweet' = 0,
    'Love Sweet' = 1,
    'Berry Sweet' = 2,
    'Clover Sweet' = 3,
    'Flower Sweet' = 4,
    'Star Sweet' = 5,
    'Ribbon Sweet' = 6
}
declare enum AlcremieSpins {
    dayClockwiseBelow5 = 0,
    dayCounterclockwiseBelow5 = 1,
    nightClockwiseBelow5 = 2,
    nightCounterclockwiseAbove5 = 3,
    nightClockwiseAbove5 = 4,
    nightCounterclockwiseBelow5 = 5,
    dayClockwiseAbove5 = 6,
    dayCounterclockwiseAbove5 = 7,
    at5Above10 = 8,
    Any3600 = 9
}
declare enum ExtraAchievementCategories {
    global = 10,
    sevii = 11,
    orre = 12,
    magikarpJump = 13
}
declare const DayCycleStartHours: Record<DayCyclePart, number>;
declare const MoonCycleValues: Record<MoonCyclePhase, number>;
declare const MoonEvoPokemon: Set<PokemonNameType>;
declare enum ShadowStatus {
    None = 0,
    Shadow = 1,
    Purified = 2
}
declare enum MegaStoneType {
    Abomasite = 0,
    Absolite = 1,
    Aerodactylite = 2,
    Aggronite = 3,
    Alakazite = 4,
    Altarianite = 5,
    Ampharosite = 6,
    Audinite = 7,
    Banettite = 8,
    Beedrillite = 9,
    Blastoisinite = 10,
    Blazikenite = 11,
    Blue_Orb = 12,
    Cameruptite = 13,
    Charizardite_X = 14,
    Charizardite_Y = 15,
    Diancite = 16,
    Galladite = 17,
    Garchompite = 18,
    Gardevoirite = 19,
    Gengarite = 20,
    Glalitite = 21,
    Gyaradosite = 22,
    Heracronite = 23,
    Houndoominite = 24,
    Kangaskhanite = 25,
    Latiasite = 26,
    Latiosite = 27,
    Lopunnite = 28,
    Lucarionite = 29,
    Manectite = 30,
    Mawilite = 31,
    Medichamite = 32,
    Metagrossite = 33,
    Meteorite = 34,
    Mewtwonite_X = 35,
    Mewtwonite_Y = 36,
    Pidgeotite = 37,
    Pinsirite = 38,
    Red_Orb = 39,
    Sablenite = 40,
    Salamencite = 41,
    Sceptilite = 42,
    Scizorite = 43,
    Sharpedonite = 44,
    Slowbronite = 45,
    Steelixite = 46,
    Swampertite = 47,
    Tyranitarite = 48,
    Venusaurite = 49
}
declare enum GemShops {
    HoennFluteMaster = 0,
    HoennStoneSalesman = 1,
    UnovaFluteMaster = 2,
    FurfrouGemTrader = 3,
    KalosStoneSalesman = 4,
    SilvallyTrader = 5,
    MagikarpJumpGemTrader = 6
}
declare enum DungeonInteractionSource {
    Click = 0,
    Keybind = 1,
    HeldKeybind = 2
}
declare const ModalCollapseList: string[];
declare enum ConsumableType {
    Rare_Candy = 0,
    Magikarp_Biscuit = 1
}
declare const zCrystalItemType: string[];
declare enum ZMoveStatus {
    inactive = 0,
    counteractive = 1,
    active = 2
}
declare const ZMOVE_ACTIVE_MULTIPLIER = 1.5;
declare const ZMOVE_COUNTERACTIVE_MULTIPLIER = 0.75;
declare const ZMOVE_ACTIVE_TIME: number;
declare const ZMOVE_COUNTERACTIVE_TIME: number;
}
