/*
console.log(deepEqual(object1, object2))

function deepEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  console.log(keys1, keys2)
  if (keys1.length !== keys2.length) {
    return false
  }
  for (const key of keys1) {
    const val1 = obj1[key]
    const val2 = obj2[key]

    // mitt eget arbete
    if (typeof val1 === 'function' && typeof val2 === 'function') {
      const isFunctionEqual = compareFunctions(val1, val2)
      if (isFunctionEqual === false) {
        return false
      }
    }
    // slut
    const areObjects = isObject(val1) && isObject(val2)
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false
    }
  }
  return true
}
function isObject(object) {
  return (
    object != null &&
    (typeof object === 'object' || typeof object === 'function')
  )
}

//mitt eget arbete
function compareFunctions(func1, func2) {
  return func1.toString() == func2.toString()
}

*/
/*
lodash:
_.isEqual(object1, object2))

node.js:
assert.deepStrictEqual(object1, object2)
*/
/*
const customers = [
  {
    name: 'toby',
    age: 33,
    zipCode: 21445,
    shipData: true,
  },
  {
    name: 'toby',
    age: 12,
    zipCode: 21466,
    shipData: false,
  },
  {
    name: 'toby',
    age: 33,
    zipCode: 21423,
    shipData: true,
  },
  {
    name: 'toby',
    age: 33,
    zipCode: 21461,
    shipData: false,
  },
  {
    name: 'toby',
    age: 6,
    zipCode: 21445,
    shipData: true,
  },
]
/*
const goodCustomers = customers.filter(checkZip)

function checkZip(customer) {
  return customer.zipCode === 21445
}

console.log(goodCustomers)


const underAgeCustomers = customers.some(checkAge)

function checkAge(customer) {
  return customer.age < 18
}

console.log(underAgeCustomers)
*/
/*
const haveShippingData = customers.every(checkShipData)

function checkShipData(customer) {
  return customer.shipData === true
}

console.log(haveShippingData)
*/
/*
const whatIsName = customers.map(getNames)

function getNames(customer) {
  return customer.name
}

console.log(whatIsName)
*/
