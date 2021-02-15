export default class Unique {
    static generate() {
        return new Date().getTime().toString(16) + Math.floor(Number.MAX_SAFE_INTEGER*Math.random()).toString(16);
    }
}
