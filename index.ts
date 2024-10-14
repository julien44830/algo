class Arr {
  value: string[] | number[] = [];
  length: number = 0;


  pushJulien(el: string | number): number {
    const array = new Array(this.value.length + 1);

    for (let i = 0; i < this.value.length; i++) {
      array[i] = this.value[i]
    }
    array[this.value.length] = el;
    this.value = array;
    return this.value.length;
  }

  popJulien(): string | number {
    const array = new Array(this.value.length - 1)
    for (let i = 0; i < this.value.length; i++) {
      array[i] = this.value[i]
    }
    const removedElement = this.value[this.value.length - 1];
    this.value = array;
    return removedElement;
  }






  reduceJulien(el: number[]): number {
    let accumulator: number = 0;
    for (let i = 0; i < el.length; i = i + 1) {
      let currentValue: number = el[i];
      accumulator = accumulator + currentValue;
    }
    return accumulator
  }

  filterJulien(callBack: Function): string[] {
    let newArrJulien: any = new Array()

    for (let i = 0; i < this.value.length; i++) {
      if (callBack(this.value[i], i, this.value)) {
        newArrJulien = i
      }
      let j: number = 0;
      for (let i = 0; i < this.value.length; i++) {
        if (callBack(this.value[i], i, this.value)) {
          newArrJulien = this.value[j]
        }
      }
    }
    return newArrJulien
  }



  findIndexJulien(callback: Function): number {
    for (let i: number = 0; i < this.value.length; i++) {
      if (callback(this.value[i])) {
        return i;
      }
    }
    return -1;
  };
}
const arrFindIndex = new Arr();

arrFindIndex.pushJulien(1)
arrFindIndex.pushJulien(5)
arrFindIndex.pushJulien(9)
console.log('%c⧭', 'color: #00b300', arrFindIndex.findIndexJulien((e: number) => e > 6));






// let test: any = new Arr();
// console.log('%c⧭', 'color: #ff0000', "pushJulien => ", test);
// test.pushJulien("hello")  // [ 'hello']
// console.log('%c⧭', 'color: #ff0000', "pushJulien => hello ", test);
// test.pushJulien("wordPlusQue6") // [ 'hello', 'word']
// console.log('%c⧭', 'color: #ff0000', "pushJulien => word ", test);
// test.pushJulien("victory")  // [ 'hello', 'word', 'victory' ]
// console.log('%c⧭', 'color: #ff0000', "pushJulien => victory ", test);
// console.log('%c⧭', 'color: #917399', "filterJulien =>", test.filterJulien((e: any) => e === "word"));



// const testFind = test.findIndexJulien("victoryt") // 2
// console.log('%c⧭', 'color: #00a3cc', "findIndexJulien => victory ", testFind);




// console.log('%c⧭', 'color: #00e600', "popJulien  => ", test.popJulien());
// console.log('%c⧭', 'color: #ff0000', "pushJulien => ", test);

// const arrNumb = [1, 2, 2, 5];
// let testArrNumb = new Arr();
// console.log('%c⧭', 'color: #aa00ff', "reduceJulien => ", testArrNumb.reduceJulien(arrNumb));

export default Arr;