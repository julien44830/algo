class Arr {
  value: string[] = [];
  length: number = 0;


  pushJulien(el: string): number {
    const array = new Array(this.value.length + 1);

    for (let i = 0; i < this.value.length; i++) {
      array[i] = this.value[i]
    }
    array[this.value.length] = el;
    this.value = array;
    this.length = this.value.length;
    return this.length;
  }

  popJulien(): string | undefined {
    const array = new Array(this.value.length - 1)
    for (let i = 0; i < this.value.length; i++) {
      array[i] = this.value[i]
    }
    const removedElement = this.value[this.value.length - 1];
    this.value = array;
    return removedElement;
  }

  findIndexJulien (el: string): number | undefined {
    for (let i = 0; i < this.value.length; i++) {
      if (this.value[i] === el) {
        return i
      }
    }
    return undefined
  };

  reduceJulien(el : number[]):number{
    let accumulator:number = 0;
    for(let i = 0 ; i < el.length ; i = i + 1){
      let currentValue:number = el[i];
      accumulator = accumulator + currentValue ;
    }

    return accumulator
  }
}

let test = new Arr();
console.log('%c⧭', 'color: #ff0000',"pushJulien => ", test);
test.pushJulien("hello")  // [ 'hello']
console.log('%c⧭', 'color: #ff0000',"pushJulien => ", test);
test.pushJulien("word") // [ 'hello', 'word']
console.log('%c⧭', 'color: #ff0000',"pushJulien => ", test);
test.pushJulien("victory")  // [ 'hello', 'word', 'victory' ]
console.log('%c⧭', 'color: #ff0000',"pushJulien => ", test);

const testFind = test.findIndexJulien ("victory") // 2

console.log('%c⧭', 'color: #00a3cc',"findIndexJulien => ", testFind);

test.popJulien() // [ 'hello', 'word']

console.log('%c⧭', 'color: #00e600',"popJulien  => ", test.popJulien());

const arrNumb = [1 , 2 , 2 , 5];
let testArrNumb = new Arr();
console.log('%c⧭', 'color: #aa00ff',"reduceJulien => " , testArrNumb.reduceJulien(arrNumb));

export default Arr;