const pairSocks = (arry) => {
  let tempObj = {};
  let tempArry = []
  let tempArry2 = []
  let tempNum = 0

  // sorting number
  for (let i = 1; i < arry.length; i++)
    for (let j = 0; j < i; j++)
      if (arry[i] < arry[j]) {
        let x = arry[i];
        arry[i] = arry[j];
        arry[j] = x;
      }

  // get value per number
  for (let i = 0; i < arry.length; i++) {
    tempObj[arry[i]] = tempObj[arry[i]] ? tempObj[arry[i]] + 1 : 1;
  }

  // get value per key tempObj
  tempArry = Object.values(tempObj)

  // filter array number with divided then rounding use math floor
  for (let i = 0; i < tempArry.length; i++) {
    tempArry2.push(Math.floor(tempArry[i] /2))
  }

  // sum all number in array
  for (let i = 0; i < tempArry2.length; i++) {
    tempNum += tempArry2[i]
  }

  return tempNum
}

console.log(pairSocks([10, 20, 20, 10, 10, 30, 50, 10, 20])); //3
console.log(pairSocks([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5])); //6
console.log(pairSocks([1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); //4