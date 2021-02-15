import BareRadioButton from './BareRadioButton.js';
import FieldsetRadioButton from './FieldsetRadioButton.js';
import UlRadioButton from './UlRadioButton.js';
export default class RadioButtonFactory {
    static get(dom_radio) {
        if (dom_radio.hasAttribute('bare')) { return BareRadioButton; }
        else if (dom_radio.hasAttribute('label')) { return FieldsetRadioButton; }
        else if (dom_radio.hasAttribute('ul')) { return UlRadioButton; }
        else { return UlRadioButton; }
    }
}
