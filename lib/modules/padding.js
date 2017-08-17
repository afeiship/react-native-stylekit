import list from '../configs/padding';

let map = {};

list.forEach(item=>{
  map[ `p${item}` ] = { padding: item };
  map[ `pt${item}` ] = { paddingTop: item };
  map[ `pr${item}` ] = { paddingRight: item };
  map[ `pb${item}` ] = { paddingBottom: item };
  map[ `pl${item}` ] = { paddingLeft: item };
  map[ `px${item}` ] = { paddingHorizontal: item };
  map[ `py${item}` ] = { paddingVertical: item };
})

export default map;
