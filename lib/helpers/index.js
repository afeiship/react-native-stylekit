const SPARATOR = /\s/;

export default (inStyles) => {
  return function (inString) {
    const styles = inString.split(SPARATOR);
    const result = {};
    styles.forEach(item => {
      Object.assign(result, inStyles[item]);
    });
    return result;
  }
};
