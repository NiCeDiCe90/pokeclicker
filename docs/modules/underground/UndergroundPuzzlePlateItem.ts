import UndergroundItemValueType from '../enums/UndergroundItemValueType';
import Requirement from '../requirements/Requirement';
import UndergroundItem from './UndergroundItem';

export default class UndergroundPuzzlePlateItem extends UndergroundItem {
    constructor(
        id: number,
        itemName: string,
        space: Array<Array<number>>,
        value = 1,
        requirement?: Requirement,
    ) {
        super(id, itemName, space, value, UndergroundItemValueType.PuzzlePlate, requirement, 0.5); 
    }
}
