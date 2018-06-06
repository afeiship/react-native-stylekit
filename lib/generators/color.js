import nxStyleGenerator from 'next-style-generator';
import { BOX_MAP, PREFIX } from './_config';

export const genarateColor = function (inList) {
  return nxStyleGenerator(inList, (key, value) => {
    return {
      key: `c${PREFIX}${key}`,
      value: {
        color: value
      }
    }
  });
};


export const genarateBgColor = function (inList) {
  return nxStyleGenerator(inList, (key, value) => {
    return {
      key: `bg${PREFIX}${key}`,
      value: {
        backgroundColor: value
      }
    }
  });
}

