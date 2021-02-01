module.exports = function check(str, bracketsConfig) {

  for (let i = 0; i < bracketsConfig.length * 2; i++) {
    bracketsConfig.forEach(element => {
      let regExpr = element.join('')
      str = checker(str, regExpr)
    });
  }

  function checker(str, reg) {
    let replace = str
    for (let i = 0; i < str.length / 2; i++) {
      replace = replace.replace(reg, '')
    }
    return replace
  }
  return str ? false : true
}
