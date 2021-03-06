import nxStyleGenerator from 'next-style-generator';
import { PREFIX } from './_config';

export default function (inList) {
  return nxStyleGenerator(inList, (_, value) => {
    return {
      key: `f${PREFIX}${value}`,
      value: {
        fontSize: value
      }
    }
  });
}
