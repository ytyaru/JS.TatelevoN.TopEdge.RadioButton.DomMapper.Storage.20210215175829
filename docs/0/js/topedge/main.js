import MouseOverTopEdgeArea from './js/topedge/MouseOverTopEdgeArea.js';
window.addEventListener('load', async(event) => {
    MouseOverTopEdgeArea.Template = await Loader.load('./css-template/top-edge.css');
    MouseOverTopEdgeArea.parse();
});
