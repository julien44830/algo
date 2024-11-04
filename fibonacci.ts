// let positionNumber: number = 1500;

export function fibonacci(position: number): number {
  console.log('%c⧭', 'color: #99adcc', "nombre demandé : ", position);
  if (typeof position !== 'number') {
    throw new TypeError("Le paramètre doit être un nombre");
  }


  let arr: number[] = [0, 1];
  let i: number = 1;
  for (i; i < position; i = i + 1) {
    arr.push(arr[i - 1] + arr[i])
  }
  console.log('%c⧭', 'color: #ffcc00', "resulta : ", arr[position]);
  return arr[position]
}

function getRandomInt() {
  let min = Math.ceil(0); // Arrondir le minimum à l'entier supérieur
  let max = Math.floor(145); // Arrondir le maximum à l'entier inférieur
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

fibonacci(getRandomInt())
