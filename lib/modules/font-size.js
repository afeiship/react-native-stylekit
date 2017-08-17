import list from '../configs/font-size';

let map = {};

list.forEach(item=>{
  map[ `f${item}` ] = { fontSize: item };
})

export default map;
