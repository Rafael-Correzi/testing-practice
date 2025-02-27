function analyzeArray(array) {
  let sum = array.reduce((a, b) => {
    return a + b;
  }, 0)
  let length = array.length;
  let average = sum/length;
  let min = array.reduce((a, b) => {
    return a < b ? a : b;
  })
  let max = array.reduce((a, b) => {
    return a > b ? a : b;
  })
  return { average, min, max, length };
}

export { analyzeArray };