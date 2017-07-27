import list from '../configs/padding';

let map = {};

list.forEach(item=>{
  map[ `p_${item}` ] = { padding: item };
  map[ `pt_${item}` ] = { paddingTop: item };
  map[ `pr_${item}` ] = { paddingRight: item };
  map[ `pb_${item}` ] = { paddingBottom: item };
  map[ `pl_${item}` ] = { paddingLeft: item };
  map[ `px_${item}` ] = { paddingHorizontal: item };
  map[ `py_${item}` ] = { paddingVertical: item };
})

export default map;
