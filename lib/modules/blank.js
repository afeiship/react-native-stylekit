import list from '../configs/margin';

let map = {};

list.forEach(item=>{
  map[ `blank${item}` ] = { height: item };
});

export default map;
