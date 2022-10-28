function checkSpecialCharacter(str) {
  let arrayStr = ['']
  let specialChar = '[`!@#$%^&*()_+-=[]{}&;\\":|,.<>/?~]/'
  let tempNum = 0
  let num = 0

  // convert to array every space
  for (let x = 0; x < str.length; x++) {
    if (str[x] == ' ') {
      num++;
      arrayStr.push('');
    } else {
      arrayStr[num] += str[x];
    }
  }

  for (let i = 0; i < arrayStr.length; i++) {
    // check if end word have . or , or ? or !
    if (arrayStr[i][arrayStr[i].length - 1] === '.' || arrayStr[i][arrayStr[i].length - 1] === ',' || arrayStr[i][arrayStr[i].length - 1] === '?' || arrayStr[i][arrayStr[i].length - 1] === '!') {
      // loop for check word if have special char with out end word, exple: why? looping just why
      for (let x = 0; x < arrayStr[i].length - 1; x++) {
        for (let k = 0; k < specialChar.length - 1; k++) {
          if (arrayStr[i][x] === specialChar[k]) {
            // add value word have special char
            tempNum +=1
            break
          }
        }
      }
    } else {
      // loop for check word if have special
      for (let x = 0; x < arrayStr[i].length; x++) {
        // if have '-' check palindrom
        if (arrayStr[i][x] === '-') {
          let arr = ['']
          let tmpArr = []
          let j = 0;

          for (let x = 0; x < arrayStr[i].length; x++) {
            if (arrayStr[i][x] == '-') {
              j++;
              arr.push('');
            } else {
              arr[j] += arrayStr[i][x];
            }
          }

          for (let x = 0; x < arr[0].length; x++) {
            if (arr[0][x].toLocaleLowerCase() === arr[1][x].toLocaleLowerCase()) {
              tmpArr.push(true)
            }
          }
          
          if (arr[1].length !== tmpArr.length) {
            // add value word have special char
            tempNum +=1
            break
          }
        } else {
          for (let k = 0; k < specialChar.length - 1; k++) {
            if (arrayStr[i][x] === specialChar[k]) {
              // add value word have special char
              tempNum +=1
              break
            }
          }
        }
      }
    }
  }

  // length array from string min value number of sum words have special charcter
  return arrayStr.length -  tempNum
}

console.log(checkSpecialCharacter('Saat meng*ecat tembok, Agung dib_antu oleh Raihan.'))
console.log(checkSpecialCharacter('Berapa u(mur minimal[ untuk !mengurus ktp?'))
console.log(checkSpecialCharacter('Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.'))