const SPARATOR = /\s/;
export default (inStyles) => {
  return function (inString) {
    const styles = inString.split(SPARATOR);
    const result = {};
    styles.forEach(item=>{
      result[item] = inStyles[item];
    });
    return result;
  }
};
