"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;
  if (d < 0) {
    return arr;
} else if (d == 0) {
    arr.push(-b/(2*a));
    return arr;
} else if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a));
    return arr;
};
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / countMonths / 100;
  let moneyForReturn = amount - contribution;
  let payment = moneyForReturn * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  let fullPayment = Math.round(payment * countMonths * 100) / 100;
  return fullPayment;
}