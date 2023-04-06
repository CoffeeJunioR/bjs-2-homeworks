"use strict"
function solveEquation(a, b, c) {
  const solve = [];
  const discriminant = b**2 - 4 * a * c;
  if (discriminant < 0) {
    return solve;
} else if (discriminant == 0) {
  solve.push(-b/(2*a));
    return solve;
} else if (discriminant > 0) {
  solve.push((-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a));
    return solve;
};
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 12 / 100;
  let moneyForReturn = amount - contribution;
  let payment = moneyForReturn * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  let fullPayment = Math.round(payment * countMonths * 100) / 100;
  return fullPayment;
}