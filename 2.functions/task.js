function getArrayParams(...arr) {
  let min = Infinity;
  let max = Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    let arrayLength = arr.length;
    avg = sum / arrayLength;
  };
  max = Math.max.apply(null, arr);
  min = Math.min.apply(null, arr);
  avg = +avg.toFixed(2)
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr == 0) {
    return 0
  };
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr == 0) {
    return 0
  };
  let differenceMaxMin = Math.max.apply(null, arr) - Math.min.apply(null, arr);
  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  if (arr == 0) {
    return 0
  };
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement +=arr[i]
    }
  }
  let differenceEvenOdd = sumEvenElement - sumOddElement;
  return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr == 0) {
    return 0
  };
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let averageEvenElements = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i]
      countEvenElement++
      averageEvenElements = sumEvenElement / countEvenElement
    }
  }
  return averageEvenElements
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let result = [];
  for (let i = 0; i < arrOfArr; i++) {
  result = result.push(func(arrOfArr[i]));
  if (result > maxWorkerResult) {
    maxWorkerResult = result;
  };
  }
  return maxWorkerResult;
}
