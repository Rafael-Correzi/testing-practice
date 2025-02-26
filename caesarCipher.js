function caesarCipher(input, shift) {
  let stringArr = input.split('');
  let letters = new RegExp("[a-zA-Z]");
  for (let i = 0; i < stringArr.length; i++) {
    if (letters.test(stringArr[i])) {
      let currentLetter = stringArr[i].charCodeAt(0);
      stringArr[i] = shiftLetter(currentLetter, shift);
    }
  }
  return stringArr.join('');
}

function shiftLetter(charCode, shift) {
  let newCharCode = charCode + (shift % 26);
  if (newCharCode < 65 || newCharCode < 97 && charCode >= 97  ) {
    newCharCode = newCharCode + 26;
  }
  else if (newCharCode > 90 && charCode <= 90 || newCharCode > 122) {
    newCharCode = newCharCode - 26
  }
  return String.fromCharCode(newCharCode);
}

export { caesarCipher };