import nxStyleGenerator from 'next-style-generator';
import { PREFIX } from './_config';


function generateW1(inList) {
  return nxStyleGenerator(inList, (_, value) => {
    return {
      key: `w${PREFIX}${value}`,
      value: {
        width: `${value}%`
      }
    }
  });
}

function generateWp(inList) {
  return nxStyleGenerator(inList, (_, value) => {
    return {
      key: `wp${PREFIX}${value}`,
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
