/*
// 37.  Skriv en funktion som läser in hur många tal användaren vill ange.
funktionen ska sedan läsa in detta antal tal och skriva ut dem.
*/

class Excercises {
  constructor(num) {
    this.num = num
  }
  calc = () => {}
}

class ThirtyOne extends Excercises {
  calc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i])
    }
    console.log(0)
  }
}

class ThirtyTwo extends Excercises {
  calc = (num) => {
    for (let i = 1; i <= num; i++) {
      if (i % 2 === 0) {
        console.log(i)
      }
    }
  }
}

class ThirtyThree extends Excercises {
  calc = (num) => {
    for (let i = num; i >= 0; i--) {
      console.log(i)
    }
  }
}

class ThrityFour extends Excercises {
  calc = () => {
    let str = ''
    while (str !== '*') {
      str = prompt('Write a character: ')
      console.log(str)
    }
  }
}

class ThirtyFive extends Excercises {
  constructor(num, bool) {
    super(num)
    this.bool = bool
  }
  calc = (boo) => {
    console.log(boo)
  }
}

class ThirtySix extends Excercises {
  calc = (num) => {
    let result = 1000
    for (let i = 0; i < 10; i++) {
      console.log(result)
      result = Math.floor(result * (1 + num))
    }
  }
}

class ThirtySeven extends Excercises {
  calc = () => {
    let num1 = +prompt('How many numbers do you want to write in?')
    for (let i = 0; i < num1; i++) {
      let num2 = +prompt('Write a number: ')
      console.log(num2)
    }
  }
}

const thirtySeven = new ThirtySeven()

thirtySeven.calc()
