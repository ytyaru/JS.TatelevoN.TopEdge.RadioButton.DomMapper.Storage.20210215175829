import Unique from './Unique.js';
export default class UniqueIdFromValueAttribute {
    static get(group_id, value) {
        return group_id + '-' + UniqueIdFromValueAttribute.#generateId(value);
    }
    static #generateId(value) {
        return (value && 0 < value.trim().length) ? value : Unique.generate();
    }
}
