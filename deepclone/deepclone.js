/*

// copy of a variable
let x = 3
y = x //  x is copied into y

y++ // y is incremented

console.log(y) // now 4
console.log(x) // still 3

// shallow copy of an object
let adam = { name: 'Adam' }

let jason = adam
jason.name = 'Jason'

console.log(adam.name) // outputs "Jason"
console.log(jason.name) // outputs "Jason"


// "deep" copy of parameters inside an object

let aksel = { name: 'Aksel' }

let otto = {}
otto.name = aksel.name
console.log(otto.name) // outputs "Aksel"
otto.name = 'Otto'

console.log(aksel.name) // outputs "Aksel"
console.log(otto.name) // outputs "Otto"

*/

// deep copy with JSONstringify and JSONparse
// Wont copy methods!

/*

const user = {
  name: 'Adam',
  age: 35,
  job: 'Web Developer',
  nested: {
    greeting: 'Hello',
  },
  func: () => {
    return 'hello'
  },
}

let clone = JSON.parse(JSON.stringify(user))

clone.age = 32
clone.nested.greeting = "don't wanna!"

console.log(user)
console.log(user.func())
console.log(clone)
console.log(clone.func())

*/

//Deep copy with Object.assign and the "..." spread operator
//Doesn't copy nested objects!

/*

const user = {
  name: 'Adam',
  age: 35,
  job: 'Web Developer',
  nested: {
    greeting: 'Hello',
  },
  func: () => {
    return 'hello'
  },
}

let clone = Object.assign({}, user)

let cloneSpread = { ...user }

clone.age = 32
clone.nested.greeting = "don't wanna!"

cloneSpread.age = 77
cloneSpread.nested.greeting = 'I wanna!'

console.log(user)
console.log(clone)
console.log(cloneSpread)

*/

//Deep clone with nested objects using spread operator
//Clones everything but requires work!

/*

const user = {
  name: 'Adam',
  age: 35,
  job: 'Web Developer',
  nested: {
    greeting: 'Hello',
  },
  func: () => {
    return 'hello'
  },
}

let clone = { ...user }

let cloneSpread = { ...user }

clone.age = 32
clone.nested.greeting = "don't wanna!"

cloneSpread.age = 77
cloneSpread = {
  ...cloneSpread,
  nested: {
    ...cloneSpread.nested,
    greeting: 'I will greet!',
  },
}

console.log(user)
console.log(clone)
console.log(cloneSpread)

*/

/*
Skriv en funktion som gör en deep-clone av ett objekt
*/
/*
// Denna funktion kopierar individuella värden
function cloneValue(value) {
    let type = typeof value;
    // Om typen på värdet är ett nummer så kan vi kopiera rakt av
    if (type === 'number' || type === 'string') {
        return value;
    }
    
    // Om typen är ett objekt så måste vi kopiera det 'sub' objektet också
    if (type === 'object') {
        // Om typen också är en array så kan vi kopiera den separat för att JavaScript skall förtså att det faktiskt är en array och inte ett vanligt objekt.
        if (Array.isArray(value)) {
            let array = []; // Skapar en ny array som vi lägger nya kopierade värden i
            for (let i = 0; i < value.length; i++) { // Går igenom den originella arrayen och kopierar värdena till den nya arrayen (recursively)
                array.push(cloneValue(value[i]));
            }
            return array;
        } else {
            // Om typen är ett 'vanligt' objekt så kopierar vi det objektet 'vanligt'
            return deepClone(value);
        }
    }
}

// Denna funktion kopierar hela objekt
function deepClone(object) {
    let copy = {};

    for (let key in object) {
        let clonedValue = cloneValue(object[key]);
        copy[key] = clonedValue;
    }

    return copy;
}

let object = {
    name: 'JavaScript',
    age: 5,
    bla: {
        hej: 'bla',
        sub: {
            a: 5,
            b: 5,
        },

        data: [
            { a: 5, b: 5 },
            { a: 5, b: 5, l: 5 },
        ]
    }
}

let clone = deepClone(object);
console.log(object)
console.log(clone);

*/

/*
Skriv en funktion som gör en deep-clone av ett objekt, med metoder!
*/
/*
// Denna funktion kopierar individuella värden
function cloneValue(value) {
  let type = typeof value
  // Om typen på värdet är ett nummer så kan vi kopiera rakt av
  if (type === 'number' || type === 'string' || type === 'function') {
    return value
  }

  // Om typen är ett objekt så måste vi kopiera det 'sub' objektet också
  if (type === 'object') {
    // Om typen också är en array så kan vi kopiera den separat för att JavaScript skall förtså att det faktiskt är en array och inte ett vanligt objekt.
    if (Array.isArray(value)) {
      let array = [] // Skapar en ny array som vi lägger nya kopierade värden i
      for (let i = 0; i < value.length; i++) {
        // Går igenom den originella arrayen och kopierar värdena till den nya arrayen (recursively)
        array.push(cloneValue(value[i]))
      }
      return array
    } else {
      // Om typen är ett 'vanligt' objekt så kopierar vi det objektet 'vanligt'
      return deepClone(value)
    }
  }
}

// Denna funktion kopierar hela objekt
function deepClone(object) {
  let copy = {}

  for (let key in object) {
    let clonedValue = cloneValue(object[key])
    copy[key] = clonedValue
  }

  return copy
}

let object = {
  name: 'JavaScript',
  age: 5,
  func: () => {
    return 'hello'
  },
  bla: {
    nestedFunc: () => {
      return 'hello'
    },
    hej: 'bla',
    sub: {
      a: 5,
      b: 5,
    },

    data: [
      { a: 5, b: 5 },
      { a: 5, b: 5, l: 5 },
    ],
  },
}

let clone = deepClone(object)
clone.func = () => {
  return 'not hello!'
}
clone.bla.nestedFunc = () => {
  return 'not hello!'
}
console.log(object)
console.log(clone)
console.log(object.func(), object.bla.nestedFunc())
console.log(clone.func(), clone.bla.nestedFunc())

*/
