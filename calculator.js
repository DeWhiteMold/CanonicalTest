function isOper(str) {
  return ["+", "-", "/", "*"].includes(str)
}

function calculator(str) {
  const array = str.split(' ').reverse()
  const stack = [];
  for (let i = 0; i < array.length; i++) {
    if (isOper(array[i])) {
      let [l, r] = [stack.shift(), stack.shift()];
      if(array[i] === '+') {
        stack.unshift(l + r);
      } else if(array[i] === '-') {
        stack.unshift(l - r);
      } else if(array[i] === '*') {
        stack.unshift(l * r);
      } else if(array[i] === '/') {
        stack.unshift(l / r);
      }
    } else if(isNaN(array[i] * 1)) {
      throw 'not a number or operator'
    } else {
      stack.unshift(+array[i])
    }
  }

  return stack[0]
}

export default calculator;