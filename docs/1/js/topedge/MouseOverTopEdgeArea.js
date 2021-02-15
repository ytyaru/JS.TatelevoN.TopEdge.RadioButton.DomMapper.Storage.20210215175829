import MouseOverTopEdgeAreaStyle from './MouseOverTopEdgeAreaStyle.js';
export default class MouseOverTopEdgeArea {
    static #id = 'style-auto-color';
    static #query = '#top-edge';
    static #template = `
        {{query}} {
            position: fixed;
            display: none;
        }
        {{query}}:hover {
            display: inline;
        }
    `;
    static #height = 100;
    static #element 
    static get Template() { return this.#template; }
    static set Template(value) { this.#template = value; }
    static get Height() { return this.#height; }
    static set Height(value) { this.#height = value; }
    static get Id() { return this.#id; }
    static set Id(value) { this.#id= value; }
    static get Query() { return this.#query; }
    static set Query(value) { this.#query = value; }
    static parse() {
        const style = new MouseOverTopEdgeAreaStyle(this.Id, this.Query, this.Template);
        style.replace();
        this.#element = document.querySelector(this.Query);
        document.addEventListener('mousemove', (event)=>{
            console.log(`${event.clientY}, ${this.#height}, ${event.target}`);
            if (event.clientY < this.#height) { MouseOverTopEdgeArea.#show(this.#element); }
            else { MouseOverTopEdgeArea.#hide(this.#element); }
        });
        this.#hide(this.#element);
    }
    static #show(element) {
        element.style.display = 'inline';
    }
    static #hide(element) {
        element.style.display = 'none';
    }
}
