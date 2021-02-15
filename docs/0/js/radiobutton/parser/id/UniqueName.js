import Unique from './Unique.js';
export default class UniqueName {
    static get(radio) {
        const id = radio.getAttribute('id');
        return (id) ? id : Unique.generate();
    }
}
