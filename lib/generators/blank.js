import nxStyleGenerator from 'next-style-generator';
import { BOX_MAP, PREFIX } from './_config';

export default function (inList) {
  return nxStyleGenerator(inList, (_, value) => {
    return {
      key: `blank${PREFIX}${value}`,
      value: {
        height: value
      }
    }
  });
}
