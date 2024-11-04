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


  //index ou placer
  //nombre element a supp
  //element a ajouter
  spliceJulien(a: number, b: number, c: any): any[] {
    const array = new Array(this.value.length + 1);
    const result = new Array(b);

    for (let i = 0; i < a; i++) {
      array[i] = this.value[i]
    }

    array[a] = c
    for (let i = a + 1; i < this.value.length; i++) {
      array[i] = this.value[i]
    }

    console.log('%c⧭', 'color: #cc0088', array);
    return result
  }

}

// test de la methode findIndex()
const arr = new Arr();

arr.pushJulien(1)
arr.pushJulien(5)
arr.pushJulien(9)



console.log('%c⧭', 'color: #e57373', arr.spliceJulien(1, 0, 7));
console.log('%c⧭', 'color: #735656', arr);
// console.log('%c⧭', 'color: #00b300', arr.findIndexJulien((e: number) => e > 6));

export default Arr;