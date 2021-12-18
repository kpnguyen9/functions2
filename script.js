// const arr = [1, 2, 3];

// // arr.forEach((x) => console.log(x));

// function forArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// forArr(arr);

// //forEach

// const myArray = [1, 2, 3]

// // myArray.forEach(x => {
// //   console.log(x)
// // });

// function myMethod(myArray) {
//   for (let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);

//   }
// }

// myMethod(myArray)

// const myArray = ["g", "r", "i" ,"n", "d"];
// let myString = '';
// let myConnect = (myArray) => {
//   for (i = 0; i < myArray.length; i++) {
//     myString = myString + myArray[i]

//   };
//    return myString;
// }

// console.log(myConnect(myArray));

// let arrNum = [1, 2, 3, 4, 5];

// let newArr = [];

// function plusThirty(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] + 30);
//   }
//   return newArr;
// }

// console.log(plusThirty(arrNum));

//set array
//for loop within a for loop
//compare i and i+1 index values
//if i>(i+1) then swap
//continue until its in ascending order and then return

let arr1 = [3, 1, 4, 2];

// function bubbleSort(inputArr) {
//   for (let i = 0; i < inputArr.length; i++) {
//     for (let j = 0; j < inputArr.length; j++) {
//       if (inputArr[j] > inputArr[j + 1]) {
//         [inputArr[j], inputArr[j + 1]] = [inputArr[j + 1], inputArr[j]];
//       }
//     }
//   }
//   return arr1;
// }

// console.log(bubbleSort(arr1));

function whileSort(arr) {
  let z = 0;
  while (z < arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    z++;
  }
  return arr1;
}

console.log(whileSort(arr1));
