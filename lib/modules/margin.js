import list from '../configs/margin';

let map = {};

list.forEach(item=>{
  map[ `m_${item}` ] = { margin: item };
  map[ `mt_${item}` ] = { marginTop: item };
  map[ `mr_${item}` ] = { marginRight: item };
  map[ `mb_${item}` ] = { marginBottom: item };
  map[ `ml_${item}` ] = { marginLeft: item };
  map[ `mx_${item}` ] = { marginHorizontal: item };
  map[ `my_${item}` ] = { marginVertical: item };
})

export default map;
