export default class LabelFromOptionElement {
    static create(radio, option, input_id) {
        const label = document.createElement('label');
        label.innerHTML = LabelFromOptionElement.#getInneHTMLValue(option);
        label.setAttribute('for', input_id);
        return label;
    }
    static #getInneHTMLValue(option) {
        if (0 < option.innerHTML.trim().length) { return option.innerHTML; }
        const value = option.getAttribute('value');
        if (0 < value.trim().length) { return value; }
        throw new Error('<option>のラベルはTextNodeまたはvalue属性値で指定してください。どちらも空白以外の文字で長さ１以上が必要です。');
    }
}
