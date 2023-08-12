export { default as AddCategory } from './AddCategory';
export { default as GifGrid } from './GifGrid';
// Se pone default as ... porque es una exportacion por defecto lo que tenemos dentro de esos archivos, pero si fueran export sin default, funcionaria con solo poner export * from ... como a continuacion
export * from './GifItem';
