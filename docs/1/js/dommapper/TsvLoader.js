import Loader from '../common/Loader.js';
export default class TsvLoader {
    static #TSV_FIX_COL_NUM = 2; // TSVの固定列(query, target)数
    static async load(path) { // './tsv/map.tsv'
        return TsvLoader.#convertTsvToObject(await Loader.load(path));
    }
    static #convertTsvToObject(tsv){
        const records = [];
        const lines = tsv.split('\n');
        const keys = lines.shift().split('\t').slice(TsvLoader.#TSV_FIX_COL_NUM);
        for (let o of TsvLoader.#getRecords(keys, lines)) {
            records.push(o);
        }
        return {keys: keys, records: records};
    }
    static * #getRecords(keys, lines){
        for (let line of lines) {
            const record = line.split('\t');
            if (3 > record.length) { continue; }
            const o = {};
            o.query = record[0];
            o.target = record[1];
            for (let i=TsvLoader.#TSV_FIX_COL_NUM; i<record.length; i++) {
                o[keys[i-TsvLoader.#TSV_FIX_COL_NUM]] = record[i];
            }
            yield o;
        }
    }
}

