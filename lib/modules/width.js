// import map from '../configs/width';

// let wppairs = {};
// let w1pairs = {};

// Object.keys(map).forEach(item => {
//   const value = map[item];
//   wppairs[`wp${item}`] = { width: `${value}%` };
// });

// for (let i = 1; i <= 10; i++) {
//   w1pairs[`w{i}`] = { width: `${i * 10}%` };
// }
import nxStyleGenerator from 'next-style-generator';

function generateW1(inList) {
  return nxStyleGenerator(inList, (_, value) => {
    return {
      key: `w_${value}`,
      value: {
        width: `${value}%`
      }
    }
  });
}

function generateWp(inList) {
  return nxStyleGenerator(inList, (_, value) => {
    return {
      key: `wp_${value}`,
      value: {
        width: `${i * 10}%`
      }
    }
  });
}


export {
  generateW1,
  generateWp
}
