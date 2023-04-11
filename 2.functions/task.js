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
  if (arr.length == 0) {
    return 0
  };
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0
  };
  return Math.max.apply(null, arr) - Math.min.apply(null, arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
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
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0
  };
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i]
      countEvenElement++
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
  let result = [];
  result = func(...arrOfArr[i]);
  if (result > maxWorkerResult) {
    maxWorkerResult = result;
  };
  }
  return maxWorkerResult;
}
