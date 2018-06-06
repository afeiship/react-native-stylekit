import nxStyleGenerator from 'next-style-generator';
import { BOX_MAP, PREFIX } from './_config';

export const genarateColor = function (inList) {
  return nxStyleGenerator(inList, (_, value) => {
    return {
      key: `c${PREFIX}${value}`,
      value: {
        color: value
      }
    }
  });
};


export const genarateBgColor = function (inList) {
  return nxStyleGenerator(inList, (_, value) => {
    return {
      key: `bg${PREFIX}${value}`,
      value: {
        color: value
      }
    }
  });
}

