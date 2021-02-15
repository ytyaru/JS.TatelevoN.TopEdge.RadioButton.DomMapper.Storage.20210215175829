export default class InputFromOptionElement {
    static create(radio, option, input_name, input_id) {
        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        if (option.hasAttribute('selected')) {
            input.setAttribute('checked', 'true');
        }
        input.setAttribute('id', input_id);
        input.setAttribute('name', input_name);
        input.setAttribute('value', InputFromOptionElement.#getValue(option));
        return input;
    }
    static #getValue(option) {
        const value = option.getAttribute('value');
        if (value) { return value; }
        if (option.textContent) { return option.textContent; }
        throw new Error('<option>にはvalue属性またはtextNodeが必要です。');
    }
}
