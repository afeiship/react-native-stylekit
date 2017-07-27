import list from '../configs/margin';

let map = {};

list.forEach(item=>{
  map[ `blank_${item}` ] = { height: item };
});

export default map;
