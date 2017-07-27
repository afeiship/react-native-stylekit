import map from '../configs/width';

let wppairs = {};
let w1pairs = {};

Object.keys(map).forEach(item=>{
  const value = map[ item ];
  wppairs[ `wp_${item}` ] = { width: `${value}%` };
});

for(let i=1; i=10; i++){
  w1pairs[`w_{i}`] = { width: `${item*10}%`};
}

export default Object.assign( wppairs, w1pairs );
