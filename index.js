function myEach(collection, callback) {
    let newCollection;

    if (Array.isArray(collection)) {
      newCollection =[...collection];
    } else {
      newCollection = Object.values(collection);
    }

    for (let i = 0; i < newCollection.length; i++) {
      callback(newCollection[i]);
    }

    return collection;
}

function myMap(collection, callback) {
  let newCollection;

  if (Array.isArray(collection)) {
    newCollection = [...collection];
  } else {
    newCollection = Object.values(collection)
  }

  for (let i = 0; i < newCollection.length; i++) {
    newCollection[i] = callback(newCollection[i]);
  }
  return newCollection;
}

function myReduce(collection, callback, acc) {
  let newCollection;
  let singleValue;

  if (Array.isArray(collection)) {
    newCollection = [...collection];
  } else {
    newCollection = Object.values(collection);
  }

  if (acc) {
    singleValue = acc;
  } else {
    singleValue = newCollection[0];
  }

  if (acc) {
    for (let i = 0; i < newCollection.length; i++) {
      singleValue = callback(singleValue, newCollection[i], newCollection);
    }
  } else {
    for (let i = 1; i < newCollection.length; i++) {
      let val = newCollection[i];
      singleValue = callback(singleValue, val, newCollection);
    }
  }
  return singleValue;
}

function myFind(collection, predicate) {
  let newCollection;
  let result = undefined;

  if (Array.isArray(collection)) {
    newCollection = [...collection];
  } else {
    newCollection = Object.values(collection);
  }

  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) {
      result = newCollection[i];
      break;
    }
  }

  return result;
}

function myFilter(collection, predicate) {
  let newCollection;
  let result = [];

  if (Array.isArray(collection)) {
    newCollection = [...collection];
  } else {
    newCollection = Object.values(collection);
  }

  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) {
      result.push(newCollection[i]);
    }
  }

  return result;
}

function mySize(collection) {
  let newCollection;

  if (Array.isArray(collection)) {
    newCollection = [...collection];
  } else {
    newCollection = Object.values(collection);
  }

  return newCollection.length;
}

function myFirst(array, n) {
  let outputArray = [];
  if (!n) {
    return array[0];
  } else {
    for (let i = 0; i < n; i++)
    outputArray.push(array[i]);
    return outputArray;
  }
}

function myLast(array, n) {
  let outputArray = [];
  if (!n) {
    return array[array.length-1];
  } else {
    for (let i = (array.length - n); i < array.length; i++) {
      console.log('length', array.length);
      console.log(array[i]);
      outputArray.push(array[i]);
    }
    return outputArray;
  }
}

function mySortBy(array, callback) {
  let newArray = [...array];


  if (typeof newArray[0] === 'number') {
    newArray.sort(function (a, b) {
      return callback(a) - callback(b);
    })
  } else {
    newArray.sort(function (a,b) {
      if (callback(a) < callback(b)) {
        return -1;
      }
      return 0;
    });
  }
  return newArray;
}

function myFlatten(array, boolean, newArr = []) {
  // console.log('at 0', array[0])
  if (array.length === 0) {
    console.log('newArr1', newArr);
    return newArr;
  } 
  if (typeof array[0] === 'number') {
    newArr.push(array.shift());
    // console.log('newArr2', newArr);
    // console.log('array length', array.length);
    console.log('array', array[0]);
    return myFlatten(array, boolean, newArr);
  }
  if (Array.isArray(array[0])) {
    // console.log('array2', array[0]);
    if (Array.isArray(array[0][0])) {
      console.log('arraaaaaay', array[0]);
      array[0] = array[0][0].slice()
      console.log('isarray2', array);
      // return myFlatten(array, boolean, newArr);
    }
    if (typeof array[0][0] === 'number'){
      console.log('inside array', array);
      newArr.push(array[0][0]);
      console.log(array[0].slice(1));
      array[0] = array[0].slice(1);
      console.log('pushed array', array);
      return myFlatten(array, boolean, newArr);
    }
    if (array[0].length === 0) {
      array.shift();
      return myFlatten(array, boolean, newArr);
      // console.log('shifted array', array)
    }
  }
}



// myFlatten([1, [2], [3, [[4]]]]);
// => [1, 2, 3, 4];

// myFlatten([1, [2], [3, [[4]]]], true);
// => [1, 2, 3, [[4]]];

myFlatten([1, [2, 3], [[4, 5], 6, [7, [8, 9]]]]);
// console.log(newArr)

// myFlatten([]);

// function countDown(number) {
//   console.log(number);
//   const newNumber = number - 1;
//   if (newNumber > 0) {
//     countDown(newNumber);
//   }
// }

// countDown(10);

// function factorial(number) {
//   if (number === 1) {
//     return number;
//   }
//   return number * factorial(number-1);
// }

// console.log(factorial(4));


function myKeys(object) {
  let result = [];
  for (let key in object) {
    result.push(key);
  }
  return result;
}

function myValues(object) {
  let result = [];
  for (let key in object) {
    result.push(object[key]);
  }
  return result;
}


