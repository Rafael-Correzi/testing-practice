function analyzeArray(array) {
  let sum = array.reduce((a, b) => {
    return a + b;
  }, 0)
  let average = sum/array.length;
  let min = array.reduce((previous, current) => {

  })
  return { average };
}

export { analyzeArray };