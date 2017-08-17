import list from '../configs/margin';

let map = {};

list.forEach(item=>{
  map[ `m${item}` ] = { margin: item };
  map[ `mt${item}` ] = { marginTop: item };
  map[ `mr${item}` ] = { marginRight: item };
  map[ `mb${item}` ] = { marginBottom: item };
  map[ `ml${item}` ] = { marginLeft: item };
  map[ `mx${item}` ] = { marginHorizontal: item };
  map[ `my${item}` ] = { marginVertical: item };
})

export default map;
