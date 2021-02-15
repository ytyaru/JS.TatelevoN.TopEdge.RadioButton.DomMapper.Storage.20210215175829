export default class InputFromValueAttribute {
    static create(radio, value, input_name, input_id) {
        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('id', input_id);
        input.setAttribute('name', input_name);
        input.setAttribute('value', value);
        return input;
    }
}
