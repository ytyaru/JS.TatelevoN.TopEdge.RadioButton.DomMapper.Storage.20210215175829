import Unique from './Unique.js';
export default class UniqueIdFromOptionElement {
    static get(group_id, option) {
        return group_id + '-' + UniqueIdFromOptionElement.#generateId(option);
    }
    static #generateId(option) {
        for (let attr of ['name', 'value']) {
            const v = option.getAttribute(attr);
            if (v) { return v; }
        }
        return Unique.generate();
    }
}
