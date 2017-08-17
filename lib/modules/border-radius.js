import list from '../configs/border-radius';

let map = {};

list.forEach(item=>{
  map[ `bdr${item}` ] = { borderRadius: item };
})

export default map;
