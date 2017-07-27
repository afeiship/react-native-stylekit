import colorMap from '../configs/color';
let colorPairs = {};

Object.keys( colorMap ).forEach( item => {
  colorPairs[ `c_${item}` ] = {
    color: colorMap[item]
  };

  colorPairs[ `bg_${item}` ] = {
    backgroundColor: colorMap[item]
  };
});

export default colorPairs;
