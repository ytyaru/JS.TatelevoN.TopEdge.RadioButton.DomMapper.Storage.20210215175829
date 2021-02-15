import Option from './Option.js';
export default class BareRadioButton {
    static async create(radio) {
        const inputLabels = await Option.create(radio); 
        for (let inputLabel of inputLabels) {
            for (let element of inputLabel) {
                radio.parentNode.insertBefore(element, radio);
            }
        }
        radio.remove();
    }
}
