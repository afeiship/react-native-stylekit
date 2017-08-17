import map from '../configs/color';
let pairs = {};

Object.keys( map ).forEach( item => {
  const value = map[ item ];

  pairs[ `c_${item}` ] = {
    color: value
  };

  pairs[ `bg_${item}` ] = {
    backgroundColor: value
  };
});

export default pairs;
