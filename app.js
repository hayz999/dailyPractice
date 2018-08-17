// remove common numbers between two arrays and make one array with unique items

function array_diff(a, b) {
  return a.filter(value => -1 === b.indexOf(value));
}

// validate all parentheses close in an expression

function validParentheses(parens) {
  let counter = 0
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') {
      counter++
    } else if (parens[i] == ')') {
      counter--
      if (counter < 0) return false
    }
  }
  return counter == 0
}

// round number to the next multiple of 5 

function roundToNext5(n) {
  while (n % 5 !== 0) {
    n++
  }
  return n
}