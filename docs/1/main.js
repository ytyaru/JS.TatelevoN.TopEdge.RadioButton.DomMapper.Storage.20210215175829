import Loader from './js/common/Loader.js';
import RadioButtonTag from './js/radiobutton/RadioButtonTag.js';
import DomMapperSelect from './js/dommapper/DomMapperSelect.js';
import StorageFactory from './js/storage/StorageFactory.js';
import MouseOverTopEdgeArea from './js/topedge/MouseOverTopEdgeArea.js';
window.addEventListener('load', async(event) => {
    MouseOverTopEdgeArea.Template = await Loader.load('./css-template/top-edge.css');
    MouseOverTopEdgeArea.parse();

    await RadioButtonTag.parse();

    const select = new DomMapperSelect();
    document.body.insertBefore(await select.create('./tsv/map.tsv'), document.body.children[0]);
    console.log(select.Mapper, select.Element);

    await StorageFactory.get(); 
//    StorageFacotry.get('Every'); 
});
