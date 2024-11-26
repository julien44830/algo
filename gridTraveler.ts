/**
 * Say that you are a traveler on a 2D CanvasGradient. You begin in the to-flet corner and your goal is to travel to the  botom-right corner.
 * You may only move down or to the left
 *
 * In how many way can you traval to the goal on a grid with (m * n) dimension ?
 * We should agree that any grid with a 0 dimension (m or n === 0) have 0 possibility
 * And any grid with an 1 by 1 dimension (n && m === 1) have only one possibiliy as the start and the end are the same
 *
 * Please write a function gridTraveler(m, n) that calulate this...
 * Your function should pass at least a 25 * 25 grid dimension easily
 *
 * Tips: use recursivity and memoïsation OR tabulations to solve this problem
 */

const gridTraveler = (m: number, n: number): number => {
  const matrice = getMatrice(m, n)
  let result: number = 1
  let i: number = 0;
  let j: number = 0;


  for (i; i < matrice.length; i++) {
    for (j; j < matrice[i].length; j++) {

      if (matrice[i][j + 1] === undefined) {
        console.log('%c⧭', 'color: #7f2200', "coucou");
        matrice[i][j] = result;
      }
    }

  }

  console.log(matrice);
  return result;
};

function getMatrice(m: number, n: number): number[][] {

  const arr1: number[][] = []
  let arr2: number[] = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr2.push(0)
    }
    arr1.push(arr2)
    arr2 = []
    console.log('%c⧭', 'color: #994d75', arr1[i]);
  }

  return arr1
}


// console.log(gridTraveler(0, 1)); // 0
// console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 2)); // 2
// console.log(gridTraveler(4, 4)); // 20
// console.log(gridTraveler(18, 18)); // 2333606220
// console.log(gridTraveler(25, 25)); // 32247603683100