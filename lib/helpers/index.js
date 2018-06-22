const SPARATOR = /\s/;
const MID_LINE = /-/g;
const UNDERSTORE = '_';

export default (inStyles) => {
  return function (inString) {
    const styles = inString.split(SPARATOR);
    const result = {};
    styles.forEach(item => {
      Object.assign(
        result,
        inStyles[ item.replace(MID_LINE, UNDERSTORE) ]
      );
    });
    return result;
  }
};
