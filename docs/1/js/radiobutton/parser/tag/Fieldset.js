export default class Fieldset {
    static create(radio) {
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        const label = radio.getAttribute('label');
        if (0 < label.length) {
            legend.textContent = label;
            fieldset.appendChild(legend);
        }
        radio.parentNode.insertBefore(fieldset, radio);
        return fieldset;
    }
}
