import nxStyleGenerator from 'next-style-generator';
import { BOX_MAP, PREFIX } from './_config';

export default function(inList, inDirection) {
  return nxStyleGenerator(inList, (_, value) => {
    return {
      key: `${inDirection}${PREFIX}${value}`,
      value: {
        [BOX_MAP[inDirection]]: value
      }
    }
  });
};
