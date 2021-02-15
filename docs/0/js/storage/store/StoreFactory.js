import InputStore from './InputStore.js';
import InputCheckboxStore from './InputCheckboxStore.js';
import InputRadioStore from './InputRadioStore.js';
import SelectStore from './SelectStore.js';
import TextAreaStore from './TextAreaStore.js';
export default class StoreFactory {
    static #stores = [InputStore, InputRadioStore, InputCheckboxStore, SelectStore, TextAreaStore];
    static get(id=null) {
        if (!id) { return StoreFactory.#newStores(); }
        const module = import(`./${id}Store.js`);
        return new module.default();
    }
    static #newStores() {
        return StoreFactory.#stores.map(store=>new store());
    }
    static * getElements() {
        for (let store of StoreFactory.get()) {
            for (let element of store.getElements()) {
                yield element;
            }
        }
    }
    static getFromElement(target) { // 指定したターゲット要素に該当するStoreクラスを返す
        for (let store of StoreFactory.get()) {
            for (let element of store.getElements()) {
                if (target === element) { return store; }
            }
        }
    }
}
