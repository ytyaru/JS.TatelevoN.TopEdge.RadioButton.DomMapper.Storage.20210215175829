export default class LabelFromValueAttribute {
    static create(radio, value, input_id) {
        const label = document.createElement('label');
        label.innerHTML = LabelFromValueAttribute.#getInneHTMLValue(value);
        label.setAttribute('for', input_id);
        return label;
    }
    static #getInneHTMLValue(value) {
        if (0 < value.trim().length) { return value; }
        throw new Error('ラベルには長さ１以上の文字列が必要です。');
    }
}
