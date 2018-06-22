import { STYLE_SPLITOR } from './_config';
export default (inStyles) => {
  return function (inString) {
    const styles = inString.split(STYLE_SPLITOR);
    const result = {};
    styles.forEach(item=>{
      result[item] = inStyles[item];
    });
    return result;
  }
};
