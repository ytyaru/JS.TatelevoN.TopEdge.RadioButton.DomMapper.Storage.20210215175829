import UniqueName from './id/UniqueName.js';
import InputFromOptionElement from './tag/InputFromOptionElement.js';
import InputFromValueAttribute from './tag/InputFromValueAttribute.js';
import LabelFromOptionElement from './tag/LabelFromOptionElement.js';
import LabelFromValueAttribute from './tag/LabelFromValueAttribute.js';
export default class Option { // <option>またはvalue属性値からinput要素とlabel要素を作って返す
    static async create(radio) {
        const inputLabels = [];
        const input_name = UniqueName.get(radio);
        const notation = await Option.#jadgeNotation(radio);
        console.log(notation);
        for (let value of notation.values) {
            const input_id = notation.unique.get(input_name, value);
            inputLabels.push([
                notation.input.create(radio, value, input_name, input_id),
                notation.label.create(radio, value, input_id),
            ]);
        }
        return inputLabels;
    }
    static async #jadgeNotation(radio) { // 選択肢を指定する記法はどれか判断する。<option>またはvalue属性値のどれか。
        const options = radio.querySelectorAll('option');
        if (0 < options.length ) { return await Option.#getNotation(options, 'OptionElement'); }
        const values = radio.getAttribute('value').split(' ');
        if (0 < values.length ) { return await Option.#getNotation(values, 'ValueAttribute'); }
        throw new Error('<radio-button>には選択肢が必要です。<option>かvalue属性値で選択肢を指定してください。');
    }
    static async #getNotation(values, name) {
        const input = await import(`./tag/InputFrom${name}.js`);
        const label = await import(`./tag/LabelFrom${name}.js`);
        const unique = await import(`./id/UniqueIdFrom${name}.js`);
        return {
            values: values, 
            input: input.default,
            label: label.default, 
            unique: unique.default,
        };
    }
}
